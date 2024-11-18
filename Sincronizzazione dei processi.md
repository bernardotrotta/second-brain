---
number headings: first-level 1, max 6, 1.1
---

---
**Data**: 07-05-24 16:41

---

#sistemi-operativi #secondo-anno 

## 1 Sincronizzazione

[[Sistemi Operativi]]

### Premessa

- Con la crescente importanza dei sistemi multi-thread con processi che operano contemporaneamente su risorse condivise, si verificano spesso le Rage Condition. Il ruolo della sincronizzazione tra processi è proprio quello di evitare che due processi interferiscano reciprocamente durante la loro esecuzione

### Sezione Critica

- Porzione del codice di un software in cui i processi possono leggere e scrivere variabili a loro comuni
- Non più di un processo può accedere contemporaneamente alla sezione critica. per garantire ciò vi è na sezione di ingresso ed una sezione di uscita
- Ogni processo deve chiedere il permesso per accedere alla propria sezione di ingresso

**Soluzione software:** deve soddisfare tre requisiti:
1. Mutua posizione
2. Progresso: Se nessun processo è in esecuzione nella sua sezione critica ed esistono processi che desiderano entrare nella loro sezione critica, la selezione dei processi che entreranno successivamente nella sezione critica non può essere rimandata all'infinito
3. Attesa limitata

### Lock Mutex

- È una soluzione software al problema della sezione critica;
- Un lock mutex ha una variabile booleana "available", se settata su true è disponibile la funzione `acquire()` dove il processo può acquisire la lock mutex
- Se `available = false` il processo richiedente verrà bloccato finché la lock mutex non sarà disponibile, in tal caso quest'ultimo sarà detto "conteso" 
- Per rilasciare il lock si utilizza la funzione `release()`
- Le istruzioni `acquire()` e `release()` vengono eseguite atomicamente

### Semafori

- Un semaforo `S` è un contenitore di una variabile intera con diverse proprietà utilizzata per regolare l'accesso ad una risorsa condivisa
- È possibile accedere al valore del semaforo tramite due funzioni `wait()` e `signal()`
- La modifica dei valori del semaforo è fatta obbligatoriamente in maniera univoca, se un processo ne sta modificando il valore, nessun altro processo potrà fare lo stesso
- Nel caso della chiamata `wait()`la verifica di `s<=0` e l'incremento negativo `s--` devono essere fatti di fila senza interruzioni.
- **Semaforo contatore:** `S` è una variabile di tipo `int`
- **Semaforo binario:** `S` è una variabile di tipo `bool`, trovano particolare utilizzo nei sistemi in cui non è disponibile il lock mutex 
- Processi che richiedono: decrementano la variabile contatore chiamando una `wait()`
- Processi che restituiscono: incrementano la variabile contatore chiamando `signal()`
- Quando un semaforo vale 0 tutte le risorse sono occupate
- Ad ogni semaforo è associata una variabile e una lista

``` C
wait(S){
	while(S <= 0){
		;// Attesa attiva
	}
	S--;
}
```

``` C
signal(S){
	S++;
}
```

- **Sincronizzazione:** Quando due processi necessitano sincronizzarsi si utilizza un semaforo condiviso, la variabile.

``` C
S1; // Viene eseguita l'istruzione S1
signal(sync); // Viene inrementato il valore del semaforo

```

``` C
wait(sync); // Viene decrementato il valore del semaforo
S2; // Viene eseguita S2
```

#### Problema Dell'attesa Attiva

- Quando un semaforo ha un valore minore o uguale a 0, il processo richiedente effettua una `wait()`restando in attesa di poter proseguire, per evitare un eccessivo consumo di risorse, quest ultimo viene posto in una coda di attesa dei process processi attivi e viene considerato "bloccato", lo stato del processo viene impostato a `waiting`, lo scheduler della CPU è ora libero di passare il controllo ad un altro processo;
- Quando un processo che effettua una signal() rende positivo il valore del semaforo S, il processo bloccato viene quindi svegliato con l'istruzione `wakeup()`, il suo stato passa da `waiting` a `ready`;
---

#### Risorse

1. 
