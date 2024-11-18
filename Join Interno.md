#basi-di-dati #modello-relazionale #secondo-anno 

## Definizione

Il join interno (inner join) è una operatore specifico dell'algebra relazionale che combina le tuple di due relazioni in base a una condizione di join specificata e restituisce solo le tuple che soddisfano questa condizione.

> [!theorem]
> Siano $R_1(X_{1})$ e $R_{2}X_{2}$ due schemi di relazione basati sui relativi insiemi di attributi $X_{1}$ e $X_{2}$, e siano $r_{1}$ e $r_{2}$ le rispettive relazioni su questi schemi. 

## Implementazione

Nel [[Linguaggio SQL]] la sintassi è la seguente

```sql
SELECT *
FROM R_1 INNER JOIN R_2
ON _CONDIZIONE
```

## Esempio

---
- Vedi anche: [[Theta Join]]