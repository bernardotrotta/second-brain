#basi-di-dati #secondo-anno 

## Database No-sql

### Introduzione

#### Database Relazionale

Database tradizionale = Schema rigido

(È necessario specificare le caratteristiche dei record e rispettare i vincoli successivamente)

Proprietà ACID: 

- Le transazioni devono essere atomiche, o vengono eseguite tutte le operazioni correttaamente o nessuna. 
- I risultati delle transazioni devono essere coerenti
- Isolamento: ogni transazione deve essere a se stante e soddisfare una sola richiesta
- Durabilità: lo stato del database deve rimanere nel tempo.
- Si usa il linguaggio SQL

### Not only SQL

Alternativa ad SQL senza soppiantarlo

- Modelli di dati flessibili (gestione di dati strutturati o semi-strutturati).
- Sono pensati per essere distribuiti.

#### Tipologie

- Document Based: archivia dati come documenti JSON, XML, BSON, ecc...
- Key-Value: archivia i dati come coppie chiave, valore. (molto semplici e performanti).
- Column-Family: archiviazione dei dati in tabelle, ma le colonne possono variare per ogni riga.
- Database a grafo: i dati sono memorizzati in strutture con nodi e archi. (perfetti per la gestione dei social network)

### Vantaggi

- Scalano orizzontalmente: l'assenza di tutti i vincoli del modello relazionale
- Supporto per i diversi dati:
- Rapidità di sviluppo
- Prestazioni elevate
- Supporto per i Big Data

### Svantaggi

- Consistenza eventuale
- Maturità
- Supporto limitato per le transazioni

#### Consistenza Eventuale

L'aggiornamento delle repliche è problematica, non avviene in tempo reale.

#### Maturità

Funzionalità meno avanzate e comunity ridotta in quanto tecnologia nuova

#### Supporto Limitato per le Transazioni

Non c'è il rupporto per più transazioni

#### Standardizzazione

Non esiste ancora uno standard universale per i database No-SQL

#### Strumenti di Analisi Meno Avanzati

Richiede una implementazione esterna per l'analisi di dati diversi

## Mongo Db

Raggruppa i documenti in collezioni, gestisce i file su documenti JSON

Una collection è un modo per raggruppare documenti con l'unica differenza che i tipi sono dinamici. Raggruppamento logico e non struturale

- Non esistono vincoli di integrità tra dati

### Modelli di Dati

- Binary JSON
- Struttura dati composta da coppia chiave-valore

### Operazioni di Base

``` MongoDB

-- mostra i database esistenti
show dbs 

-- Creare una collection (se cerchiamo di usare una collection che non esiste la crea automaticamente)

db.users.insertOne(('',''))

-- Select di SQL (importante specificare la collection)
db.users.find({"age", 30})

-- Aggiornare un utente
db.users.updateOne({"name", "alice}, {$set, age 31})

db.users.deleteOne({"name": "Alice"})
db.users.deleteMany({"name": "Alice"})


```

### Pipeline di Aggregazione

query complesse, trasformazioni dei dati all'interno della query

I join si fanno tramite gli indici

### Indicizzazione

- Indice: struttura dati speciale, memorizza una porzione del dataset in maniera più semplice da individuare.
[[2000px-EM_Spectrum_Properties_it.svg.png]

[[Esempio]]

---

#### Risorse