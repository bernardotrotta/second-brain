#sistemi-operativi #secondo-anno 

## Principi Base

- In un [[Sistemi Operativi|sistema operativo]] la rilevazione degli errori viene affidata all'hardware, mentre la loro risoluzioni ad espedienti software (eccezioni/trap); 
- È possibile richiedere l'intervento della CPU in due modalità:
	1. User mode;
	2. Supervisor mode;
- Il passaggio da una modalità all'altra può avvenire attraverso una [[Sistemi Operativi#Interrupt|interrupt]] interna (sincrona) o esterna (asincrona).
- **Principio di minimo privilegio:** è il paradigma di protezione più utilizzato nei sistemi operativi moderni: ad ogni entità vengono assegnati esclusivamente i permessi di cui ha bisogno per funzionare. I permessi possono essere: 
	- Statici;
	- Dinamici;
- **Granulosità:** gestione dei permessi per categorie di entità. Può essere:
	- Fine: più complessa e onerosa, ma molto versatile;
	- Grossa: semplice da gestire ma molto limitante;
- **Audit trail:** registrazione di ogni attività svolta dagli utenti e dai processi ai fini di sicurezza

## Difesa in Profondità

- In questo paradigma di progettazione si introducono diversi livelli di protezione indipendenti l'uno dall'altro, se fallisce un livello, non ci saranno conseguenze sugli altri;
- Ogni dispositivo che risulta difettoso o vulnerabile, viene assegnato ad un altro livello;
- Ad ogni livello di sicurezza possono essere aggiunte le seguenti misure di sicurezza:
	1. Organizzazione e aspetti umani;
	2. Sicurezza fisica: serrature, dispositivi di tracking;
	3. Perimetro: firewall, VPN; 
	4. Rete: segmentazione della rete; 
	5. Endpoint: autenticazione; 
	6. Applicazioni: antivirus; 
	7. Dati: crittazione, elenco per il controllo accessi; 

## Anelli di Protezione

- Suddivisione dei componenti in base ai livelli di permessi applicati (es. il kernel è in un anello, una applicazione utente è in un altro anello).
- Ogni anello è indipendente dall'altro ma è possibile mutuare l'accesso ad un altro anello tramite un *gate* (es. nei sistemi Intel si usa la funzione `syscall`)

> [!nota] Nei processori con architettura ARMv7 è stato introdotto un ulteriore anello chiamato TustZone(TZ), protegge il chip NFC e le chiavi crittografiche anche dal kernel che può essere compromesso. 

- Hypervisor: software che consente la virtualizzazione, ovvero la suddivisione delle risorse (tra le quali c'è anche la CPU) tra più sistemi operativi. Le macchine virtuali condividono risorse fisiche restando isolate l'una dall'altra.