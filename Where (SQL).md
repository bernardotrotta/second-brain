#basi-di-dati #secondo-anno 

## Introduzione

Nel linguaggio SQL, la clausola `where` viene utilizzata per filtrare le righe in una [[Interrogazioni semplici(SQL)|interrogazione]]. 

Ha come argomento una condizione logica che ammette come operatori i predicati semplici (confronto attributo-costante, attirbuto-espressione).

- `=`: uguaglianza
- `<>` o `!=`: disuguaglianza
- `<`: minore di
- `>`: maggiore di
- `<=`: minore o uguale a
- `>=`: maggiore o uguale a
- `BETWEEN`: tra un valore specifico
- `IN`: confronta un valore con una lista di valori
- `LIKE`: confronta un valore con un pattern di stringa
- `IS NULL` / `IS NOT NULL`: verifica se un valore è nullo o non nullo

I predicati semplici possono essere modificate tramite gli operatori logici

- `and`: richiede che tutte le condizioni siano vere affinché vengano incluse nel risultato
- `or`: richiede che almeno una delle condizioni sia vera
- `not`: utilizzato per negare una condizione. Ha la precedenza sui primi due operatori

### Esempio

Mostrare il nome degli impiegati di cognome 'Rossi' che lavorano o nel dipartimento di Amministrazione o nel dipartimento di produzione: 

```sql
select nome
from Impiegati
where Cognome = 'Rossi'
and Dipart = 'Amministraz' or Dipart = 'Produz'
```