/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NodeAutoResizePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_view = require("@codemirror/view");

// src/utils.ts
function isTouchingBottom(node1, node2) {
  const left1 = node1.x;
  const right1 = node1.x + node1.width;
  const top1 = node1.y;
  const bottom1 = node1.y + node1.height;
  const left2 = node2.x;
  const right2 = node2.x + node2.width;
  const top2 = node2.y;
  const bottom2 = node2.y + node2.height;
  return Math.abs(bottom1 - top2) <= 20 && (left1 < right2 && right1 > left2);
}
function isTouchingRight(node1, node2) {
  const left1 = node1.x;
  const right1 = node1.x + node1.width;
  const top1 = node1.y;
  const bottom1 = node1.y + node1.height;
  const left2 = node2.x;
  const right2 = node2.x + node2.width;
  const top2 = node2.y;
  const bottom2 = node2.y + node2.height;
  return Math.abs(right1 - left2) <= 20 && (top1 < bottom2 && bottom1 > top2);
}
function adjustPositionsRecursively({
  movedNode,
  nodes
}, {
  adjustedHeight,
  adjustedWidth
}) {
  const requestMoveQueue = [];
  for (const node of nodes) {
    const currentX = node.bbox.minX;
    const currentY = node.bbox.minY;
    if (node.label)
      continue;
    if (isTouchingBottom(movedNode, node) && adjustedHeight !== 0) {
      requestMoveQueue.push({
        node,
        moveTo: {
          x: currentX,
          y: currentY + adjustedHeight + 20
        }
      });
      adjustPositionsRecursively({
        movedNode: node,
        nodes: nodes.filter((n) => n.id !== movedNode.id)
      }, {
        adjustedHeight,
        adjustedWidth: 0
      });
    } else if (isTouchingRight(movedNode, node) && adjustedWidth !== 0) {
      requestMoveQueue.push({
        node,
        moveTo: {
          x: currentX + adjustedWidth,
          y: currentY
        }
      });
      adjustPositionsRecursively({
        movedNode: node,
        nodes: nodes.filter((n) => n.id !== movedNode.id)
      }, {
        adjustedHeight: 0,
        adjustedWidth
      });
    }
  }
  requestMoveQueue.forEach(({ node, moveTo }) => {
    node.moveTo(moveTo);
  });
}

// src/main.ts
var DEFAULT_SETTINGS = {
  maxWidth: 400,
  widthAutoResize: true,
  trueWidth: true,
  emfactor: "2.0,1.8,1.6,1.4,1.2,1.1"
};
var updateNodeSize = (plugin) => {
  return import_view.EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      const editor = v.state.field(import_obsidian.editorInfoField);
      if (editor.node) {
        const height = v.view.contentHeight;
        if (editor.node.height === height)
          return;
        let width = editor.node.width;
        if (plugin.settings.widthAutoResize) {
          const editorView = v.view;
          const currentDoc = editorView.state.doc;
          if (plugin.settings.trueWidth) {
            let longestLineLength = 0;
            for (const line of currentDoc.iterLines()) {
              const firstLineLength = line.length;
              const headerNumber = countLeadingHashtags(line);
              const emfactor = getEmFactor(plugin.settings.emfactor, headerNumber);
              longestLineLength = Math.max(longestLineLength, editorView.defaultCharacterWidth * firstLineLength * emfactor + 56);
            }
            width = longestLineLength;
          } else {
            const firstLineLength = currentDoc.line(1).length;
            const headerNumber = countLeadingHashtags(currentDoc.line(1).text);
            const emfactor = getEmFactor(plugin.settings.emfactor, headerNumber);
            width = editorView.defaultCharacterWidth * firstLineLength * emfactor + 56;
          }
        }
        const originalHeight = editor.node.height;
        const originalWidth = editor.node.width;
        const nodes = Array.from(editor.node.canvas.nodes.values());
        adjustPositionsRecursively({
          movedNode: editor.node,
          nodes
        }, {
          adjustedHeight: height - originalHeight,
          adjustedWidth: (width > plugin.settings.maxWidth ? editor.node.width : width) - originalWidth
        });
        editor.node.resize({
          width: width > plugin.settings.maxWidth ? editor.node.width : width,
          height: height + 20
        });
        plugin.debounceSaveCanvas(editor.node.canvas);
      }
    }
  });
};
var NodeAutoResizePlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.debounceSaveCanvas = (0, import_obsidian.debounce)((canvas) => {
      canvas.requestSave();
    }, 200);
  }
  async onload() {
    this.loadSettings();
    this.addSettingTab(new NodeAutoResizeSettingTab(this.app, this));
    this.registerEditorExtension([updateNodeSize(this)]);
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
function getEmFactor(emfactor, headerNumber) {
  if (headerNumber == 0 || headerNumber > 6)
    return 1;
  const emfactorArray = emfactor.split(",");
  const parsedValue = parseFloat(emfactorArray[headerNumber - 1]);
  return isNaN(parsedValue) ? 1 : parsedValue;
}
function countLeadingHashtags(input) {
  const match = input.trimStart().match(/#+ /);
  return match ? match[0].length - 1 : 0;
}
var NodeAutoResizeSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Auto resize for width").setDesc("Automatically resize the width of the node.").addToggle((toggle) => toggle.setValue(this.plugin.settings.widthAutoResize).onChange(async (value) => {
      this.plugin.settings.widthAutoResize = value;
      await this.plugin.saveSettings();
      setTimeout(() => {
        this.display();
      }, 100);
    }));
    if (this.plugin.settings.widthAutoResize) {
      new import_obsidian.Setting(containerEl).setName("Max width for auto resize").setDesc("The maximum width of the node.").addText((text) => text.setValue(this.plugin.settings.maxWidth.toString()).onChange(async (value) => {
        this.plugin.settings.maxWidth = parseInt(value);
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(containerEl).setName("True width as width").setDesc("Calculate width according to widest line instead of the first.").addToggle((toggle) => toggle.setValue(this.plugin.settings.trueWidth).onChange(async (value) => {
        this.plugin.settings.trueWidth = value;
        await this.plugin.saveSettings();
        setTimeout(() => {
          this.display();
        }, 100);
      }));
      new import_obsidian.Setting(containerEl).setName("em for h1-h6").setDesc("Comma seperated values of em (1.8 means 180% of the default) for h1-h6. Adjust to your own css configs if needed").addText((text) => text.setValue(this.plugin.settings.emfactor).onChange(async (value) => {
        this.plugin.settings.emfactor = value;
        await this.plugin.saveSettings();
      }));
    }
  }
};

/* nosourcemap */