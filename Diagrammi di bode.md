#elettronica #elettrotecnica #secondo-anno 

## Diagrammi di Bode

Un diagramma di bode è una rappresentazione grafica della funzione di trasferimento di un sistema, al variare della sua frequenza o pulsazione

$$
\omega = 2\pi f
$$

Il comportamento di un sistema è descritto dai valori di modulo e fase.

- Vengono tracciati su una scala semi-logaritmica. (lineare su ordinate, logaritmica sulle ascisse)
- ![[Screenshot 2024-05-26 alle 19.41.26.png]]
Si utilizzano i logaritmi poiché le loro proprietà permettono di studiare le singole funzioni di trasferimento elementari e poi fare una somma grafica. 

Da notare come la pulsazione $\omega = 0$ sia presente a $-\infty$ in quanto il logaritmo di 0 non è definito. 

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y = log(x)
```

Per calcolare le pulsazioni, sia dei poli che degli zeri è sufficiente calcolare l'inverso del polo o l'inverso dello zero in considerazione

### Diagramma di Una Costante

- FDT costante
- FDT con zero nell'origine
- FDT con zero reale negativo
- FDT con polo nell'origine
- FDT con polo reale negativo

#### Diagramma con Fdt Nell'origine

Modulo: $20\log |s|$ dove $|s| = \omega$
