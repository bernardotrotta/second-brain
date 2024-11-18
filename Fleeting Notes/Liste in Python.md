> Una lista è una [sequenza](Sequenze%20in%20Python.md) #mutabile di elementi omogenei

## Definizione

- Una lista viene inizializzata mediante le parentesi quadre `list = []`
- Gli elementi della lista sono separati da virgole `list = [1,2]`
- A differenza delle [[Tuple in Python]] una lista con un solo elemento, non necessita la virgola
- Una lista di tipo `list = [0]` non è una lista vuota

### Metodi per le Liste

1. `list.append(x)` -> Aggiunge un elemento alla fine della lista
2. `list.remove(x)` -> Rimuove un elemento specifico dalla lista
3. `list.pop()` -> Rimuove e restituisce l'ultimo elemento della lista
4. `len(list)` -> restituisce la lunghezza della lista
5. `list.index(x)` -> restituisce l'indice dell'elemento inserito tra parentesi
6. `list.count(x)` -> conta quante volte un elemento è presente nella lista
7. `list.insert(n, x)` -> Inserisce un elemento in un indice specifico della lista facendo slittare gli altri elementi

### Operatori

1. `in` verifica la presenza di un elemento nella lista, restituisce un valore booleano

```python
list = [1, 2, 3]
0 in list

### Output
False
 ```

### #Indexing

- Per recuperare un elemento di una lista si usa l'opreratore `list[]`
- Importante ricordare che Python indicizza gli elementi partendo da 0, una lista di 9 elementi sarà composta da elementi con indice da 0 a 8
- È possibile utilizzare indici negativi per recuperare elementi infondo alla lista `list[-1]`
- 

### #Slicing

- Per recuperare una porzione di lista si usa l'operatore `list[start:finish]`
- `start` e `finish` corrispondono all'indice dell'elemento, non all'elemento stesso
- Il valore `start` è incluso nella lista, mentre quello `finish` è escluso

```python
list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list[2:5]

### Output
list[3, 4, 5]
```

## List Comprehnsion

> Una list comphrension è un modo conciso per creare una lista, rielaborando una data sequenza. 

Per creare una list comphrension servono:

- Una sequenza di input
- Una classica variabile di iterazione
- Una espressione di output

```python
squares = []
for x in range(5):
	squares.append(x ** 2)

### Output
[0, 1, 4, 9, 16]
```

```python
squares = [x ** 2 for x in range(5)]

### Output
```

### Sippet da Catalogare

```python
list = [_ for _ in 'bernardo']
print(list)

### Output
['b', 'e', 'r', 'n', 'a', 'r', 'd', 'o']
```

```python
numbers = [1, 2, 3, 4, 5]
squares = [number**2 for number in numbers]
print(squares)

### Output
[1, 4, 9, 16, 25]
```