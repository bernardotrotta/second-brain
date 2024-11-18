**Created**: 2023-02-21 12:44 
**Teacher**: Jacopo Aleotti

---

## Summary

- La differenza tra C e C++ sta nel fatto che C è procedurale, lavora tramite funzioni, C++ divide le funzioni in vari oggetti modulari. Ciò comporta ereditarietà e maggior livello di astrazione
-

``` C++
/*
Per commentare un testo 
*/

// Per commentare una sola riga
```

Il c++ è **case sensitive**

## Come Funziona Un Compilatore

1. Compilare sempre piccole parti di codice per mantenere il progetto funzionante
2. la compilazione può avere esito negativo o positivo
3. Se positivo viene generato un file exe sul computer
4. Verificare sia gli errori di sintassi che gli errori logici
5. 
---

## Flusso di Compilazione

La compilazione consiste di vari passaggi:

- Un progetto è un pacchetto di file, file .h e file .cpp
- Il file viene preprocessato, passa per il compilatore per poi essere trasormati in file binari chiamati file binari
- Vi è la fase di linking dove vengono collegati i vari file oggetto in binari nell'eseguibile, in questa fase vengono anche collegati i file alle relative librerie

---

## Pre-processore

Il pre processore cambia solo le riche che cominciano con un #

```c++

#inculde <>
// cerca i file nelle librerie di sistema

#include ""
// cerca librerie scritte da programmatori terzi

#define ELEMENTS 100
// può essere usato per creare delle etichette costanti, il preprocessore scorre tutto il testo e sostituisce elements con 100

``` 

È possible escludere certi pezzi di codice dalla compilazione per eggettuare il debug usando la l'etichetta #debug

---

## Linker

Mette insieme i vari file oggetto e crea l'eseguibile .exe

---

Come aggiungere un file al progetto per poter partire da una base solida

Trascinare il file sopra il nome del progetto

Per impedire la chiusura della finstrella 

sytem("pause");

Oppure progarmmare da terminale

Conviene sempre partire la lettura dall'errore più in alto 

---

## Introduzione

- In c++ un'entità o variabile deve avere un valore e un tipo
	- Un tipo di dato è int, float ecc
	- Valore può essere 5, 2.3 ecc
- Le stringhe sono delle sequenze di carattere comprese tra le virgolette
- In c ci sono variabili, costanti ed espressioni, tutte queste 3 hanno tipo e valore. 

### Definire Una Variabile

Significa dichiarare nome e tipo di una variabile

Una costante può essre solo inizializzata

```c++
<tipo> nome_variabile;
char lettera;
float tasso_variabile;
```

Una variabile può essere defiinita pressoché ovunque nel codice, anche all'interno di un ciclo. Ovviamente la variabile viene de-allocata se dichiarata ll'interno di un singolo blocco di codice

La memoria di un computer è come una tabella composta da celle da un byte, ogni cella ha un indice. Una variabil int che occupa generalmente 4 byte, in memoria occuperà 4 celle e il suo indirizzo è dato dalla prima delle 4 celle che occuperà.

È possibile inizializzare e definire una variabile nello stesso momento, se non viene inizializzato un valore viene applicagto quello di default che di solito corrisponde a '0'

## Tipi di Dati

### Intero

### Reale (float O double)

### Char

Se il valore di un dato è uguale a 0, C++ lo interpeta come false

## Input/Output

Per gestire questi flussi di dati

- cin legge da tastiera
- cout stampa su schermo
- è necessario includere iostream

Variabil automatiche, ovviamente le variabili locali non psossono essere modificate al di fuori del codice

Una variabile locale non esiste al di fuori del blocco di codice in cui vengono dichiarate ed eseguite.

Una variabile globale è una variable dichiarata fuori dal main, tendenzialmente è una pratica da non usare

## Espressioni

Una espressione è una serie di di operandi concatenati da operazioni matematiche

- x/2 è un'espressione di tipo float
- a x b + 50 un'espressione di tipo int
- a x 3,54 è un'espressione di tipo float 
- non ha una cella di memoria in cui viene memorizzata ma il suo valore viene elaborato al volo

---

## Operatori Bitwise su Variabili Intere

Vedere tabella sulle slides

---

---

## References

1. 

---
**Tags**: 