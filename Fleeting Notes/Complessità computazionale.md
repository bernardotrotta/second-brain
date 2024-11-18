- Esercizi su classificazione di Chomsky
- DIfferenze tra automa deterministico e non deterministico
- Architettura CPU e registri
- Spazio di indirizzamento e parola in memoria 
- Riconoscimento di appartenenza di un'espressione ad un linguaggio
- Esercizi sui floating point
- Domandade teoriche sui multimedia (espressioni regolari o grammatiche)
- Codifica e decodifica UTF-8
-

## Complessità

- Problemi non risolvibili
	- Paradossi
- Problemi non trattabili
	- Risolvibili ma non trattabili causa limitazioni
- Ricerca lineare
	- Per ogni indice da start to finish, si cerca il valore e terminiamo l'opreazione una volta trovato
- Ricerca binaria
	- Molto più efficiente della ricerca lineare
	- Si lavora su una lista ordinata 
	- Si parte dal valore centrale in modo da capire se interessa la priama metè dei dati o la seconda

## Confronto tra Algoritmi

> Per risparmiare risorse o per recuperare tempo si sceglie un algoritmo piuttosto che un altro

> Per valutare la velocità di un algorimto si può osservare quali scambi vengono effettuati cojn gli elementi dell'array in quanto è molto più dispendioso analizzare informazioni su questi tipi di dato

$n , \frac{n}{2}\dots\frac{n}{2^{k-1}}$

Un algormitmo è complesso in maniera direttamente proporzionale alla curva della funzione che rappresneta il tempo di esecuzione dell'algoritmo al crescere dei dati

- Caso peggiore
- Caso medio
- Caso migliore

Esemoio con 1'000'000 di dati

- Ricerca lineare: 1'000'000 di dati da analizzare
- Ricereca binaria: 20 cicli che dimezzano l'array

### Complessità Intrinseca

Se ogni algoritmo ci mette un tempo di esecuzione superiore o uguale a $g(n)$, $g(n)$ è intrinseco

## Problema Della Ricerca

> Dimostrato che nella ricerca binaria di una lista ordinaria la complessità intrinseca è $log_2(n)$

- È fondamentale mantenere i dati ordinati 
- Si studiano algoritmi di ordinamento
	- Algoritmi semplici che elaborano un vaolore alla volta e viene confrontanto con altri $n-1$valori
	- Divide et impera
		- Complessità $n\log_2(n)$
[[Bubble Sort]]
