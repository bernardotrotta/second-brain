#sistemi-operativi #secondo-anno 

## Gestione Delle Interruzioni

### Funzionamento Generale

- È un segnale di tipo hardware o software che viene utilizzato per sospendere l'esecuzione di un processo e passare al controllo di un altro processo;
- Ogni interrupt può essere causato da un motivo diverso, per cui esso contiene un puntatore ad una cella di memoria che raccoglie le istruzioni da eseguire per quella determinata interruzione;
- La tabella dei puntatori è generalmente posizionata agli indirizzi più bassi della memoria
- Il controllore solleva una richiesta di interruzione tramite l'interrupt request line, della CPU dedicato a gestire questo tipo di segnali.
- Sul canale la CPU legge il puntatore all'indirizzo di memoria che contiene la routine per gestire l'interruzione, manda il segnale all'interrupt handler che si occupa di eseguirla e la esegue.
- L'interrupt handler salva lo stato attuale del processore e lo ripristina una volta terminata l'interruzione, tramite una istruzione chiamata *return from interrupt*

### Interrupt Avanzati

- I moderni sistemi operativi sono dinamici, la funzionalità dell'interrupt dovrebbe soddisfare le seguenti caratteristiche:
	1. Posticipare un interrupt in caso di processo in esecuzione di importanza critica;
	2. Gestire le istruzioni di interrupt in maniera diversa in base al tipo di dispositivo che la scaturisce; 
	3. Considerare interrupt di tipo diverso, organizzati in base alla priorità; 
