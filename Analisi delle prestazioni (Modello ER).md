#basi-di-dati #secondo-anno 

## Introduzione

Nel contesto della progettazione logica, prima di entrare nell'atto pratico è necessario effettuare un'analisi preliminare delle prestazioni. Nello specifico si valutano due parametri: 

1. Costo delle operazioni;
2. Occupazione di memoria;

Entrambi questi dati vengono misurati in funzione delle istanze delle entità considerate ed il numero di associazioni tra esse.

### Costo Delle Operazioni

Per effettuare questa analisi è necessario conoscere:

1. Volume dei dati;
2. Caratteristiche delle operazioni;

La regola dell'80/20 prevede il focus sul 20% delle operazioni occupate l'80% del tempo.

#### Regola dell'80/20

Per analizzare il costo delle operazioni generalmente necessario analizzare il costo delle operazioni più frequenti. 

Come descritto dalla regola dell'80/20: "L'80% del tempo è occupato dal 20% delle operazioni"

#### Tavola Dei Volumi

Tabella utilizzata per descrivere il volume dei dati, in cui vengono riportati tutti i concetti dello schema con i volumi previsti a regime.

| Concetto       | Tipo | Volume |
| -------------- | ---- | ------ |
| Sede           | E    | 10     |
| Dipartimento   | E    | 80     |
| Impiegato      | E    | 2000   |
| Progetto       | E    | 500    |
| Composizione   | R    | 80     |
| Afferenza      | R    | 1900   |
| Direzione      | R    | 80     |
| Partecipazione | R    | 6000   |

#### Tavola Delle Operazioni

Tabella in cui si riportano il tipo e la frequenza delle operazioni. 

Nel seguente esempio:

- Operazione 1: assegna un impiegato ad un progetto. 
- Operazione 2: trova i dati di un impiegato, del dipartimento nel quale lavora e dei progetti al quale partecipa
- Operazione 3: trova i dati di tutti gli impiegati di un certo dipartimento.
- Operazione 4: per ogni sede, trova i suoi dipartimenti con il cognome del direttore e l'elenco degli impiegati del dipartimento.

| Operazione | Tipo | Frequenza     |
| ---------- | ---- | ------------- |
| Op. 1      | I    | 50 al giorno  |
| Op. 2      | I    | 100 al giorno |
| Op. 3      | I    | 10 al giorno  |
| Op. 4      | B    | 2 a settimana |

#### Tavola Degli Accessi

Tabella in cui si riportano i concetti coinvolti, il numero medio degli accessi e il tipo (lettura, scrittura)