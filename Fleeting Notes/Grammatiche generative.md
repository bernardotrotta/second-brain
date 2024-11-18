> Sono una classe di grammatiche formali che servono a definire una struttura sintattica di un linguaggio. Vengono utilizzate per stabilire le regole di produzione per cui è possibile combinare più simboli e stringhe di un alfabeto

- Vennero sviluppate dal linguista Noam Chomsky negli anni '50 del secolo scorso
- Il suo punto chiave è lo studio di ciò che le lingue hanno in comune ed il motivo per cui il nostro cervello è predisposto all'apprendimento di una lingua

## Rappresentazione

> Una grammatica generativa è una quadrupla di elementi.

$$
G = \{V_t , Vn, S , P\}
$$

- $V_t$ è l'alfabeto dei simboloi non terminali
- $V_n$ è l'alfabeto dei simboli terminali
- $S$ è l'assioma della grammatica ed è considerato un simoblo non terminale. Quindi $S \in V_n$ 
- $P$ è l'insieme di tutte le **Regole di produzione** di una grammatica
	- Le **Regole di produzione** sono delle coppie di stringhe $(\alpha, \beta)$ costituite dall'unione di due #alfabeti
	- Le **Regole di produzione** si indicano con 