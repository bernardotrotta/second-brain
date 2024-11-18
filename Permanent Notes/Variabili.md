## Definizione

> In [[Python]] una variabile è un nome che viene associato, per meglio dire che "punta" ad un [oggetto](Oggetti%20in%20Python.md), tramite l'operazione di assegnameto `bernardo = 20` 

- Una stessa variabile può essere riassegnata ad un oggetto completamente diverso, anche con tipo diverso
- Quando una variabile viene assegnata ad un altra variabile, l'oggetto non viene copiato, ma puntato da entrambe

## Standard per Nomi

- Può contenere lettere, numeri, caratteri Unicode o Underscore($_)
- Non può iniziare con un numero
- Non può essere una parola riservata

## Reference Count

> È un contatore che registra tutte le variabile assegnate ad uno stesso oggetto

- Viene incrementato da solo ogni volta che un oggetto viene assegnato ad un nome
- Si decrementa da solo con l'istruzione `del`
- Il reference count `0` elimina la memoria tramite il "garbage collector"