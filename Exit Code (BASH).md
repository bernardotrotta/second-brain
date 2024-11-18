#amministrazione-sistemi-it-cloud #terzo-anno 

## Introduzione

Ogni volta che lancio un comando viene popolata una variabile `$?` che ne contiene il codice di uscita.

- `0`: OK!
- `1`: Fallito

### Esempio

```bash
ll mio_file
```

```bash
echo $2
```

## Forzare L'uscita

Inserendo `exit 0` in uno script, esco dallo script