---
Data: 2024-05-10
---

#sistemi-operativi #secondo-anno

## Introduzione

Meccanismo fondamentale alla base della multi-programmazione.

- **Sistema mono-processore:** si attende la completa esecuzione di un processo per poterne eseguire un altro;
- **Sistema multi-programmato:** durante la fase di attesa di un processo (es. attesa per un processo di input/output), l'algoritmo di scheduling rimuove al processo il controllo sulla CPU, permettendo ad altri processi di essere eseguiti; 

## Scheduler Della Cpu

Quando la CPU passa ad uno stato di inattività lo scheduler preleva il primo processo disponibile dalla coda FIFO dei processi detta *Ready queue*, ovvero una coda i quali elementi sono rappresentati dai Process Control Block (PCB), si può realizzare come una coda fifo, una coda lifo, un albero o con una lista concatenata non ordinata. 

## Meccanismo di Attivazione

Il processo di scheduling si attiva se si verifica una delle quattro condizioni

1. Un processo passa dallo stato di esecuzione allo stato di attesa;
2. Un processo passa dallo stato di attesa allo stato di pronto (termine fase di I/O);
3. Un processo passa dallo stato di esecuzione allo stato di pronto (interrupt);
4. Il processo termina; 

## Scheduling Preemptive

- Si passa da un processo all'altro
- Può portare a *Race Condition*: un secondo processo può tentare di leggere i dati che sono stati lasciati in uno stato incoerente dal primo processo

## Scheduling Non Preemptive

Quando un processo prende il controllo della CPU, non lo perde fino alla fine della sua esecuzione o al passaggio allo stato di attesa.

## Algoritmi di Scheduling

### First come First Served

- Si basa sul la coda fifo
- È senza prelazione
- Non è considerato il più veloce
- Non è indicato nei sistemi time sharing

### Shortest Job First

- È un caso particolare di scheduling con priorità;
- È un algoritmo con prelazione;
- Più indicato dire Shortest Next CPU Burst;
- Associa alla CPU il processo con il CPU Burst più breve;
- Se due processi hanno la stessa lunghezza di CPU Burst si applica FCFS:
- È considerato ottimale in quanto livello di throughput più alto (processi terminati per unità di tempo, tempo di attesa medio più basso);
- Svantaggio: non si conosce a priori il tempo di burst di un processo, per stimarlo si applica la seguente formula:

$$
t_{n+1}=at_{n}+(1-a)t_{n}
$$

### Round Robin

- Simile all'algoritmo [FCFS](# First Come First Served) ma con prelazione;
- Ad ogni processo viene assegnato un quanto di tempo (10 - 100)ms;
- Le ready queue è trattata come una coda circolare; 
- Lo scheduler imposta un [[Sistemi Operativi#Timer|timer]] della durata del quanto di tempo, al termine del quale viene mandato un interrupt al processo, il dispatcher provvede a spostare il controllo della CPU al primo processo nella ready queue;
- Tempo di attesa lungo; 
- È un algoritmo considerato con prelazione, in quanto superato il time-slice l'esecuzione del processo viene interrotta;
- **Turnaround Time:** Tempo di completamento di una sequenza di processi;

### Scheduling con Priorità

- Ad ogni processo viene associato un parametro "priorità", rappresentato da un numero interno N; 
- Nel caso di SJF, la priorità è inversamente proporzionale al tempo di CPU Burst; 
- Può essere sia con prelazione che senza prelazione (dipende dal processo); 
- Problema: la priorià causa Starvation 