Il **DOM** (Document Object Model) rappresenta la struttura della pagina web, permettendo agli script di interagire e manipolare gli elementi HTML.

## 1. Accesso Agli Elementi Del Dom

- **`document.getElementById(id)`**: restituisce l'elemento con l'ID specificato.
- **`document.getElementsByClassName(className)`**: restituisce una collezione di elementi con la classe specificata.
- **`document.getElementsByTagName(tagName)`**: restituisce una collezione di elementi con il nome di tag specificato.
- **`document.querySelector(selector)`**: restituisce il primo elemento che corrisponde a un selettore CSS.
- **`document.querySelectorAll(selector)`**: restituisce tutti gli elementi che corrispondono a un selettore CSS.

## 2. Creazione e Manipolazione di Elementi

- **`document.createElement(tagName)`**: crea un nuovo elemento HTML.
- **`element.appendChild(child)`**: aggiunge un nodo figlio a un elemento.
- **`element.removeChild(child)`**: rimuove un nodo figlio da un elemento.
- **`element.insertBefore(newNode, referenceNode)`**: inserisce un nuovo nodo prima di un nodo esistente.
- **`element.cloneNode(deep)`**: clona un nodo (se `deep` è true, clona anche i nodi figli).
- **`element.replaceChild(newChild, oldChild)`**: sostituisce un nodo figlio con un altro.

## 3. Proprietà Degli Elementi

- **`element.id`**: ottiene o imposta l'ID di un elemento.
- **`element.className`**: ottiene o imposta il valore di classe di un elemento.
- **`element.innerHTML`**: ottiene o imposta il contenuto HTML di un elemento.
- **`element.textContent`**: ottiene o imposta il contenuto testuale di un elemento.
- **`element.style`**: ottiene o imposta lo stile in linea di un elemento.
- **`element.attributes`**: restituisce una collezione di tutti gli attributi dell'elemento.
- **`element.dataset`**: accede agli attributi `data-*` di un elemento come proprietà.

## 4. Attributi Degli Elementi

- **`element.getAttribute(attr)`**: ottiene il valore di un attributo specificato.
- **`element.setAttribute(attr, value)`**: imposta un attributo con il valore specificato.
- **`element.hasAttribute(attr)`**: verifica se l'elemento ha un attributo specificato.
- **`element.removeAttribute(attr)`**: rimuove un attributo dall'elemento.

## 5. Eventi e Gestione Degli Eventi

- **`element.addEventListener(event, listener)`**: aggiunge un ascoltatore di eventi.
- **`element.removeEventListener(event, listener)`**: rimuove un ascoltatore di eventi.
- **Eventi comuni**:
  - `click`: attivato quando un elemento viene cliccato.
  - `mouseover`: attivato quando il puntatore passa sopra un elemento.
  - `input`: attivato quando viene modificato il valore di un campo di input.
  - `submit`: attivato quando un form viene inviato.

## 6. Navigazione Nel Dom

- **`element.parentNode`**: restituisce il nodo genitore di un elemento.
- **`element.childNodes`**: restituisce una collezione di tutti i nodi figli.
- **`element.firstChild`**: restituisce il primo figlio di un elemento.
- **`element.lastChild`**: restituisce l'ultimo figlio di un elemento.
- **`element.nextSibling`**: restituisce il nodo successivo allo stesso livello.
- **`element.previousSibling`**: restituisce il nodo precedente allo stesso livello.
- **`element.children`**: restituisce una collezione di elementi figli (esclude i nodi di testo).

## 7. Classi Css

- **`element.classList`**: rappresenta la lista delle classi CSS dell'elemento.
  - **`classList.add(className)`**: aggiunge una classe.
  - **`classList.remove(className)`**: rimuove una classe.
  - **`classList.toggle(className)`**: aggiunge o rimuove una classe.
  - **`classList.contains(className)`**: verifica se l'elemento ha una determinata classe.

## 8. Stili e Calcolo Degli Stili

- **`element.style`**: permette di modificare direttamente gli stili in linea.
- **`window.getComputedStyle(element)`**: ottiene gli stili CSS computati di un elemento.

## 9. Proprietà Speciali Del Documento

- **`document.documentElement`**: restituisce l'elemento `<html>`.
- **`document.body`**: restituisce l'elemento `<body>`.
- **`document.head`**: restituisce l'elemento `<head>`.
- **`document.title`**: ottiene o imposta il titolo del documento.
- **`document.doctype`**: rappresenta il tipo di documento dichiarato.

## 10. Selezione e Modifica Del Contenuto

- **`document.execCommand(command)`**: esegue un comando di modifica sul documento (obsoleto e non raccomandato).
- **`document.designMode`**: permette di impostare l'intero documento come editabile (`on` / `off`).
- **`element.contentEditable`**: imposta se un elemento può essere modificato (`true` / `false`).
