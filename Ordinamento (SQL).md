#basi-di-dati #secondo-anno 

## Definizione

Nel linguaggio SQL attraverso la clausola `order by` è possibile ordinare le righe del risultato di una [[Interrogazioni semplici(SQL)|interrogazione]]. Il risultato può essere mostrato in ordine ascendente o discendente.

### Sintassi

```sql
SELECT column1, column2, ...  
FROM table_name  
ORDER BY column1, column2, ... ASC|DESC;
```

Il primo parametro, in questo caso `column1` ha la priorità, a parità si ordina sulla base del secondo

- `ASC`: mostra i risultati in ordine ascendente, è il parametro di default. 
- `DESC`: mostra i risultati in ordine discendente

## Esempio

Supponiamo di avere la tabella $\text{Studenti}(\underline{\text{ID}},\text{Nome},\text{Età},\text{Corso})$ e vogliamo ordinare i risultati per valori dell'attributo "Età" in ordine ascendente (dal più piccolo al più grande):

```sql
SELECT *
FROM Studenti 
ORDER BY Eta ASC;
```
