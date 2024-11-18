#elettronica #secondo-anno 

- Vedi slide: [[1 Power electronics.pdf]]
- Vedi slide: [[2 AC-DC.pdf]]

## Elettronica di Potenza

### Azionamento Elettrico

Sistema che trasferisce energia elettrica da una sorgente di alimentazione ad un qualsiasi tipo di impianto (meccanico, luminoso, termico). 

La corrente va trasferita e regolata in base alle necessità dell'impianto.

I sensori leggono le variabili di stato e le fornisce alla circuiteria di controllo, passandole al convertitore di potenza, da alternata a continua o viceversa.

La corrente generale viene presa dal sistema di alimentazione.

Anticamente, invece dei sistemi elettronici a stato solido, venivano usati i sistemi a rotazione (dinamo).

I sistemi elettronici a stato solido prevedono l'utilizzo di transistor in funzione di interruttori

Utilizzo componenti passivi/reattivi

### Classificazione Dei Convertitori

Possono essere classificati in base al tipo di applicazione o in base al tipo di conversione

- Convertitori switching
	AC/DC non li vedremo
	DC/AC (inverter): 
	AC/AC non li vedremo
	DC/DC, non posso usare il partitore, perché non devo sprecare potenza.

L'inverter nei condizionatori viene utilizzato nella conversione doppia.

Il motore di un condizionatore va ad alternata ma ha bisogno di essere controllata in modo da poterla sfruttare in maniera efficiente

### Principali Dispositivi di Potenza

- Diodi di potenza
- Trisistori: diodo che si accende a comando, non basta superare la tensione di soglia. 
- GTO: trisistore particolare
- BJT di potenza
- MOSFET di potenza
- Insolate Gate Bipolar Transistor (IGBT): transistor bipolare che non assorbe energia nel gate. 

Resistenza On-State

### Caratteristiche

Per potenze molto alte il MOSFET è più veloce

IGBT è il principe dell'elettronica di potenza. 

Isolamento Unipolare: posso utilizzare solo 

### Interruttori Controllati

![[Screenshot 2024-05-27 alle 08.48.59.png]]

Schema base di un convertitore di potenza DC/DC "in discesa" o "step-down"

Il convertitore è costituito da i due interruttori centrali

- Il diodo permette di far ricircolare la corrente

L'interruttore funziona in modalità switching in modo periodico, siccome è ideal conduce qualunque corrente. 

QUando l'interruttore è chiuso la corrente di carico circola.

L'interruttore dissipa una potenza nulla

I tempi di commutazione sono idealmente nulli

Potenza nulla per il controllo.

Cosa succede con un interruttore reale?

OFF: 

	- Piccola corrente in perdita

ON:

- Ai capi c'è una tensione che non è 0 + contributo delle resistenze parallele. Non trascurabili ai fini della potenza dissipata
![[Screenshot 2024-05-27 alle 08.54.29.png]]

Interruttore spento: massima tensione ai suoi capi, Vd più Vgamma

Interruttore acceso: durante la fase del transitorio la corrente sale

In pratica prende la tensione costante e la "affetta"

L'apertura e la chiusura del diodo si chiama duty-cycle. 

$$
\rho = \frac{t_{on}}{T}
$$

La tensione sul carico ovviamente non è costante.

Perché la corrente rimane alta? Perché c'è una fase in cui la corrente continua a circolare sul diodo

Il terzo grafico rappreenta la potenza istantanea durante la fase del transitorio 

$$
p = v(t)i(t)
$$

L'area sottesa al grafico durante il transitorio è il lavoro, l'energia dissipata.

La potenza media è tutta l'energia dissipata in un periodo, diviso il periodo. 

$Ps= \frac{1}{2} V_{d}I_{0}f_{s}[t_{c(on)}+t_c(off)]$

il periodo è f_s, sarebbe diviso

Perché ha usato da una parte la frequenza e dall'altra il periodo? perché è importante mettere in evidenzache la potenza in on state il duty cycle

Importante che il tempo totale di commutazione sia molto inferiore al periodo.

L'obiettivo è quello di avere Ps e Pon allo stesso ordine di grandezza

Poff è trascurabil

### Diodi di Potenza

Diodo ideale: interruttore ideale, in elettronica di potenza $V_{\gamma} = 0$

![[Screenshot 2024-05-27 alle 09.17.24.png]]

Tensione nulla ai capri quandoa cceso

Diodo reale: Nel caso reale la resistenza può valere anche molto di più. 

Le frequenze possono andare da 50hz (bassa frequenza) a 1mhz (alta frequenza).

A frequenze elevate devo avere tempi di commutazione tendenzialmente più piccoli

$V_{block}$

![[Screenshot 2024-05-27 alle 09.16.58.png]]

### Bjt di Potenza

Il transistor ha 3 terminali

