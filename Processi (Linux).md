#amministrazione-sistemi-it-cloud #sistemi-operativi 

## Processi (Linux)

Mostro tutti i processi di sistema

```bash
ps aux | wc -l
```

Caratteristiche:

- Memoria allocata;
- Security properties;
- Threads; 
- Process state;

Un ambiente è costituito da:

- Variabili globali e locali;
- Contesto di scheduling;
- Risorse di sistema (file descriptor, gates)

```bash
# Stampa tutte le variabili globali associate all'utente

env
```

### Esempio

```bash
ls -la
```

Eredita tutte le garant di root in modo da accedere a tutte le cartelle

```

```

## Creazione di Un Processo

Ogni processo ha un identificativo numerico PID

Il processo figlio eredita le grant del processo padre ed ha un parent process ID (PPID) ovvero il nome del processo da cui è creato.

```bash
ps -ef | head -5
```

Generalmente il processo padre resta in attesa del processo figlio che finisca le sue task

```bash
sleep 10
```

In questo caso il terminale (processo padre) attende che il processo sleep compia le sue task. 

## Process Control Using Signals

Ogni processo può ricevere dei segnali che vengono interpretati.

```bash
# Manda un segnale per bloccare il processo

^C 
```

```
# Forza un processo a rileggere il dile di configurazione.

HANGUP

# Forza il processo ad uscire

kill <PID>

# Per metttere in background un processo 
sleep 100000 &

```

## Processi in Background

Come interagire con un processo che nasce al boot del sistema? -> Systemd

Systemd gestisce Service, Unit, Timers, Socket

cat sshd.service

After = (elenco di tutte le dipendenze)

ExecStart è l'eseguibile del demone

ExceReload = /bin/kill -HUP $MAINPID

systemctl permette di interagire con systemd
start stop restart reload 
![[Screenshot 2024-10-14 alle 14.08.44.png]]
---

## Regular Expressions

Sono un linguaggio di pattern matching. In linux sono gestite sia con vim che grep

grep cat regexfile

```bash
**cat**

con**cat**enate

**cat**egory

edu**cat**ed
```

^ espressione che inizia con 

$ espressione che finisce con 

^cat sto cercando parole che iniziano con cat

wildcards:

. ogni carattere

c.t cerca una stringa che contiene una c, qualunque cosa nel mezzo, e una t 

restituirà cat

c[aou]t è un set di caratteri

cat cot cut

moltiplicatori *

trova qualunque cosa *c.t qalunque cosa inizia con c e finisca con t

* Oppure c.{2}t gli sto dicendo che ha 2 caratteri facoltativi da mettere in mezzo

c.t

cat cet cot cut

*t

[[Apache HTTPD]]

rivedere lo standard error

### Referenze

1. In caso di log molto lunghi posso fare -l per evitare che il testo venga troncato 
2. rpm è il package manager di più basso livello

---
