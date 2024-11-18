In Bash, le variabili posizionali rappresentano gli argomenti passati a uno script o a una funzione. Queste variabili sono numerate in modo sequenziale e possono essere utilizzate per riferirsi a specifici argomenti.

## Sintassi

Le variabili posizionali in Bash vanno da `$0` a `$N`, dove:

- **`$0`**: Nome dello script o del comando stesso.
- **`$1`, `$2`, ... `$N`**: Argomenti passati allo script, ordinati in base alla posizione.

## Esempio

Consideriamo un esempio di uno script chiamato `script.sh` che accetta tre argomenti:

```bash
#!/bin/bash

echo "Nome dello script: $0"
echo "Primo argomento: $1"
echo "Secondo argomento: $2"
echo "Terzo argomento: $3"

```

- `$*`: Contiene tutti gli argomenti passati allo script come una singola stringa.
- `$@`: Contiene tutti gli argomenti, ma trattati come elementi separati (utile nei loop).
