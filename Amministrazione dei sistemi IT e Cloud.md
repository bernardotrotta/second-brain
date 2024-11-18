[[Wildcards]]

[[Brace Expansion]]

[[Comandi utili]]

ls -la listo tutti i file

ls -la mio* lista tutto quello che inizia per mio

`ls -la *.conf` lista tutto quello che finisce con .conf

Un dominio wildcard ha lo stesso discorso

~ home directory

`[abc]` uno dei caratteri presenti tra le parentesi

Brace expansion

echo file{1..100}

$ command substitution

file mi dice il tipo di file

il professore si scoccia molto di trovare le cose nel posto sbagliato

-p gli passa tutta la catena di directory

comenado less

sudo touch directory{1..15}/file eccetera

head legge le prime dieci righe di un file

tail legge il fondo del file

-n10 scelgo il numero di righe

-f forzo il restare all'interno della lettura

CMD R per ricercare

CMD D per uscire dall'utente

cat stampa il contenuto di un file

## Shell Basics

stdin = 0 

stdin = 1

stderr = 2 un qualsiasi messaggio di errore passa su un altro canale che è diverso dal canale tramite il quale passa il primo messaggio.

Volendo posso creare dei canali alternativi utili allo sviluppatore.

command 1 > file.txt

command 2 > error.txt

posso fare anche tutto in un unica riga

grep cerca qualcosa all'interno di una file

## Utenti e Gruppi

ps au

mi permette di vedere tutti i processi attivi dal sistema operativo. ![[Screenshot 2024-10-04 alle 15.12.36.png]]

```
**fedora**:x:1000:1000:**fedora**:/home/**fedora**:/bin/bash
```

owner fedora: identificativo alfanumerico del proprietario del file. 

grep bernando /etc/passwd

Come ottenere i permessi da Superuser

`root` non ha alcun tipo di limitazione.

```bash
# Mi permette di passare da un utente all'altro
su - student 
```

```bash
# Il - serve a caricare l'environment dell'utente
su - 
```

```bash
# Permette ad un utente non amministrativo di accedere
sudo  
```

```bash
cat /etc/sudoers.d 
```

```
Per risolvere la questione del DDNS ho usato il comando DIG per ottenere informazioni sul dominio.
```

## Gestione Passwd

chage -l permette di avere le informazioni di shadow in maniera più leggibile

## Gestione Dei Permessi

ch

Suid

SGID

setgid bit

umask è una maschera di permessi soprattivi

la maschera viene resettata al login dell'utente

/etc/profile

/etc/bashrc

mosso anche fare la modifica localmente, andando in home

/home/.bashrc

chmod 777

anno prossimo : date -d "+1 year"

chage john -d $(date -d "+1 year" +"%Y-%m-%d")

[[Processi (Linux)]]

[[Apache HTTPD]]

[[Processi (Linux)]]

[[BASH Shell Scripting]]

- [[Container]]