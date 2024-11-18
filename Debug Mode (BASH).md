È uno strumento utile per debuggare un codidce

```
#!/bin/bash -x
```

Ogni volta che lancio lo script avrò informazioni relative a quello che il codice sta eseguendo

- Posso anche settare il punto in cui voglio che il debug venga eseguito.

	```bash
	set -x
	echo ciao
	set +x
	```