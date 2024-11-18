#sistemi-operativi #secondo-anno 

## exec()

si passa il percorso di un eseguibile o di uno script, automaticamente determina il programma per eseguirlo. il secondo argomento è un vettore, c'è solo l'argv e non l'argc. Il terzo argomento è un puntatore alle variabili di ambiente

execve non crea alcun processo

execve prevede in caso di successo l'esecuzione del codice

i dati iniziali che ha a disposizione sono quelli dell'eseguibile. Cambio quindi l'ambiente di esecuzione senza cambiare processo

abbiamo quindi fork() e exec()

se l'eseguibile esiste

si ha il diritto di accesso

è effettivamente un eseguibile

l'esecuzione continua nel codice dell'eseguibile

In questo caso non è un errore non avere il controllo del fallimento. 

le varianti sono:

execl

execlp

execle

execv

execvp