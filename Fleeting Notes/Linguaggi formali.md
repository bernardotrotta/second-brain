## Definizione

> Un linguaggio formale $L$ è dato da un insieme di #stringhe costruite su un #alfabeto.

- $\Sigma$ indica l'alfabeto, quindi un'insieme di simboli
- $\Sigma^*$ indica l'insieme di tutte le stringhe o parole/frasi che è possibile costruire con questo alfabeto

Definito ciò possiamo dire che :

$$
L \subseteq \Sigma^*
$$

Ovvero che $L$ è un sottoinsieme che racchiude alcune delle infinite combinazioni di stringhe possibili nell'alfabeto $\Sigma$

## Composizione

Un linguaggio formale può essere composto o definito in diversi modi:

- Insieme di tutte le stringhe derivare dalle [[Grammatiche generative]]
- Insieme delle stringhe fornite da un'[[Espressione regolare]]
- L'insieme delle stringhe accettate da un'[[Automa]]

### Cardinalità

> Con #cardinalità si intende la quantità di elementi di un'insieme

- La cardinalità di un linguaggio formale può essere
	1. Finita
	2. Infinita
	3. Nulla

## Simbologia

- Una stringa appartiente ad un linguaggio oppure no?

Un simbolo è un codice di un alfabeto, più stringhe definiscono un linguaggio

Definiamo un indicato con la lettera greca $\Sigma$

- Una stringa è una sequenza di simboli dell'alfabeto $\Sigma$, per cui diremo che $s \in \Sigma$
- Tutte le possibili sequenze di stringhe dell'alfabeto $\Sigma$ si indicano con $s \in \Sigma^*$
- Genericamente la lunghezza di una stringa si indica con $|s|$
- Una stringa vuota si indica con $\mathcal{E}$

Ora definiamo un sottolinguaggio, quindi un sotto insieme di tutte le possibili combinazioni di stringhe nell'alfabeto $\Sigma$ e lo chiameremo $L$:

- $L \subseteq \Sigma^*$
- Ora non ci resta che definire le regole per poter definire questo linguaggio e possiamo esprimerle con una grammatica

## Esempi

Dato un #alfabeto $\Sigma = \{a, b\}$ le combinazioni possibili per un linguaggio $L$ sono:

- $L = \varnothing$ (ovvero un linguaggio vuoto)
- $L = \{\mathcal{E}\}$ (ovvero un linguaggio formato da una sola stringa vuota)
- $L = \{abba, bbab\}$ (linguaggio finito) 

