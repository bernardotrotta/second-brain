
- `[ -f /etc/hosts ]`: ritorna `0` se il direttorio inserito esiste
- `[ 5 -eq 2 ]`: ritorna `1` perché $5 \neq 2$

## Comparazione di Stringe

> [!warning] Attenzione!
> Importante usare le double quote per migliorare la leggibilità

## Operatori Logici

```bash
[ 5 -eq 5] && [ 5 -ne 4]; echo $?
```

```
is-active

restituisce una stringa per capire se il processo è attivo o no
```

> [!example] Esempio
> 
> ``` bash
> Fratm 
> > Risposta