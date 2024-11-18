#basi-di-dati #secondo-anno 

## Introduzione

### Definizione

Sono delle regole che vengono applicate ai dati nelle tabelle per garantire l'integrità, l'accuratezza e la validità delle informazioni inserite nel database. I principali tipi di vincoli soon:

- `unique`
- `not null`
- `primary key`
- `foreign key`
- `check`
- 
- Vincolo di unicità`unique(Attributo)` indica che l'insieme di attributi deve essere una [[Modello Relazionale|superchiave]] per la tabella.
- Vincolo di chiave primaria: `primary key` definisce la [[Modello Relazionale|chiave primaria]]. Può (e deve) essere definita una sola chiave primaria per ogni tabella. Tutti gli attributi della chiave primaria sono automaticamente `not null`.

### Esempio

```sql

-- Questo codice impone che non esistano due tuple in cui sia i valori di Nome e di Conogme siano uguali

Nome character(20) not null,
Cognome character(20) not null,
unique (Nome, Cognome)

```

- L'univocità viene definita usando un vincolo di unicità che coinvolge entrambe le colonne "Nome" e "Cognome". Ciò significa che ogni combinazione di valori per "Nome" e "Cognome" deve essere unica all'interno della tabella. Quindi, ad esempio, non può esserci più di una riga con lo stesso nome e cognome.

```sql

-- Questo codice impone che non esistano due tuple che abbiano uguali valori di nome e cognome 


Nome character(20) not null unique,
Cognome character(20) not null unique,

```

- L'univocità viene definita direttamente sulle colonne stesse. Questo significa che ogni valore all'interno della colonna "Nome" deve essere unico e lo stesso vale per la colonna "Cognome". Quindi, ad esempio, non può esserci più di una riga con lo stesso nome, e non può esserci più di una riga con lo stesso cognome.

## Tipologie di Vincoli

### Vincoli Intrarelazionali

### Vincoli Interrelazionali

### Vincolo di Valore Nullo

`not null` indica che il valore *nullo* non è ammesso su uno specifico attributo;

- Se non è inserito un valore di default, si impone che sia inserito un valore.

### Vincolo di Unicità

### Vincoli di Integrità Referenziale

- `foreign key` collega i valori di un insieme della tabella su cui viene applicato a un insieme di attribuiti di una tabella esterna. Ovviamente i valori della chiave esterna devono già essere presenti negli attributi della tabella a cui si sta facendo riferimento.
	- L'insieme degli attributi esterni deve essere `unique`.
	- Se la chiave esterna consiste in un solo attributo si usa la clausola `references`

