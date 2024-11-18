## Immagini Raster

> Un'immagine raster è una matrice di punti chiamati pixel. Ogni pixel è associato ad un codice che ne individua il colore.

- La quantità di pixel in un determinato spazio è detta **risoluzione** e può essere misurata in:
	- PPM (pixels per meter)
	- DPI (dots per inch)
	- PPI (pixels per inch)
- La **profondità** è un parametro che indica il numero di bit impiegati per memorizzare i colori di un pixel e si misura in bpp (bit per pixel)
	- Una profondità di $2^8$ indica che un solo pixel può rappresnetare 256 possibili colori

### Colori Indicizzati

- Ogni pixel porta con se un indice a cui corrisponde un colore nella palette
	- 1 bpp grafica monocromatica
	- 2 bpp grafica CGA
	 ![[colori indicizzati.svg|300]]
	- 4 bpp grafica EGA o VGA a a bassa risoluzione
	- 8 bpp grafica VGA ad alta risolzione
	![[256colour.png]]

### Colori Diretti

- Ogni pixel contiene informazioni inerenti alla luminosità relativa i canali dei 3 colori del metodo RGB
- Avendo più spazio non c'è bisogno di utilizzare una palette esterna

## Breve Digressione Sull'anatomia

- Coni percepiscono tonalità (6 milioni)
- Bastoncelli percepsicono luminosità (125 milioni)

## Sintesi Additiva

- I colori Red, Blue, Green mischiati insieme danno i colori secondari Cyan, Magenta, Yellow e continuamente sommatri tra loro si ottengono le altre varietà di colori

## Sintesi Sottrattiva

- È il risultato della luce riflessa

### Modello Yuv, Hsl

## Formati Raster

### Bitmap

- Formato senza compressione

### Tiff, Png

- Formati con compressione *lostless*, senza deterioramento

### Jpeg

- Formato con compressione *lossy*, occupa meno spazio a discapito della qualità

## Immagini Vettoriali