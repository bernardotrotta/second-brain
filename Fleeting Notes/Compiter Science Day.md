## Presentazione Cdl Magistrale

La magistrale di informatica rivolge la sua attenzione all'intelligenza artificale e al software sicuro

- 3 semestri di insegnamenti
- 1 semestre tirocinio/tesi

```
Qui il professore ha fatto una introduzione al piano di studi presente online
```

## Attività di Ricerca

**Docente:** Alessandro Dal Palù

### Intelligenza Artificiale

Un'elenco di spunti sulle attività di ricerca

- **Ragionamento automatico**
- **Rappresentazione della conoscenza**
- **Explainable AI**
- **Data2text**: Interpretazione automatica dei dati.
- **Fingerprints**: Studio sull'ereditarietà delle impronte digitali, ambito completamente inesplorato.
- **Nao per recupero cognitivo**: Utilizzo di robot per supporto alle sessioni di recupero cognitivo
- **Industrial Optimization**: Programmazione a vincoli per progettazione di bracci meccanici al supporto di operazioni industriali (es. stoccaggio dei bancali).
- **GPU computing**
- **Machine Learning**: Big Data (es. analisi dei dati medici, analisi sulle carriere degli studenti)

---

## Deep Reingorcement Learning

**Docente:** 

### Introduzione Al Machine Learning

Un corso matematico mirato a creare consapevolezza e costruire solide basi nell'ambito

- Bioinformatica
- Deep reingorcement learning
- Deep learning

Il deep reinforcement learning addestra al ragionamento e alla scelta intelligente

- Trovare il modo di riempire un bancale in maniera efficienete
- Vincere una partita al gioco (Go)

#### Un Po' di Storia (Here Comes Google deepmind)

- Nel 1987 IBM ha creato la prima intelligenza capace di vicnere a scacchi 
- Fino al 2015 nessuna inelligenza artificiale gioca a Go, nel 2016 nasce 
	- **Gennaio 2016**: Nasce AlphaGo
	- **Maggio 2017**; Il migior giocatore al mondo di Go viene battuto dal software
	- **Ottobre 2017**: Nasce AlphaGo Zero

È il primo software addestrato in maniera indipendente dalle conoscenze umane, si parla di agente super-umano.

Una rete neurale prevede degli outpunt associato a certi input, gli diamo molti esempi e questa viene addestrata

**Svantaggio**: Il metodo per imitazione crea un upperbound, non imparerà mai a giocare meglio del "giocatore esempio" più forte. 

Si costruisce un grafo con tutte le possibili situazioni e stati della partita, un agente ideale deve saper interpretare il grafo e scegliere la soluzione migliore 

L'intelligenza artificiale deve esplorare l'**albero delle ipotesi**

- L'albero non è mai completo perché il gioco è troppo difficile
- Si usano due reti neruali
	- **Value**: una stima della bontà delle posizioni
	- **Policy**: una classificiazione delle probabilità di vittoria per ogni strada percorribile.Come insegno alla rete neurali quali sono le mosse più promettenti? Nell'esplorazione, confronto value e policy e segno quali rami ho esplorato di più, imita la suddivisione degli sforzi nell'albero di analisi

### Riepilogo

- Servono due architteture di reti neruali profonde per **Value** e **Policy**
- Un modo per esplorare l'albero per studiare i dati
- Si fanno le partite e si codificano i risultati
- Si addestra la rete ciclicamente 

---

## Software Safety and Security

**Docnte**:

### Safety

Ogni programma sufficientemente complesso contiente errori, questi errori possono comportare problemi catastofici 

- Problemi bancari
- Sicurezza della vita umana
- Problemi militari
L'elenco di esempi di errori famosi è enorme

### **Security**

Qualcuno che cerca di eseguire codice malevolo per rubare dati personali/soldi

Grazie all'informatica si può creare un programma che intepreti la sicurezza e di un altro software in manierea totalmetne automatizzata,

#### Intepretazione Astratta

Formalalizza un ragionamento approssimato basandosi su assioni, si da per certo qualcosa nonostante non siamo in grado di eseguirene il calcolo completo.

- In questo settore viene utilizzata nei test per poter distinguire veri negativi o falsi positivi

```
Qui il docente ha fatto diversi esempi sull'intepretazione astratta e le sue applicazioni
```

---

## Bioinformatica

**Docente:** Vincenzo Bonnici
**Percorso del docente**: Stato studente di informatica con specializzaizione in algoritmi ed analisi dei dati, ha rivolto la sua attenzione successivamente, verso la bioinformatica appassionandosi alla biologia

### Introduzione

Nell'ambito dell'intelligenza artificale non esiste solo il machine leraning.

La bioinformatica è una scienza computazionale che studia i fenomeni della vita a tutto tondo (piante, batteri, uomo).

**Quanto è lungo il DNA umano?** 3 miliardi di caratteri, non siamo ancora riusciti ad intepretarne tutto il contenuto

### Un Po' di Storia

La bioinformatica inizia a diffondersi all'inizio del '2000, ma come tutte le scienze informatiche, gli studi iniziali sono attribuiti alle grandi menti Alan Turing e Claude Shannon.

#### Ricerca Attuale e Passata

**Genomica**:
**Trascrittomica**: 
**Studio dei sistemi**

### Applicazioni

- Studio dei network di geni, algoritmi per i grafi (algoritmi di subgraph matching)
- **HPC**
- Approccio farmacologico: capire quale medicinale è più efficace per una determinata malattia

---

## Big Data e Data Mining

**Docente:** Flavio Bertini

### Introduzione

Abbiamo parlato di diversi approcci all'intelligenza artificale, in particolare:

- Intelligenza artificale simbolica
- Intelligenza artificiale subsimbolica
Il fattore comune a questi approcci è l'**analisi dei dati**

**Come rappresentiamo i dati raccolti?**
- Dati strutturati
- Dati semistrutturati

#### Syllabus Del Corso di Studi

Quali sono i principali probmei dietro i big data? 

Quali sono gli approcci al data mining? 

Come utilizzare le principali tecniche e modalità per la rappresentaizone di dati semistrutturati e strutturati e il data-mining

### Applicazioni

**Salute**
- Raccolta dei dati sul parlato delle persone con disabilità cognitive
- Previsioni sulle condizioni mediche dei pazienti
- Stratificazione dei soggetti anziani in base al fattore di rischio di fragilità

**Mobilità urbana**
- Raccolta di dati per capire i flussi turistici
- Raccolta di dati per i grafi delle reti stradali maggiormente utilizzati
- Raccolta di dati sui trasporti pubblici 
  
**Social network**
- Raccolta di dati sulle imperfezioni delle immagini scattate su determinati dispositivi, (Profile linking, *è un concetto da approfondire*)
  
**Text Content**
- Tracciamneto delle origini di una notizia giornalistica tramite tecniche di watermarking (attribuire il tipo di scrittura ad una determinata sorgente)

---

## Teoria Dei Grafi

**Docente:** 

## Introduzione

Un grafo è un insieme di vertici connessi da archi, sono ottimi modelli per la rappresentazione di informazioni.

### Esempi

- Grafi di intersezioni di viabilità urbana
- Grafi dei segnali delle antenne per le telecomunicazioni, collego le antenne i cui segnali si intersecano. 

## Problemi

I problemi dei grafi sono centinaira, parliamo di problemi di tipo algoritmico

- Clasisficazione dei grafi
- Stabilire la relazione tra grafi di diverse famiglie
- Costruzioione di algorimti che risolva il problema in tempo polinomiale

```
Da qui in poi il docente ha tenuto una lezione troppo teorica
```
