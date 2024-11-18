## Alias (SQL)

### Alias (SQL)

#basi-di-dati #secondo-anno 

Nel linguaggio SQL gli alias sono nomi temporanei che vengono definiti all'interno di una [[Interrogazioni semplici(SQL)|query]].

- Non modificano il reale nome della tabella.
- Funzionano solo all'interno della query dove sono stati definiti.
- Utili nel creare interrogazioni nidificate.

Vengono utilizzati perché semplificano la scrittura di interrogazioni, specialmente per tabelle con nomi di lunghezza considerevole. 

#### Alias per gli Attributi

Un alias per gli attributi (colonne di una tabella), viene creato utilizzando la parola chiave opzionale `AS`, seguita dal nome dell'alias desiderato

```sql 
-- Sintassi con AS

select nome_colonna AS alias_colonna
from nome_tabella;
```

```sql
-- Sintassi senza AS

select nome_colonna alias_colonna
from nome_tabella;
```

#### Alias per le Tabelle

Anche nel caso delle tabelle, viene utilizzata la parola chiave `AS`

```sql
select t1.colonna1, t2.colonna2
from tabella1 as t1 join tabella2 as t2
on t1.colonna_comune = t2.colonna_comune
```