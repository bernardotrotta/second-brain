## Introduzione

Un suono è una particolare alterazione della pressione dell'aria che quando percepite da un dispositivo, orecchio umano incluso, restituisce un particolare stimolo elettrico

Un segnale analoggico deve essere tradotto in digitale in modo da poter immagazzinare i dati nel calcolatore

---

## Conversione Analogico-digitale

1. Campionamento: si registra il segnale ad intervalli di tempo regolari, più segnali vengono raccolti nell'intervallo, più alta è la qualità del suono registrato.
	- Qualità CD: *44.100Hz*, ovvero 44.100 campioni in un secondo
2. Quantizzazione: una volta raccolti i dati bisogna registrarli usando un certo numero di bit, ciò comporta che il valore dei campioni deve essere approssimato in modo da trovare il valore più vicino a quello rappresentabile con il numero di bit a disposizione. 

---

## Teorema Del Campionamento

Nyquist Shannon

- Il nostro orecchio percepisce dai 20 ai 20000Hz, ovvero dalle 20 alle 20000 oscillazioni in un secondo
- Per rappresentare un suono con frequenza massima, mi occorre una frequenza di campionamento al secondo che sia almeno il doppio più 1 della frequenza massima del suono da campionare

---

## Bitrate

Un bitrate è la velocità di trasferimento dei dati al secondo e si misura in kbps

---