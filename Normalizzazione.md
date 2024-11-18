#basi-di-dati #secondo-anno 

## Normalizzazione

### Introduzione

La normalizzazione il Il processo che si occupa di trasformare uno [[Modello Relazionale#Schema|schema]] in forma normale.

Una [[Basi di dati|base di dati]] è considerata in forma normale se rispetta determinati standard di qualità che mirano ad evitare le ridondanze e i conseguenti effetti collaterali negativi. 

### Problemi Delle Basi di Dati Non Normalizzate

Un caso particolare di anomalia è l'utilizzo di una sola relazione per rappresentare concetti disomogenei o relativamente indipendenti. Sono legate alla [[Analisi delle ridondanze|ridondanza]] nello schema.

- **Anomalia di aggiornamento:** se il dato ridondante varia va modificato in tutte le tuple. 
- **Anomalia di cancellazione:** se non ci sono informazioni relative ad un elemento della chiave, non essendo possibile avere valori nulli nella chiave, si perdono anche tutte le altre informazioni, anche se disponibili, riguardo ad altri concetti non inclusi nella chiave (a meno di ammettere valori nulli nella chiave).
- **Anomalia di inserimento:** non è possibile inserire informazioni su un concetto non incluso nella chiave se manca l’informazione su un elemento della chiave.
- In presenza di ridondanze alcuni dati possono essere ripetuti, senza aggiunta di informazioni significative
- In presenza di ridondanze gli aggiornamenti devono essere ripetuti per ogni occorrenza dei dati relativi. 
- In presenza di ridondanze la cancellazione di una tupla perché non è più valido l’insieme di concetti nel suo complesso può comportare l’eliminazione di tutti i concetti, anche di quelli che restano validi.
- In presenza di ridondanze non è possibile inserire un solo concetto per una relazione se non esiste un intero insieme di concetti.

### Dipendenze Funzionali

Sono vincolo di integrità di tipo funzionale fra gli attributi di una relazione. 

> [!theorem]
> Data una relazione r su uno schema $R(X)$ e due sottoinsiemi non vuoti $Z$ e $Y$ di $X$, esiste per r una dipendenza funzionale tra $Y$ e $Z$ (indicata con $Y \rightarrow Z$) se per ogni coppia di tuple $t_1$ e $t_2$ di r aventi gli stessi valori su $Y$, $t_1$ e $t_2$ hanno anche gli stessi valori su $Z$. 

#### Esempio

``` sql
-- Gli impiegati hanno un unico stipendio 

Impiegato -> Stipendio
```

``` sql
-- I progetti hanno un unico bilancio 

Progetto -> Bilancio

```

```sql

-- In ciascun progetto, un impiegato svolge una sola funzione

Impiegato Progetto -> Funzione

```

Da notare come nei primi due esempi, le dipendenze funzionali causano anomalie, mentre ciò non accade nel terzo caso.

In generale le anomalie sono causate dalla presenza di concetti eterogenei

### Forma Normale di Boyce e Codd

> [!theorem]
> Una relazione $r$ si definisce in forma normale di Boyce e Codd se per ogni dipendenza funzionale $X \rightarrow Y$ definita su di essa, $X$ contiene una chiave $K$ di $r$, cioè $X$ è superchiave di $r$.

---

#### Domande