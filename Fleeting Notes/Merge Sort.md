- Supponendo di avere 2 liste ordinate
	- A = A, B, D, G, H
	- B = B, C, E, F

Si prendono i primi 2 valori e vengono confrontati tra loro, la complessità è lineare nel caso in cui i 2 array sono già ordinati

- Si divide in due metà una lista di valori e la si divide in maniera ricorsiva fino ad avere 2 valori
- Questso algoritmo raddoppia il dipendio di memoria in quanto ogni merge viene fatto in una terza lists ausiliaria
- Una buona pratica può essere combinare il merge sort con l'insertion sort quando l'array diventa molto piccolo