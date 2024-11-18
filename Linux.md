---
Data: 2024-06-10
---

#sistemi-operativi #secondo-anno 

- È un [[Sistemi Operativi|sistema operativo]] multi-utente e multi-tasking;
- Il [[Sistemi Operativi#Kernel|kernel]] è la parte centrale del sistema operativo, offre all'utente dei servizi tramite le system call;
- Il linguaggio centrale è il C;
- Maggiormente usato nei sistemi embedded;
----

## File System

---

- Organizza le informazioni in file/direttori;
- Omogeneità tra dispositivi;
- Non hanno un formato prestabilito (sono semplici sequenze di byte);
- Ha una struttura gerarchica (ad albero rovesciato);
- In windows non c'è un unico albero rovesciato, ma ce ne è uno per unità, sui sistemi Linux non è così;
- Le partizioni vengono mostrate in /dev/sdc;
- Un disco può essere utilizzato grezzo o formattato da un file system; 
- L'operazione mount permette ad un file system fisico di offrire il suo spazio al file system logico `mount -t type device dir`:
	- L'opzione `-t type` non è obbligatoria;
- È necessario regolare l'accesso alle informazioni; 
- Per ogni file vengono dati dei diritti di accesso di default:
	1. Proprietario (user);
	2. Il gruppo del proprietario (group);
	3. Tutti gli altri utenti (others);
	- Lettura (r)
	- Scrittura (w)
	- Esecuzione (x) per i file
	- Accesso (x) ai direttori  
![[Screenshot 2024-05-07 alle 09.28.08.png]]
- Il linking permette di fare riferimento ad un file/direttorio con altri nomi
	- Hard link: nuovo nome per oggetto collegato, indistinguibile. Non si può creare un hard link ad un file che non esiste, se cancello il file cancello l'originale;
	- Symbolic link: è un semplice file link con il percorso ad esso collegato  
 ![[Screenshot 2024-05-07 alle 09.11.27.png]]  
 ![[Screenshot 2024-05-07 alle 09.12.19.png]]

### Shell

Mette in esecuzione i comandi forniti uno dopo l'altro;  
`ls -l` mi stampa la lista dei dispositivi connessi

- Molti comandi unix sono filtri, leggono i dati di ingresso da file o dallo standard input e producono risultati sullo standard output;

Redirezione: 

- < input
- > output
- > > output concatenato 
- >&
- head
- tail
- awk
- È possibile combinare questi comandi per eseguire una operazione da pipeline, ovvero utilizzare un comando che invia il proprio input ad un altro comando; 

 ```
 <comando1> | <comando2>| <comando3>
 ```

- Foreground: il sistema si blocca in attesa della terminazione
- Background: lo shell padre non attende il completamento dell'esecuzione
- Metacaratteri

```bash
ln # Crea 
cp # Copia file
mv # Sposta o rinomina file
rm # Rimuove file
cat # Visualizza il contenuto
file #Identifica il tipo di file
chmod [u g o] [+ -] [rwx] <nuovofileodirettorio> # Cambia i diritti
chmod nuovidiritti_8 <nomefileodirettorio> # Assegnazione globale
chown
chgrp
apropos # Trova nel database delle pagine manuale
whatis <string>
man 1 read 
which <bash> # File collegato al comando che si esegue
ls | wc
top
```

---

## Variabili di Ambiente

---

```
echo $PATH
```

- Stampa una lista di directory in cui sono presenti tutti gli eseguibili che possono essere eseguiti da comando nel bash;
- Sono elencati per ordine di importanza;

[Unti]

```
A-->|text|B

```

```zsh
find
exec
```

Gli ID utente sono due, uno effettivo e uno usato in un

diff controlla le differenze tra due file di testo

con jobs visualizzo i jobs attivi

## Esercitazione

---

```zsh
find
exec
```

Gli ID utente sono due, uno effettivo e uno usato in un

diff controlla le differenze tra due file di testo

con jobs visualizzo i jobs attivi
