## Open()

#sistemi-operativi #c #secondo-anno 

### Descrizione

È una primitiva che permette l'apertura di un file, o addirittura la creazione nel caso in cui questo non dovesse esistere. 

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);

// Oppure
// int fd = open(const char *pathname, int flags, mode_t mode);

```

- pathname: è il nome/percorso del file da aprire o creare
- flags: 
- mode: indica i diritti di accesso al nuovo file, descritti attraverso una maschera ottale.

### Funzionamento

Se l'invocazione della `open()` ha successo, viene restituito al processo un [[File Descriptor|file descriptor]] ovvero il relativo indice nella tabella dei file aperti del PCB. 

È fondamentale il valore di uscita, nel caso di open è un intero, file descriptor >0 se successo, -1 se fallito, il percorso non si usa più.

Gli interi sono crescenti e partono dal 3. 

i primi 3 sono già definiti

|-|-

| 0 | stdin |

|1 | stout |

2 stderr

dup per duplicare un[[File Descriptor|file descriptor]]

Quando si crea un duplicato, 

close per chiudere un file descriptor

read fino a count by

fileoffset scostamento della posizione di lettura sul file, capita che si posiziona alla fine del file e non c'è più nulla da leggere. 

Tabella dei file aperti nel file-system

Tabella degli I-node

Come viene fatta la copia di un file sorgente? 

Due open 

file sorgente aperto sola lettura

file destinazione lettura e scriittura

se una delle due open fallisce la copia non viene effettuata

Da segnare gli appunti su nread
