> In [[Python]] gli oggetti sono strutture di dati, nonstante sia anche possibile programmare in maniera "procedurale", tutto è considerato un ==oggetto==
> In python, tutto è un oggetto, nonostante sia possibile programmare in maniera "sequenziale"

Un oggetto contiene raccoglie 3 informazioni principali:

1. ID
2. Type
3. Value

## Id

> Un ID è un Identificatore numerico che differisce un oggetto dall'altro

- È univoco
- Immutabile 

## Type

> Categoria che determina la natura di un oggetto

- Quali valori possono essere assegnati ad un oggetto?
- Questi valori possono variare?
- Quali operazioni posso effettuare con questi oggetti?
- Anche l'oggetto è immutabile

## Value

> È l'effettivo valore che l'oggetto porta con se

- Un dato o un insieme di dati assegnati all'oggetto
- Un oggetto in cui il valore può essere cambiato viene detto #mutabile 
- Un oggetto in cui il valore non può essere cambiato viene detto #immutabile 

---

## Callable

- Un'oggetto che può essere chiamato digitando `nomeOggetto(argomenti)`
	- Un esempio di oggetto sono le funzioni

```python
print("20")
id(20)
type(20)
```

## Attributi

> Gli attributi sono oggetti contentuti in un oggetto perché ne specificano ulteriori caratteristiche

- Possono essere dati
	- `oggetto.attributo`
- Possono essere oggetti chiamabili
	- `oggetto.attributo()`

