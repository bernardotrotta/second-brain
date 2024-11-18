#basi-di-dati #secondo-anno 

## Modifica

- `alter` consente di modificare domini e schemi di tabelle

```sql
alter domain NomeDominio 
	<set default ValDefault |
	 drop defualt |
	 add costraint DefVincolo
	 drop costraint NomeVincolo>
```

```sql
alter table NomeTabella
	alter column NomeAttributo
	<set default NuovoDefault | drop default> |
	 add costraint DefVincolo
	 drop costraint NomeVincolo 
	 add column NomeAttributo |
	 drop column NomeAttributo>
```

- `drop` permette di rimuovere dei componenti

```sql
drop < schema | domain | table | view | assertion > Nome Elemento
[restrict | cascade]
```

`restrict` specifica di non eseguire il comando in presenza di oggetti non vuoti

`cascade` implica che gli oggetti specificati siano rimossi insieme a tutti gli oggetti da essi dipendenti.

## Inserimento