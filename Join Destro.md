#basi-di-dati #secondo-anno 

## Definizione

Contribuiscono tutte le tuple di $r_2$, eventualmente estese con valori nulli relativamente agli attributi di $r_1$ se non c'è corrispondenza con le tuple di $r_1$  

## Implementazione

Nel [[Linguaggio SQL]] la sintassi per l'implementazione di un Join Destro è la seguente:

```sql
SELECT *
FROM _TABELLA1
RIGHT JOIN _TABELLA2
ON _CONDIZIONE
```

## Esempio

### Esempio 1

| Impiegato | Reparto |
| --------- | ------- |
| Rossi     | A       |
| Neri      | B       |
| Bianchi   | B       |

| Reparto | Capo  |
| ------- | ----- |
| B       | Mori  |
| C       | Bruni |

| Impiegato | Reparto | Capo  |
| --------- | ------- | ----- |
| Neri      | B       | Mori  |
| Bianchi   | B       | Mori  |
| `NULL`    | C       | Bruni |

### Esempio 2

| id  | company_name |
| --- | ------------ |
| 1   | Lenovo       |
| 2   | Apple        |
| 3   | Samsung      |
| 4   | Huawei       |
| 5   | Fairphone    |

| id  | product_name           | company_id |
| --- | ---------------------- | ---------- |
| 1   | Fairphone 4            | 5          |
| 2   | Galaxy S24 Ultra       | 3          |
| 3   | Galaxy Z Flip5         | 3          |
| 4   | iPhone 15 Pro          | 2          |
| 5   | Fairbuds XL            | 5          |
| 6   | MacBook Pro 16' M3 Pro | 2          |
| 7   | iPad Air 10.9' M1      | 2          |
| 8   | Galaxy Tab S9 FE+      | 3          |

| id  | company_name | id  | product_name           |
| --- | ------------ | --- | ---------------------- |
| 2   | Apple        | 4   | iPhone 15 Pro          |
| 2   | Apple        | 6   | MacBook Pro 16' M3 Pro |
| 2   | Apple        | 7   | iPad Air 10.9' M1      |
| 3   | Samsung      | 2   | Galaxy S24 Ultra       |
| 3   | Samsung      | 3   | Galaxy Z Flip5         |
| 3   | Samsung      | 8   | Galaxy Tab S9 FE+      |
| 5   | Fairphone    | 1   | Fairphone 4            |
| 5   | Fairphone    | 5   | Fairbuds XL            |
