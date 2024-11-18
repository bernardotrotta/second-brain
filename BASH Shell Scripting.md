#amministrazione-sistemi-it-cloud #terzo-anno 

## Map of Content

- [[Debug Mode (BASH)]]
- [[Exit Code (BASH)]]
- [[Comparison (BASH)]]
- [[Special Variables (BASH)]]
- [[Funzioni (BASH)]]

### In Generale

- È un linguaggio di scripting.
- Può gestire array monodimensionali.
- Utile per compiti che richiedono diverse chiamate del terminale.

## Creare Un File Bash

1. Creare un file di testo (Best practice: estensione.sh)

```bash
vim hello.sh 
```

2. Inserire un comando BASH

 ```shell
 echo "Hello World!!"
 for I in $(ls -la)
 do
	 echo $I
 done
 ```

3. Definire lo start di un bash script

 ```bash
 #! /bin/bash 
```

4. Chiamare lo script bash

```bash
./hello.sh
```

### Variabile $PATH

Contiene i path di molti eseguibili

```echo $PATH```

```
which ls
```

Il fatto che io non debba specificare il path assoluto è perché l'eseguibile di which è presente nella variabile path

```
export PATH =""
```

```
echo "ERROR:" >&2
```

ho svuotato la directory path

## Debugging with Echo

```
#!/bin/bash

Create a directory

echo "Creating directory 'my_folder'"

mkdir my_folder

# Check if the directory was created

echo "Directory $(my folder)"
```

Variabili

hello="ciao"

echo $hello

Non possono avere spazi

Possono contenere interi e stringhe

Una var non può iniziare con un numero

Importante fare brace quoting

Posso iterare su una variabile usando $@

> [!example] Esempio
> Come verifico in bash se una riga da risultato positivo?
> 
> ```bash
> [user]$ id bernardo 1> /dev/null
> $?
> ```

> [!example] Esempio
> 
> ```bash
> [user]$ MYVAR = "some value"
> [user]$ export MYVAR
> [user]$ echo $MYVAR
> some value
> ```

Per mantenerle cosstanti al login e logout, inserisco questo comando in profile, la variabile può essere anche uno script

Cosa interessante, le directory in ls sono colorate grazie ad un alias 

---

### Referenze

1. 

---
**Tags**: 