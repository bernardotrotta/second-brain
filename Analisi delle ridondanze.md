#basi-di-dati #secondo-anno 

## Introduzione

Una ridondanza è la ripetizione di un dato all'interno dello schema. L'analisi delle ridondanze non prevede la loro rimozione a priori, piuttosto una valutazione sulla base dei vantaggi e degli svantaggi dovuti alla loro presenza. 

### Vantaggi

1. **Semplificazione delle interrogazioni:** se lo stesso dato compare in più tabelle, la probabilità di dover fare un [[Join (SQL)|join]] per recuperarlo è minore

### Svantaggi

1. **Minore scalabilità:** in caso di modifica di un dato, è necessario aggiornare manualmente tutte le sue occorrenze.
2. **Occupazione di memoria:** Maggiore è il numero di dati, maggiore è il peso che questi avranno in memoria.

## Tipologie di Occorrenza

- Un Attributo Può Essere Derivato da Attributi Della Stessa Entità O Relazione

**Esempio:** Immaginiamo di avere un'entità `Studente` con gli attributi `data_nascita` e `età`.

|Studente|
|---|
|ID Studente|
|Nome|
|Data di Nascita|
|Età|

In questo caso, l'attributo `età` è ridondante perché può essere calcolato direttamente dall'attributo `data_nascita`.

2. Un Attributo Può Essere Derivato da Attributi di Altre Entità e Relazioni

**Esempio:** Supponiamo di avere due entità, `Ordine` e `Prodotto`, e una relazione `Contiene` che le collega:

|Ordine|
|---|
|ID Ordine|
|Data Ordine|
|ID Cliente|

|Prodotto|
|---|
|ID Prodotto|
|Nome Prodotto|
|Prezzo|

|Contiene|
|---|
|ID Ordine|
|ID Prodotto|
|Quantità|

Se aggiungiamo l'attributo `Totale Ordine` all'entità `Ordine`:

|Ordine|
|---|
|ID Ordine|
|Data Ordine|
|ID Cliente|
|Totale Ordine|

L'attributo `Totale Ordine` è ridondante perché può essere calcolato sommando il prodotto del `Prezzo` dei prodotti e la `Quantità` della relazione `Contiene`.

3. Un Attributo Può Essere Derivato Mediante Conteggio di Occorrenze

**Esempio:** Consideriamo le entità `Cliente` e `Ordine`, e una relazione `Effettua` che le collega:

| Cliente    |
| ---------- |
| ID Cliente |
| Nome       |

|Ordine|
|---|
|ID Ordine|
|Data Ordine|
|ID Cliente|

Se aggiungiamo l'attributo `Numero Ordini` all'entità `Cliente`:

|Cliente|
|---|
|ID Cliente|
|Nome|
|Numero Ordini|

L'attributo `Numero Ordini` è ridondante perché può essere calcolato contando il numero di occorrenze di `ID Cliente` nella relazione `Ordine`.

4. Associazioni Possono Essere Derivate da Altre Associazioni in Presenza di Cicli

**Esempio:** Supponiamo di avere tre entità `Studente`, `Corso`, e `Dipartimento` con le seguenti relazioni:

|Studente|
|---|
|ID Studente|
|Nome|

|Corso|
|---|
|ID Corso|
|Nome Corso|
|ID Dipartimento|

|Dipartimento|
|---|
|ID Dipartimento|
|Nome Dipartimento|

|Iscrizione|
|---|
|ID Studente|
|ID Corso|

|Appartiene|
|---|
|ID Corso|
|ID Dipartimento|

Se aggiungiamo una relazione diretta `Studente-Dipartimento`:

|Studente-Dipartimento|
|---|
|ID Studente|
|ID Dipartimento|

Questa relazione è ridondante perché la connessione tra `Studente` e `Dipartimento` può essere derivata attraverso la relazione `Iscrizione` e `Appartiene` (cioè, un `Studente` è iscritto a un `Corso` e un `Corso` appartiene a un `Dipartimento`).

---

- Vedi anche: 

