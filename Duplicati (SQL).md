#basi-di-dati #secondo-anno 

## Gestione Dei Duplicati

### Introduzione

L'algebra relazionale non ammette duplicati, il linguaggio SQL invece, introduce la possibilità di utilizzare valori duplicati. Nel caso in cui non si desiderasse ritrovare dei duplicati in una [[Interrogazioni semplici(SQL)|interrogazione]] è possibile utilizzare la clausola `select distinct`, da inserire prima dell'attributo che non si vuole duplicare.

```sql
select distinct Citta
from Persona
where Cognome = 'Rossi';
```
