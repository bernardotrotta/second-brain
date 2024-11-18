#modello-relazionale #secondo-anno #basi-di-dati 

## Definizione

Una chiave è l'insieme di attributi utilizzato per identificare univocamente le tuple di una relazione. In termini formali, l'insieme di attributi $K$ è una super-chiave per una relazione $r$ se non contiene tuple $t_{1}$ e $t_{2}$ tali che $t_{1}[K]=t_{2}[K]$.

Un insieme di attributi $K$ è chiave per $r$ se è super-chiave minimale, cioè non esiste un'altra super-chiave K' che sia sotto-inisieme di K o, comunque, di grado inferiore

- Una chiave è tale se soddisfa la definizione per tutte le possibili tuple appartenenti alla relazione e non solo per quelle che effettivamente appaiono come istanze della relazione stessa. La chiave è legata allo schema della relazione e on ai valori effettivamente assunti dalle istanze dello schema
- Ogni relazione possiede una chiave per definizione. Può possederne più di una

## Esempio

Nell'esempio sottostante l'insieme di attributi che identificano univocamente la relazione è $K = {\text{ID Ordine, ID Cliente}}$ 

| ID Ordine | ID Cliente | Prodotto   | Quantità | Data Ordine |
| --------- | ---------- | ---------- | -------- | ----------- |
| 1001      | 5001       | Laptop     | 1        | 2024-05-10  |
| 1002      | 5002       | Smartphone | 2        | 2024-05-11  |
| 1003      | 5001       | Tablet     | 1        | 2024-05-12  |

## Superchiave

## Superchiave Minimale

## Chiave Primaria

- Vedi anche: [[Modello Relazionale]]
