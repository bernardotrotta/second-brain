#modello-relazionale #basi-di-dati #secondo-anno 

## Definizione

I vincoli `NOT NULL` impediscono che una colonna contenga valori NULL. 

## Implementazione

Nel [[Linguaggio SQL]] avviene attraverso la clausola `NOT NULL` posta alla fine della definizione di un attributo.

## Esempio

Immaginiamo di avere una tabella $\text{Clienti}(\underline{\text{ID}},\text{Nome},\text{Cognome},\text{Email},\text{DataNascita})$. Vogliamo assicurarci che le colonne $\text{Nome}$ e $\text{Cognome}$ non possano mai contenere valori NULL, perché ogni cliente deve avere un nome e un cognome.

```sql
CREATE TABLE Clienti (
	ClienteID INT PRIMARY KEY,
	Nome VARCHAR(50) NOT NULL,
	Cognome VARCHAR(50) NOT NULL,
	Email VARCHAR(100),
	DataNascita DATE 
);
```
