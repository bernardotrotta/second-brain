#modello-relazionale #basi-di-dati #secondo-anno 

## Definizione

Sono [[Vincoli (Modello Relazionale)|vincoli intrarelazionali]] e assicurano che i valori di una colonna o di un insieme di colonne siano unici all'interno della tabella.

## Implementazione

Nel [[Linguaggio SQL]] avviene attraverso la clausola `UNIQUE` posta alla fine della definizione dell'attributo.

## Esempio

Immaginiamo di avere la tabella $\text{Utenti}(\underline{\text{ID}},\text{Nome},\text{Email})$. L'attributo $\text{ID}$ identificherà univocamente ogni studente.

```sql
CREATE TABLE Utenti (
	ID INT PRIMARY KEY,
	Username VARCHAR(50),
	Email VARCHAR(100) UNIQUE
);
```
