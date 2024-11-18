#secondo-anno #basi-di-dati 

## Introduzione

## Significato

Nel linguaggio SQL, l'operatore `exists()` è un operatore logico applicato a [[interrogazioni nidificate|interrogazioni nidificate]] 

Se la query retta dall'operatore ha un valore non nullo, allora restituisce `True`, altrimenti, se il risultato è nullo, restituisce `False`.

### Esempio

```sql
SELECT *
FROM Persone AS P
WHERE EXISTS ( SELECT *
			   FROM Paternita
			   WHERE Padre = P.Nome)
OR EXISTS ( SELECT *
		    FROM Maternita
		    WHERE Madre = P.Nome)

)
```