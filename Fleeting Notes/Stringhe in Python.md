## Stringhe in Python

> Una stringa è una [sequenza](Sequenze%20in%20Python.md) #immutabile di caratteri
> `type = str`

- Ogni oggetti di tipo str deve rispettare lo standart Unicode
- `""` -> In questo modo è possibile definire una stringa vuota 

### Metodi per le Stringhe

1. `str.index()`
2. `str.count()`
3. `str.upper()`

- Le stringhe supportano #indexing e #Slicing 
- Possono essere concatenate

## Operazioni

- `join()` fonde stringhe diverse di una lista, in un'unica stringa
	- Si specifica un separatore da utilizzare nella stringa

```python
days = ["mon", "tue", "wed"]
"\".join(days)

### Output
"mon\tue\wed"
```

- `split()` spezza una stringa unica in una lista di stringhe
	- Si specifica un carattere di tipo stringa da utilizzare per separare gli altri caratteri

```python
days = ["mon", "tue", "wed"]
"\".join(days)

### Output
"mon\tue\wed"
```

---

## Sequenze di Escape

- `\n` va a capo
- `\t` aggiunge una tabulazione 
----

## F-strings

> Metodo innovativo per la formattazione delle stringhe, introdotto nella versione 3.6

- Viene usata la lettera `f` prima di una stringa
- Vengono inseriti i nomi delle variabili all'interno delle parentesi graffe `{variabile}`
- `f"Titolo: {nome_variabile}, Autore: {nome_variabile2}"`