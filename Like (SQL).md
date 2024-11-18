#basi-di-dati #secondo-anno 

## Definizione

È un operatore usato nella clausola [[Where (SQL)]] per ricercare un pattern specifico all'interno di una colonna. 

```sql
SELECT _column1, column2, ..._  
FROM _table_name_  
WHERE _columnN_ LIKE _pattern_;
```

- The percent sign `%` represents zero, one, or multiple characters
- The underscore sign `_` represents one, single character

## Esempio

```sql
SELECT * 
FROM CLIENTI  
WHERE Nome LIKE 'a%';
```
