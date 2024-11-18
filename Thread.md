#sistemi-operativi #secondo-anno 

## Thread

- Una thread rappresenta un singolo flusso di esecuzione di un processo
- Ogni thread contiene:  
		Thread Group ID (TGID);  
		Program Counter;  
		Stack;  
		Registri;
- In base al numero di thread presenti in un processo, si distinguono:
	- Processi single-thread: compatibili con il concetto di esecuzione concorrente;
	- Processi multi-thread: compatibili con il concetto di parallelismo;
- **Parallelismo nei sistemi single-core:** la potenza di calcolo viene temporaneamente suddivisa su ogni thread in modo da dare l'illusione di una esecuzione temporanea.
- **Parallelismo nei sistemi multi-core:** i thread vengono assegnati ad un determinato core e si arriva ad una ulteriore distinzione: 
	- Parallelismo delle attività: ogni thread avrà una specifica funzione ed elabora la propria attività; 
	- Parallelismo dei dati: più thread possono occuparsi di una stessa attività ma lavorare su dati diversi;