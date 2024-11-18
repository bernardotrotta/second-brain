#amministrazione-sistemi-it-cloud #terzo-anno #BASH

> [!example] Esempio
> 
> ```bash
> function_name() {
> 	commands
> }
> ```

> [!example] Esempio
> 
> ```bash
> function function_name {
> 	commands
> }
> ```

> [!example] Esempio
> 
> ```bash
> hello_world() {
> 	echo "Hello world!"
> }
> ```

Una funzione supporta il concetto di variabile locale

```bash
loval var1='C'
```

La funzione non può fare il return di un valore, di solito ritorna l'ultimo comando. A meno che non si usi il comando return, può però fare il return solo di un valore numerico, non di una variabile

```
my_function(){
	results = echo "some results"
	return 55
}

my_function
echo $?
```

Se commentassi return 55, echo $? ritornerrebbe 0

## Ritornare Valori Delle Funzioni

myfuncition

echo $results