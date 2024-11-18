Le **wildcards** nei sistemi Unix-like sono caratteri speciali che possono essere utilizzati per rappresentare uno o più caratteri in una stringa. Sono molto utili quando vuoi riferirti a più file o directory senza doverne specificare i nomi esatti. Possono essere utilizzate in molti comandi di Ubuntu come ls, cp, mv e rm. Ecco i principali caratteri wildcard e come funzionano:

1. `*`: Rappresenta qualsiasi numero di caratteri, inclusi zero.

	```bash
	# Seleziona tutti i file con estensione .txt.
	
	*.txt 
	```

2. `?`: Sostituisce esattamente un carattere singolo.

	```bash
	# Seleziona file come file1.txt, file2.txt, ma non file10.txt o file.txt.
	
	file?.txt 
	```

3. `[]`: Definiscono un intervallo o un gruppo di caratteri.

	```bash
	# Seleziona file1.txt, file2.txt, e file3.txt.
	
	file[1-3].txt 
	```

4. `[!]`: Negano un insieme di caratteri.

	```bash
	# Seleziona tutti i file che iniziano con “file” ma il cui nome non 
	# contiene numeri.
	
	file[!0-9].txt 	
	```
