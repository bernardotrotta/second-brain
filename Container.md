#terzo-anno #amministrazione-sistemi-it-cloud 

## Container e Docker

### Introduzione Alla Containerizzazione

La containerizzazione rappresenta un passo avanti nella gestione del software:

- **Anno di Introduzione:** Introdotta nel 2005 in Linux.
- **Rivoluzione Software:** Promuove l'utilizzo di micro-servizi per una maggiore scalabilità.
- **Agilità:** Facilita le modifiche ai progetti e consente un time-to-market più rapido.
- **Isolamento:** Ogni container opera come un sistema isolato, ma senza overhead significativo rispetto alle VM.
- **Origine del Termine:** Deriva dalle "Jail" nei sistemi UNIX, utilizzate per isolare processi.

### Docker: Un Pilastro Della Containerizzazione

Docker è l'ambiente più popolare per la gestione di container:

- **Nascita:** Progettato per Linux, successivamente esteso ad altri sistemi.
- **Caratteristiche Principali:**
  - Creazione e gestione di container.
  - Facilita il deployment, aggiornamento e manutenzione di applicazioni.
  - Permette di eseguire applicazioni indipendentemente dall'infrastruttura sottostante.
- **Immagini Docker:** Ogni container si basa su un'immagine, che include tutto il necessario per l'esecuzione.

### Differenze tra Container e Macchine Virtuali

- **Virtual Machine:**
  - Utilizzano la virtualizzazione hardware.
  - Ogni VM ha un kernel dedicato e un'intera copia del sistema operativo.
  - Maggiore overhead in termini di risorse.
- **Container Docker:**
  - Condividono il kernel del sistema operativo host.
  - Più leggeri e veloci da avviare.
  - Ideali per applicazioni distribuite.

> **Best Practice:** Creare container separati per ogni componente applicativo.

### Namespace e Meccanismi di Isolamento

I container utilizzano namespace per garantire isolamento:

- **PID Namespace:** Garantisce che i processi del container siano separati da quelli del sistema host.
- **UTS Namespace:** Consente a ogni container di avere un hostname unico.
- **MNT Namespace:** Fornisce un file system isolato.
- **IPC Namespace:** Comunicazione inter-processo sicura attraverso memoria condivisa.
- **NET Namespace:** Isolamento di rete, con creazione di reti virtuali dedicate.
- **USR Namespace:** Gestione utenti completamente isolata.
- **Cgroups:** Permettono di limitare l'uso di risorse fisiche (CPU, RAM, etc.).

### Immagini e Container

- **Definizione:** Le immagini sono template immutabili che contengono il software, le librerie, e le configurazioni necessarie.
- **Gestione:** Le immagini sono memorizzate e condivise attraverso repository come [Docker Hub](https://hub.docker.com).
- **Differenza:** Il container rappresenta un'istanza attiva di un'immagine.

### Vantaggi di Docker

- **Portabilità:** Consente di spostare applicazioni tra ambienti senza modifiche.
- **Consistenza:** Garantisce un ambiente uniforme tra sviluppo, test e produzione.
- **Efficienza:** Riduce l'overhead rispetto alle VM, aumentando la velocità di esecuzione.
- **Scalabilità:** Supporta facilmente applicazioni basate su micro-servizi.

### Comandi Principali

Ecco una lista ampliata dei comandi principali:

- **Creare e Gestire Container**

  ```bash
  docker run hello-world
  docker run -it ubuntu bash
  docker ps
  ```

- **Interagire con Container**

  ```bash
  docker stop [container-id]
  docker restart [container-id]
  docker logs [container-id]
  docker exec -it [container-id] bash
  ```

- **Gestione delle Immagini**

  ```bash
  docker images
  docker pull [image-name]
  docker rmi [image-id]
  ```

### Logs e Monitoraggio

- **Persistenza dei Log:** I log rimangono attivi finché il container è in esecuzione.
- **Gestione dei Fallimenti:** I container interrotti possono essere configurati per il riavvio automatico.

### Struttura Delle Immagini

- Le immagini Docker sono composte da layer, che consentono il riutilizzo e la modularità.
- Ogni modifica a un'immagine crea un nuovo layer senza alterare quelli precedenti.

### Variabili di Ambiente

- **Uso:** È possibile definire, stampare e utilizzare variabili di ambiente per configurare i container.
- **Comando Esempio:**

  ```bash
  docker run -e VAR_NAME=value [image-name]
  ```

### Esempio Pratico

Per avviare un container e accedere alla sua shell:

```bash
docker run -it ubuntu bash
```

Elenco container attivi:

```bash
docker ps
```