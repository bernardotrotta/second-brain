#basi-di-dati #secondo-anno 

## Definizione

Nel linguaggio SQL, quando si effettua una interrogazione, si fa riferimento ad una target list, ovvero all'elenco delle colonne che si desidera visualizzare nei risultati di una query.

Il limite della target list è che deve essere omogenea, pertanto non è possibile far comparire nomi di attributi e [[Operatori aggregati (SQL)|operatori aggregati]] nella stessa target list.

```sql
-- Query errata

select Nome, max(Reddito)
from Persone;
```

Il problema di questa interrogazione è che `select Nome` dovrebbe restituire tutti i nomi della tabella `Persone` mentre `max(Reddito)` un valore solo.

```sql
-- Query corretta

select min(Eta), avg(Reddito)
from Persone;
where Reddito > 100;
```

### Group by

È possibile raggruppare più volte: 

#### Esempio

![[Esercizi Basi di Dati#Traccia L]]
