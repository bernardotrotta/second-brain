#modello-relazionale #basi-di-dati #secondo-anno 

## Definizione

È un vincolo intrarelazionale e viene utilizzato per garantire che ogni riga in una tabella possa essere identificata univocamente. Un vincolo di chiave primaria non può essere nullo, include quindi implicitamente il [[Vincoli di Not Null|vincolo di not null]].

## Implementazione

Nel [[Linguaggio SQL]] avviene attraverso l'utilizzo della clausola `PRIMARY KEY` posta alla fine della definizione dell'attributo. Importante notare che una chiave primaria può essere composta da più attributi, il quel caso l'implementazione avviene nel seguente modo: `PRIMARY KEY (Attributo1, Attributo2,..., Attributo n)`

## Esempio

1) Immaginiamo di avere la tabella $\text{Utenti}(\underline{\text{ID}},\text{Nome},\text{Email})$ vogliamo assicurarci che il campo $\text{ID}$ sia l'unico identificativo di ogni riga della tabella. 

```sql
CREATE TABLE Utenti (
	ID INT PRIMARY KEY,
	Username VARCHAR(50),
	Email VARCHAR(100) UNIQUE
);
```

2) Immaginiamo di avere la tabella $\text{Studenti}(\underline{\text{Nome}},\underline{\text{Cognome}},\text{DataNascita})$, vogliamo assicurarci che ogni studente venga identificato univocamente attraverso gli attributi $\text{Nome}$ e $\text{Cognome}$

```sql
CREATE TABLE Studenti (
	Nome VARCHAR(50),
	Cognome VARCHAR(50),
	DataDiNascita DATE,
	PRIMARY KEY (Nome, Cognome)
);
```
