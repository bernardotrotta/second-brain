## Problematiche Comuni Agli Algoritmi di Machine Learning

Di seguito alcuni dei principali problemi che si riscontrano durante le fasi di training 

- Hyperparameter tuning
- Bias
- Overfitting
- Underfitting

### Hyperparameter Tuning

---

Impostare questi parametri risulta essere uno dei primi limiti durante la costruzione di un algoritmo di Machine Learning. 

- Non sono ricavabili dai dati ma sono necessari all'algoritmo per funzionare

#### Esempio

Il numero di layers e il numero di neuroni di input nelle reti neurali

#### Tecniche per Massimizzare la Capacità Predittiva di Un Algoritmo

> Il training di un modello è molto oneroso in termini di risorse, è possibile però parallelizzare queste operazioni per ridurre i tempi.

1. **Grid Search:**
	- **Approccio:** Esplora sistematicamente tutte le combinazioni possibili degli iperparametri all'interno di uno spazio predefinito.
	- **Processo:** Crea una griglia di tutte le possibili combinazioni di valori degli iperparametri e valuta il modello su ciascuna combinazione.
	- **Vantaggi:** Garantisce una copertura completa dello spazio degli iperparametri, permettendo di identificare la migliore combinazione.
	- **Svantaggi:** Può essere computazionalmente costoso, specialmente con spazi di ricerca grandi.
2. **Random Search:**
	- **Approccio:** Esplora casualmente il campo degli iperparametri, selezionando un numero fisso di combinazioni casuali.
	- **Processo:** Seleziona casualmente diverse combinazioni di valori degli iperparametri e valuta il modello su ciascuna combinazione.
	- **Vantaggi:** Può essere più efficiente in termini di tempo rispetto alla Grid Search, specialmente quando alcune combinazioni sono più promettenti di altre.
	- **Svantaggi:** Non garantisce una copertura completa dello spazio degli iperparametri, ma potrebbe comunque trovare buone soluzioni.

### Overfitting

---

Il modello è troppo specifico e non riconosce singole possibili variazioni. Superata una certa soglia di complessità, l'errore comincia a crescere.

### Underfitting

---

Introduciamo due parametri, il bias e la varianza

**Bias:** Quanto le stime si distanziano in media dalla realtà

Varianza: Quanto le stime in media sono diverse tra loro

Il caso ideale si presenta nel momento in cui si ha una bassa varianza e un basso bias

In generale nell'underfitting il modello è troppo semplice per poter avere una buona performance predittiva.

### Approccio Al Training

---
1. Suddividere il dataset in due parti: set di addestramento e set di test.
2. Addestrare il modello sul set di addestramento ed effettuare i test sul set di testing.
3. Minimizzare gli errori valutando la capacità del nostro modello di poter **generalizzare** con dati che non ha mai visto prima.

## Algoritmi per Scopo

---

### Algoritmi di Classificazione

---

Sono algoritmi che dato in input un inisme di oggetti restituiscono un valore categorico che ne descrive l'appartenenza ad una classe. 

#### Esempi

- Logistic Regression
- Algoritmo di Naive Bayes
- Perception
- Decision Trees
- Support Vector Machine
- Resti neurali

[[Algoritmi di classificazione]]

#### Algoritmi di Regressione

---

Il loro scopo è quello di predire il valore di una variabile dipendente rispetto alla variabile indipendente ed esistono diversi variazioni di questo modello

- Regressione lineare
- Ridge regression
- Lasso regression

#### Algoritmi di Clustering

---

Prima di definire il clustering è importante sottolineare la differenza tra clustering e classificazione

### Model Ensembles

---

È un concetto che descrive la creazione di un insieme di modelli che lavorano insieme fornendo un risultato combinato

Training: Può essere eseguito sugli stessi dati per ciascun modello, oppure su campioni diversi

Pro: 

	Miglioramento sensibile delle performance predittive

	I model ensmbles tendono ad essere modelli più robusti

Contro: Il risultato ottenuto è una media dei risultati ottenuti dai vari modelli, motivo per il quale alcune caratteristiche di certi algoritmi andranno perse

- sono più complessi
- Richiedono più risorse computazionali

### Algoritmi per Modalità di Apprendimento

- Supervisionato
- Non supervisionato
- Semi-supervisionato

### Supervisionato

Un modello supervisionato è capace di predire il futuro sulla base di "ESPERIENZE PASSATE". Vengono forniti infatti una serie di dati etichettati, esempi utili a capire su cosa basare le previsioni future, Un esempio è quello di far capire al modello quale nelle immagini fornite rappresenta un volto e quale no

### Come Funziona il Training?

Si suddividono i dati in due parti

- Predittori: Le varie caratteristiche o variabli indipendenti che aiutano ad effettuare la previsione
- Risposta: contiene il risultato che vorremmo ottenre

In sintesi, l'apprendimento supervisionato mira a trovare le relazioni tra predittori e risposta

Problema: molto spesso i predittori sono difficili da reperire

### Non Supervisionato

---

Lavorano su dati non etichettati

L'apprendimento non supervisionato forma un modello senza alcuna capacità predittiva, ma trova strutture, organizzazione e rappresentazione del dato di input precedentemente sconosciute. Utili per effettuare clustering, e compressione dei file, in quanto modelli capaci di riconoscere pattern presenti nei dati e ri-rappresentarli in maniera più ottimizzata

Cluster naturali.

### Semi-supervisionato

---

Lavorano su dati etichettati in parte, che rappresenta una piccola percentuale del dataset.