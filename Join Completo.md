#secondo-anno #basi-di-dati 

## Definizione

Contribuiscono tutte le tuple di $r_1$ e $r_2$. eventualmente estese con valori nulli relativamente agli attributi dell'altra relazione se non c'è corrispondenza con le tuple dell'altra relazione

## Implementazione

Nel [[Linguaggio SQL]] la sintassi per l'implementazione di un Join Completo è la seguente:

```sql
SELECT *
FROM _TABELLA1
FULL JOIN _TABELLA2
ON _CONDIZIONE

```

## Esempi

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

| Impiegato | Reparto | Capo   |
| --------- | ------- | ------ |
| Rossi     | A       | `NULL` |
| Neri      | B       | Mori   |
| Bianchi   | B       | Mori   |
| `NULL`    | C       | Bruni  |

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
|     |                        |            |

| company_id | company_name | id   | product_name  |
| ---------- | ------------ | ---- | ------------- |
| 1          | Lenovo       | NULL | NULL          |
| 2          | Apple        | 4    | iPhone 15 Pro |
| 3          | Apple        | 6    |               |
| 4          | Apple        | 7    |               |
| 5          |              |      |               |
|            |              |      |               |