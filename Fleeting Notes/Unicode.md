## Unicode

> È uno standard per la codifica che crea una corrispondenza biunivoca tra un carattere ed un numero 

Unicode assegna ad ogni singolo carattere uno spazio di 32 bit per poterne memorizzare le informazioni (per ora ne vengono utilizzarti 21)

Si è passati a unicode proprio per avere la possibilità di introdurre più caratteri possibili all'interno del sistema di rappresentazione dei simboli dei calcolatori

ASCII funzionava su 7 bit, vuol dire che utilizzava 7 bit per rappresentarea ogni singolo carattere ed aveva $2^7 = 128$ caratteri diversi

- Il numero di caratteri corrisponde al numero di bytes
La magia di unicode sta nel fatto che può scegliere quanti bit utilizzare per scrivere un carattere, in base appunto al peso del carattere stesso

### Utf -8

| Codepoint massimo | Corrispettivo decimale | Byte | Byte | Byte | Byte |
|-|-|-|-|-|-|
| U+007F | 127 | 11111111 | 
| U+07FF | 2047 | 11111111 | 11111111 
| U+FFFF |  65535 | 11111111 |11111111 | 11111111 |
| U+1FFFF | 

Negli anni 60 ognuno faceva un po' quello che gli pareva. L'obiettivo era quello di associare ad un simbolo, una sequenza di bit ma ognuno andava a cazzo dicane

Un giorno gli americani dissero "yo mc frat'm, ma se creassimo una legge in modo che in tutto il fottuto mondo si usano gli stessi numeri binari per lo stesso carattere in modo che non si sputtana tutta la madonna?"

E l'altro americano disse "va bene broth'm, usiamo 7 bit per carattere, così possiamo rappresentare 128 caratteri diversi, dovrebbero bastare... che cazzo ce ne frega dei cinesi"

Fu così che nacque la codifica ASCII

Poi arriva UNICODE, 
