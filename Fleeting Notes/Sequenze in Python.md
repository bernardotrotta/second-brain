- Esistono 3 tipi di sequenze diverse in [[Python]]:
	1. [[Liste in Python]]
	2. [[Tuple in Python]]
	4. [Range](Range%20in%20Python.md)
	5. [[Stringhe in Python]]
- Una sequenza può essere
	 1. #mutabile quando posso aggiungere e rimuovere elementi
	 2. #immutabile quando non posso nè aggiungere nè rimuovere elementi

## Operazioni

^fca561

- #Slicing
- #indexing 

## Funzioni

- `max()` restituisce il valore più grande dn una sequenza
- `min()` restituisce il valore più piccolo di una sequenza
- `.index()` restituisce l'indice di un elemento di una sequenza
- `.count()` conta quante volte un elemento si presenta in un sequenza

## Sequenze Iterabili

> Un dato è detto iterabile se può essere scorso con un [[Ciclo for]]. 

### Liste

- La list repetition è una pratica per creare una lista pronta all'uso, di un numero predefinito di elementi

```python
list = [0] * 12

### Output
list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

- Esempio di applicazione di [ciclo for]([[Ciclo for]]) su una lista

  ```python

values = [2, 3, 4, 5]

for val in values:

	cube = val ** 3

	print(cube, end"\t")

### Output

8 27 125 343 1331

  ```
- 