#sistemi-operativi #secondo-anno 

## Modello di Sistema

- **Risorse:** componente di natura fisica o virtuale accessibile al [[Sistemi Operativi|sistema operativo]] (es. cicli di CPU, interfacce di rete, lettori DVD). Sono divise in classi o tipi, ogni elemento di una specifica classe è detto *istanza*. (es. in un sistema quad core, la classe CPU ha 4 istanze). Possono essere:
	- **Riusabili:** es. riso
	- **Consumabili:** segnali; 
- **Utilizzo delle risorse:** il sistema utilizza le risorse attraverso un thread. Una tabella tiene conto delle risorse occupate.La richiesta rispetta la seguente sequenza:
	1. Richiesta (usa System Call): `request()`, `open()`, `allocate()`, `wait()`
	2. Uso
	3. Rilascio (usa System Call): `release()`, `close()`, `free()`, `signal()`
- **Stallo o starvation:** condizione in cui un gruppo di thread richiede un evento che può essere causato solo da un altro thread che si trova nel gruppo.
- **Deadlock:** due o più thread che richiedono risorse utilizzate dall'altro.

## Grafo di Allocazione Delle Risorse

- Strumento per rappresentare il modo in cui queste risorse vengono allocate.
- Se il grafo non contiene cicli, non c'è deadlock
- Se il grafo contiene un ciclo, può esserci un deadlock

## Condizioni di Coffman/Havender

- Sono condizioni necessarie ma non sufficienti per il verificarsi di un deadlock: 
	1. **Mutua esclusione:** una risorsa può essere utilizzata da un solo processo, in caso contrario ha uno stato `available`, se non viene gestita correttamente, (es. uso scorretto dei [semafori](Scheduling##Scheduler della CPU) si rischia lo stallo;
	2. **Possesso e attesa:** un processo che richiedere un'altra risorsa può richiederne altre che sono detenute da altri processi; 
	3. **Assenza di revoca:** le richieste assegnate possono essere rilasciate solo volontariamente;
	4. **Attesa circolare:** è presente una situazione di attesa circolare tra un gruppo di  
		processi: ogni processo è in attesa di una risorsa posseduta dal processo che segue nella lista, e l’ultimo processo è in attesa di una risorsa detenuta dal primo processo considerato.

## Strategie di Soluzione

1. **Ignorare il problema:** eliminare il deadlock è costoso;
2. **Detect & Destroy:** Il sistema controlla periodicamente il grafo di allocazione;
3. **Prevenzione dinamica:** 
4. **Prevenzione statica:** viene impedita una delle 4 condizioni di Coffman/Havender

