#sistemi-operativi #secondo-anno 

## Introduzione

I processi operano in uno spazio di indirizzi, privati e specifici per ogni processo. Normalmente il sistema operativo non permette ad un processo, salvo eventuali casi, di accedere alla memoria di un altro processo. 

### Area di Memoria

È suddivisa in diverse sezioni, alcune accessibili in modalità utente e altre in modalità kernel (area di kernel). 

1. Area utente (codice, dati, stack);
2. Area di kernel (kernel stack, user area);

Entrambe sono soggette a swap.

Il kernel ha bisogno di strutture dati per gestire i processi, process control block, un'area di memoria che resta sempre in memoria principale e non swappable. Riconosciamo anche una text table, tabella dei codici correnti.

- Area Dati, contiene dati statici definiti a tempo di compilazione
- Dati dinamici, variano durante l'esecuzione di un processo
- Heap
- Stack
- 

Il codice utilizzato dal processo risiede nell'area codice

User area vecchi sistemi codici, in linux si chiama task struct, viene salvato lo stato raggiunto prima che il processo interrompa la sua esecuzione

Tabella dei file aperti

Lo stack in area kernel è separato dallo stack normale.

- text: codice
- static data:
- heap
- Dynamic shared libraries: librerie condivise tra processi;
- stack
- `cat /proc/PID/maps` : comando per visualizzare la mappa dei processi in [[Linux]]

### Linker e Loader

Il comando `ldd showargs` mostra le librerie necessarie per far partire un eseguibile

- La variabile `echo $LD_LIBRARY_PATH` dice in quali direttori trovare le librerie dinamiche che servono all'esecuzione;
- con il comando `ps` visualizzo i processi attivi nella sessione del terminale in corso;
- `ps`: 
- `ldd showargs`:
- `echo $LD_LIBRARY_PATH`:
- `cat /sys/`: 
- `ls -l showargs`:
- `gcc -o showargs.static showargs.c`:
- `ls -l showargs.static`: 
- `readelf showargs -a | more`:  

Eseguibili dinamici: più compatti, se ci sono dei miglioramenti delle librerie, il collegamento dinamico l'eseguibile può avvalersene, se la libreria manca non si può più esegure il programma

Eseguibile statico: ha tutto ciò che serve

### Argomenti di Un Eseguibile

`argc`: argomenti di un eseguibile, parte da 1.

`*argv`: puntatori carattere necessita ashii to integer

`./showenb`

### Primitive Unix

Le system call seguono una convenzione: il valore di ritorno della system call dice se è stato eseguito con successo o qualche problema.

Successo: >=0

Negativo: -1

ogni volta che una system call viene invocata, bisogna confrontare il suo valore di uscita con <0

-1 non dice il motivo del fallimento, solo che c'è errore

perror dice cosa succede dopo che la system call è fallita

per recuperare il codice dell'errore si fa riferimento ad una variabile errno, non è necessario definirla, va incluso errno.h

strerror va a fefinire i messaggi descrittivi dell'errore

```c
if (syscall_N(…, …) < 0)
{
	perror(“Errore nella syscall_N”); /* La descrizione dell’errore viene
	concatenata alla stringa argomento di perror */
	exit(1); /* terminazione del processo con errore */
}
```

exit(0) senza errore

exit(1) terminazione con errore

con il comando strace vengono tracciate le system call che il processo esegue con parametri d ingresso e parametri di uscita

ltrace traccia le chiamate di librerie, come quella della libreria C, nella sua eecuzione c'è una istruzione per gestire un interrupt

### System Call I/O

Tutti i programmi hanno bisogno di scrivere file. Operare sui vile vuol dire passare attraverso un prologo, ovvero un processo che che inizializza la risorsa tramite una richiesta `open()` `socket()`. Ottenuto l'accesso, si passa all'utilizzo della risorsa, tramite le primitive come `read()` o `write()`, quando termina l'accesso si passa all'epilogo dove si chiude il descrittore ottenuto nel prologo.

È importante sottolineare che ogni [[System Call|system call]] prevede un proprio header da includere nel file di progetto. 

- [[Open()|`open()`]]:  