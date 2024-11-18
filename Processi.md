#sistemi-operativi #secondo-anno 

## Gestione Dei Processi

### Schemi di Generazione

```C
#include <unistd.h>

if(**fork**() ==0)
{
/* Codice eseguito dal figlio */
...
}

else 
{
/* Codice eseguito dal padre */
...
}

```

L'esempio mostra un comportamento sincrono del processo padre che aspetta il processo figlio dopo averlo creato. In questo caso.

- Il processo figlio utilizza lo stesso codice che sta eseguendo il padre;
- L'area dati del padre viene duplicata, ma non condivisa, per renderla accessibile al figlio;

Nei vecchi sistemi UNIX c'era una USER AREA a livello Kernel, questa era soggetta a duplicazione quando veniva eseguita una fork. 

Il [[Programmazione di sistema in UNIX|file offset]] è duplicato

### Sincronizzazione tra Padre e Figlio

```c
#include <sys/types.h>
#include <sys/wait.h>

pid_t **wait**(int *status);
```

`WEXITSTATUS(status)`: estrae il valore dell'esito del figlio

`status >> 8`: Fa lo shift a destra di 8 bit, eliminando i bit meno significativi;

`waitpid`: ci si mette in attesa di uno specifico processo figlio, a differenza di `wait`, è possibile usare un parametro `WNOHANG` in cui il padre può sapere se un processo figlio è terminato senza bloccarsi e la wait diventa non sincrona;

```c
int status;
/* NB int *status ; è sbagliato : perché ? */
if(**fork**() ==0)
{
/* Codice eseguito dal figlio */
}

else
{/* Codice eseguito dal padre */
...
/* Attende che il figlio termini */
**wait**(&status);
...
```