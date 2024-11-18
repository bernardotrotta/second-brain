## Filtri

#elettronica #elettrotecnica #secondo-anno 

Per tirare fuori un valore medio da un segnale generico è possibile utilizzare un filtro. Abbiamo già visto come trattare un filtro in regime sinusoidale, in questo caso si utilizza la scomposizione in serie di Fourier. 

Sia dato un segnale periodico, posso scomporlo come la sovrapposizione di un valore + una somma infinita di termini sinusoidali ciascuno con sua ampiezza e pulsazione multipla del segnale in ingresso. 

$$
v_{0}(t) = \frac{a_{0}}{2}+\sum^\infty_{n=1,2,\dots}(a_{n}\cos n \omega t + b_{n}\sin n \omega t)
$$

Il sengale sarà sì periodico, ma non sinusoidale.

Considero quindi ogni sinusoide singolarmente. 

Ottengo un segnale che è pari al valor medio e distorto con una piccola sinusoide. Tanto più il filtro presenta una frequenza di taglio bassa, tanto più il la distorsione si riduce.

La funzione di trasferimento del filtro avrà un polo.

Le componenti sinusoidali di un filtro sono dette "Armoniche"

Essendo tutte uguali, devo attenuare la prima. 

### Dimensionamento Del Filtro

Simmetria pari:

Tutti i coefficienti sono nulli.

differenza tra caduta di potenziale e potenziale al nodo

Rapporto tra ampiezza e valore medio: Ripple

Supponendo un ripple di 2% devo fare 4vi fratto 3pi per modulo dell'ampiezza del filtro fratto 1 + quattro pi moltiplicato per

$$
\frac{\frac{4V{in}}{3\pi}\sqrt{ \frac{1}{1+\left( 4\pi \cdot 50 \cdot \frac{L}{R} \right)} }}{\frac{2Vin}{\pi}}
$$

In uscita al rettificatore c'è un filtro passa basso (tipicamente del primo ordine), fatto tipicamente con una induttanza in serie

1. Scrivo funzione di trasferimento.
2. Moltiplico per l'ampiezza dell'armonica.
3. Impongo che tutto questo sia minore dell' x% rispetto al valore medio. 

Un altro modo è quello di utilizzare un condensatore in parallelo al carico. Lo studio del dimensionamento è diverso. Rapporto tra segnale senza condensatore e segnale con condensatore. Quando tolgo l'alimentazione il condensatore si scarica con i suoi tempi. mentre la tensione su fa si che esso si spenga,

A parità di attenuazione ottengo lo stesso effetto con componenti più piccoli