Le caratterisstiche sono quelle del transistor normale ma cambiano le scale.

La tensione di saturazione $V_{CE_{sat}} \approx 1 / 2 V$

$\beta$ molto basso, dovrei spendere molta potenza per controllarlo.

### Mosfet

Ha tempi di commutazione rapida e mi permette di aumentare la frequenza

Ha tensioni non oltre i mille volt e 100A di corrente massima. Non cambiano le scale, sulla VGS, la tensione del gate se troppo elevata ne causa la rottura.

### Igbt

Caratteristiche di un transistor bipolare, può arrivare a dare tensioni fino a 6500 volt e qualche migliaio di ampere in corrente. Con un controllo esattamente uguale a quello del mosfet, non c'è potenza di ingresso per il controllo. Sono rapidi quasi quanto i mosfet. La caduta di tensione è più ripida rispetto agli altri componenti. Se abbiamo correnti molto basse infatti, conviene usare un mosfet. 

Mosfet vs IGBT

V_block = tensione massima che si riesce a bloccare in inversa. Massima V_DS

### Induttore e Condensatore

$v(t) = L \frac{di(t)}{dt}$

Tensione dei capi dell'induttore è data dall'induttanza per la corrente istantanea

Energia immagazzianta: $\frac{1}{2} Li^2$. Immagazzinano energia sottoforma di campo-magnetico. 

Se c'è corrente c'è energia immagazzinata, se non c'è corrente non c'è energia. In un induttore la corrente non può avere discontinuità. Perché l'energia non può cambiare istantaneamente. 

### Condensatore

Accumula energia sottoforma di campo elettrico

$i(t) = C \frac{dv(i)}{dt}$

Energia immagazzinata: $\frac{1}{2}Cv^2$

Non usiamo le resistenze in elettronica di potenza perché dissipano potenza sottoforma di calore.

### Rettificatore O Raddrizzatore

Applicazioni del diodo

Trasforma una tensione alternata in una tensione continua (valore medio non nullo) 

Convertitore A/C D/C

Semionda positiva il diodo è accea = cortocircuito. 

Semionda negativa, il diodo si spegne, la semionda negativa non passa. 

Regola pratica: quando devo scegliere un dioto o un transistore, guardo la massima tensione che può reggere quando è spento e guardo da catalogo una tensione di breakdown che è circa il doppio. La corrente alternata delle linee elettriche non è pulita, il valore massimo raggiunge anche i 300 vollt, cosa che farebbe esploere un diodo non adeguato. 

Ragionare per assurdo, se non ci fosse corrente il diodo sarebbe spento

### Diodo di Free-weeling (ricircolo)

Quando s è chiuso, il diodo è in diretta e ho il circuito in mode 1

Equazione di KF nel dominio del tempo. 

Quando il transistor si apre, la corrente si annullerebbe secondo i tempi previsti dipesi dal componente stesso, avrei un $\frac{di}{dt}$ ma la induttanza in serie al carico risente del di/dt, ai sui capi si viene a creare una tensione negativa. Ma la caduta pendenza di caduta è molto alta. superano i capi della resistenza e creano una tensione negativa su tutto il circuito. Appena il diodo sente la tensione negativa, si acccende. Il diodo sfrutta la sovra-tensione per accendersi e permettere all'energia immagazzinata di scaricarsi attraverso il diodo. se non ci fosse il diodo sfonderebbe il transistor

Il diodo di ricircolo deve essere piuttosto veloce

### Raddrizzatore a Singola Semi-onda

root mid square, la elevo al quadrato, ne faccio il valore medio e poi la radice

importante conoscere valore medio e valore efficace di qualsiasi grandezza

efficienza $potenza \frac{P_{in}}{P_{out}}$

### Raddrizzatore a Onda Intera

Utilizza un trasformatore a presa centrale con due induttori e lo stesso numero di spire, queste non sono in serie in quanto vi è presente un nodo.  

### Raddrizzatore a Ponte

Per come sono impostati i Diodi, la corrente ha un solo verso, quindi il segnale è rettificato. Ai due poli attacco il segnale in alternata. 

D1 e D3 hanno il catodo in comune ma tensione sull'anodo diverso non possono essere accesi contemporaneamente. 

Si accende solo quello con l'anodo a potenziale più alto

Nella semi-onda negativa, il circuito funziona al contrario.

Dal punto di vista pratico un raddrizzatore a ponte ha un trasformatore a ponte mentre l'altro ha un trasformatore a presa centrale (più costoso). Il problema di questo circuito è la presenza di 4 dodi MA la massima tensione che questi devono reggere è proprio la tensione Vs.  

VI vuol dire che i diodi mangiano un 20% del totale. mentre un raddrizzatore a Onda intera

Perché un raddrizzatore a onda intera è ideale per basse tensioni? :: 

Avendo due diodi in serie butto via il doppio della potenza. 