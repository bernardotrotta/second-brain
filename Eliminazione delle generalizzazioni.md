#basi-di-dati #secondo-anno 

## Definizione

È una fase della progettazione logica di una base di dati in cui si prevede la rimozione delle [[Generalizzazioni (Modello ER)]], in quanto concetto non presente nel modello relazionale. Si possono seguire 3 strategie alternative: 

1. Accorpamento delle figlie nel padre;
2. Accorpamento del padre nelle figlie;
3. Sostituzione delle generalizzazioni con associazioni;

## Strategia 1

### Definizione

L'accorpamento delle figlie nel padre prevede l'utilizzo di una nuova entità che comprende gli attributi di entrambe le entità figlie, più una che ne descrive il tipo.

### Caratteristiche

Richiede più memoria (saranno presenti valori nulli in corrispondenza degli attributi specifici per una delle figlie) ma meno accessi (per ogni accesso accedo sempre e solo alla entità padre.

## Strategia 2

### Definizione

L'accorpamento del padre nelle figlie prevede la rimozione dell'entità padre e la distribuzione dei suoi attributi nelle entità figlie.

### Caratteristiche

Richiede meno memoria rispetto all'accorpamento delle figlie nel padre, richiede meno accessi.

## Strategia 3

### Definizione

La generalizzazione viene trasformata in una serie di associazioni con il vincolo che, se è una generalizzazione totale, ogni occorrenza della entità padre deve partecipare ad almeno una di tali associazioni.

### Caratteristiche

Richiede meno memoria rispetto alla strategia 1 ma più accessi a causa del vincolo aggiuntivo.

---
- Vedi anche: 