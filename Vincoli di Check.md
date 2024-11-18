#modello-relazionale #basi-di-dati #secondo-anno 

## Definizione

I vincoli check assicurano che i valori di una colonna o di un insieme di colonne soddisfino una condizione specifica. Possono essere utilizzati per imporre regole aziendali o altre restrizioni sui dati.

## Implementazione

Nel linguaggio SQL avviene attraverso la clausola `CHECK (Condizione)`

## Esempio

Supponiamo di avere una tabella $\text{Dipendenti}(\underline{\text{ID}},\text{Nome},\text{Cognome},\text{Età},\text{Stipendio})$ in cui vogliamo assicurarci che il campo $\text{Stipendio}$ sia positivo e che l'età dei dipendenti sia maggiore o uguale a 18.

```sql
CREATE TABLE Dipendenti ( 
	DipendenteID INT PRIMARY KEY,
	Nome VARCHAR(50),
	Cognome VARCHAR(50),
	Età INT,
	Stipendio DECIMAL(10, 2),
	CHECK (Età >= 18),
	CHECK (Stipendio > 0) 
);
```

 **Esempio 1:** data la relazione `Esami(Matricola, Voto, Lode, CodCorso)` i vincoli possono essere `(Voto >= 18) AND (Voto <= 30)` e `NOT(Lode = Vero) OR (Voto = 30)`
**Esempio 2:** `Pagamenti(Data, Importo, Ritenute, Netto)` un vincolo può essere `Netto = Importo - Ritenute`