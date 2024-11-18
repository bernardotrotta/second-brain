#basi-di-dati #secondo-anno 

## Nested Query

### Introduzione

Nel linguaggio SQL è possibile estendere la realizzazione della clausola [[Where (SQL)|`where`]] non solo sul confronto tra predicati semplici o vali, ma anche sul risultato di altre [[Interrogazioni semplici(SQL)|interrogazioni]] appartenenti allo stesso dominio. La sintassi prevede due parametri: 

- `all`: specifica che il risultato del confronto è vero, se è vero per tutte le righe del risultato dell'interrogazione nidificata.
- `any`: specifica che il risultato del confronto è vero se è vero per almeno una qualunque riga del risultato dell'interrogazione.

### Esempio 1

```sql
-- Determina l'elenco degli impiegati che lavorano in dipartimenti con sede a Firenze

SELECT I.Nome, Cognome
FROM Impiegato AS I
WHERE Dipart = ANY (select D.Nome
				   from Dipartimento D
				   where Città = 'Firenze');
```

È possibile ottenere la stessa soluzione con un [[Join (SQL)|`JOIN`]] ma è preferibile utilizzare l'interrogazione nidificata per migliorarne la leggibilità.  

```sql
SELECT I.Nome, I.Cognome
FROM Impiegato AS I JOIN Dipartimento AS D
where Dipart = D.Nome
and Città = 'Firenze';
```

### Esempio 2

```sql
-- Trovare nome e reddito del padre di Franco

select Nome, Reddito
from Persone, Paternita
where Nome = Padre
and Figlio = 'Franco'
```

```sql
select Nome, Reddito
from Persone
where Nome = (select Padre
			 from Paternita
			 where Figlio = 'Franco')
```