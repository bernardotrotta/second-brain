#basi-di-dati #secondo-anno 

## Concetti Fondamentali

- **Informazione:** tutto ciò che riceviamo e ci da informazioni sul mondo che ci circonda;  
- **Dato:** formalizzazione delle informazioni  
- **Basi di dati:** sono collezioni di dati:
	1. Grandi;
	2. Persistenti;
	3. Condivisi;

## Definizione

Un DBMS è un sistema software che si interpone fra le applicazioni e la memoria di massa in cui si trovano collezioni di dati

Un DBMS stende alcune funzionalità del [[Linux|file system]] in modo da offrire:

- Nuove modalità di accesso ai dati;
- Condivisione dei dati;
- Gestione più sofisticata dei file;

## Vantaggi

1. **Indipendenza del dato:** Attraverso l'utilizzo di un DBMS si da in modo che il dato non appartenga più all'applicazione, rendendolo di fatto un oggetto a sé stante e disponibile ad altri utilizzi.
2. **Persistenza:** Le informazioni che abbiamo sul DBMS non spariscono più se l'applicazione non è in esecuzione.
3. **Efficienza:** capacità di svolgere operazioni secondo tempi ragionevoli.
4. **Affidabilità:** I DBMS garantiscono la conservabilità dei dati.
5. **Privatezza dei dati:** Ciascun utente, opportunamente riconosciuto, viene abilitato a svolgere solo determinate azioni sui dati attraverso meccanismi di autorizzazione.
6. **Efficacia:** Capacità di eseguire in modo corretto le operazioni richieste.

## Svantaggi

1. **Rigidità:** Modifiche alla struttura della base di dati possono richiedere la ristrutturazione delle applicazioni dipendenti, comportando potenziali costi di risorse e tempo. Tuttavia, l'adozione di pratiche di progettazione flessibili e l'uso di strumenti come le "viste" possono mitigare questo problema.
2. **Complessità:** Prodotti complessi che richiedono investimenti in hardware, software e personale

## Progettazione

**Modelli di dati:** Insiemi di concetti utilizzati per organizzare e strutturare i dati di interesse. Il loro utilizzo è legato ad una relativa fase della progettazione, si distinguono in:
- Modelli concettuali;
- Modelli logici;

### Modelli Concettuali

- Descrivono la realtà mediante oggetti astratti soggetti a precise regole, non servono alla rappresentazione effettiva dei dati nel calcolatore. Alcuni modelli concettuali sono: 
	- Modello entità-relazione;
	- Modello dimensionale;
	- Modello concettuale ad oggetti;

### Modelli Logici

- Non appartengono ancora alla fase di implementazione di una base di dati, ma rappresentano la costruzione e organizzazione logica di questi ultimi all'interno di un calcolatore. Alcuni modelli logici sono: 
	- [[Modello Relazionale|Relazionale]];
	- Gerarchico;
	- Reticolare;
	- A oggetti;
	- XML;

## Schemi

- Uno schema rappresenta la struttura fisica e dichiarativa di un database (tabelle, intestazioni, relazioni), è invariante.  
	**Esempio:**  
	Uno schema della relazione "Insegnamento" definita su due attributi "Corso" e "Titolare" è il seguente:  
	Insegnamento(Corso, Titolare). Le n-uple contenenti gli attributi, sono dette istanze della relazione.
- Lo schema lavora a diversi tipi di astrazione, può essere:
	- **Schema concettuale:** descrive i concetti che devono essere rappresentati, i dettagli che servono per descriverli e le relazioni logiche che li collegano;
	- **Schema logico:** descrive la struttura della base di dati mediante il modello logico utilizzato per il DBMS, in questo caso il [[Modello Entità-Relazione|modello entità-relazione]] ;
- Lo schema logico può essere implementato attraverso
	- **Schema interno:** implementa lo schema logico mediante apposite strutture di memorizzazione;
	- **Schema esterno:** 

## Linguaggi per le Basi di Dati

**Linguaggi di definizione dei dati:** utilizzati per definire gli schemi e le autorizzazioni per l'accesso;  
**Linguaggi di manipolazione dei dati:** utilizzati per l'interrogazione e l'aggiornamento dei contenuti; [[SQL]]

## Domande

Cos'è un modello di dati? :: È un insieme di concetti sul quale viene costruita una struttura  
Qual è la differenza tra modello logico e concettuale? :: B  
Quale può essere una definizione di dato? :: Il dato è la formalizzazione delle informazioni e della conoscenza.  
Cosa sono le basi di dati? ::  
Cos'è uno schema logico? ::  
Cos'è uno schema fisico? ::  
Cos'è uno schema interno? ::  
Cos'è uno schema concettuale? ::  
Quali sono i vantaggi di un DBMS? :: Indipendenza del dato, persistenza, affidabilità, efficacia, privatezza dei dati.  
Quali sono gli svantaggi di un DBMS¬

---

Risorse

 - Vedi anche: [[Interrogazioni]]