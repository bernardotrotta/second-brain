#elettronica #secondo-anno 

## Cosa Sono gli Op-amp?

[[OP-AMP Invertente]]

### Introduzione

**Definizione 1:** Un amplificatore è un elemento circuitale attivo progettato per eseguire operazioni matematiche di addizione, sottrazione, moltiplicazione, divisione e integrazione.
**Definizione 2:** Un amplificatore operazionale è un [[Amplificatori differenziali|amplificatore differenziale]] con le seguenti caratteristiche:

1. Guadagno di tensione differenziale infinito: nella pratica, il valore massimo del segnale amplificato, non può superare quello di alimentazione. L'alimentazione di un op-amp è duale, cioè presenta due valori uguali ma di segno opposto. Indicate solitamente con $+V_{CC}$ e $-V_{CC}$
2. [[Impedenza]] di ingresso infinita: questa caratteristica comporta la possibilità di trascurare qualsiasi corrente sui terminali di ingresso.
3. Impedenza di uscita nulla: È un valore sufficientemente basso ($100 \ohm$) che permette l'uscita di correnti relativamente elevate.

Essendo un elemento attivo necessita di essere alimentato da un generatore di tensione. 

### Modello Equivalente

![[1280px-Op-Amp_Internal.svg.png]]

La tensione differenziale $v_{in} = v^- - v^+$ viene prelevata dall'amplificatore, moltiplicata per il guadagno e messa in uscita sul terminale $v_{out}$ 

$$
v_{out} = G_{v_{in}} v_{in} = G_{v_{in}}(v^--v^+)
$$

### Caratteristiche

Un normale amplificatore ha un terminale di ingresso, ed un terminale di uscita. La grandezza fondamentale è il guadagno di amplificazione, definito dal rapporto tra il segnale di uscita e il segnale di ingresso

$$
A =\frac{U}{I} \qquad U = I \cdot A
$$

In questo caso non è un singolo segnale in ingresso ad essere amplificato, ma, proprio come gli [[Amplificatori differenziali|amplificatori differenziali]] viene amplificata una differenza di potenziale applicata $V_{d}$, motivo per il quale un OP-AMP ha due terminali. Il segnale di uscita è $V_{u}$. Le formule precedentemente scritte diventano:

$$
A = \frac{V_{u}}{V_{d}} \qquad V_{u} = V_{d} \cdot A
$$

Da notare che l'amplificatore operazionale può essere utilizzato come amplificatore standard in quanto basta attaccare la corrente ad uno dei due terminali e l'altro metterlo a massa.

### Guadagno

Il guadagno di un amplificatore operazionale può essere:

- Ad anello aperto $A_{OL}$ (senza feedback)
- Ad anello chiuso $A_{CL}$(con feedback)

Entrambe le tipologie sono legate da questa relazione: 

$$
A_{CL} = \frac{A_{OL}}{1+A_{OL}\beta}
$$

Dove $\beta$ è il fattore di feedback, ovvero la frazione del segnale di uscita che viene retro-azionata all'ingresso. 

Anche per il calcolo di $\beta$ ci sono due considerazioni da fare

- Configurazione invertente

$$
\beta = \frac{R_{i}}{R_{i}+R_{f}}
$$

- Configurazione non invertente

$$
\beta = \frac{R_{g}}{R_{g}+R_{f}}
$$

### Impedenze

#### Configurazione Ad Anello Aperto

Le impedenze sono determinate dalle caratteristiche intrinseche del rispositivo

1. Impedenza di ingresso $Z_{in}$ tipicamente molto alta perché l'op-amp è progettato per avere un'alta resistenza di ingresso per minimizzare il carico sui circuiti di segnale
2. Impedenza di uscita $Z_{out}:$ Tipicamente moderata o bassa ma non bassa come quando il dispositivo è configurato ad anello chiuso

#### Configurazione Ad Anello Chiuso

1. **Impedenza di ingresso $Z_{in}$** 
	- Configurazione Non invertente: 
	- Configurazione invertente:

```tikz

```tikz \usepackage{circuitikz} \begin{document} \begin{circuitikz}[american, voltage shift=0.5] \draw (0,0) to[isource, l=$I_0$, v=$V_0$] (0,3) to[short, -*, i=$I_0$] (2,3) to[R=$R_1$, i>_=$i_1$] (2,0) -- (0,0); \draw (2,3) -- (4,3) to[R=$R_2$, i>_=$i_2$] (4,0) to[short, -*] (2,0); \end{circuitikz} \end{document} ```
```tikz

\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5] 
\draw (0,0) to[isource, l=$I_0$, v=$V_0$] (0,3) to[short, -*, i=$I_0$] (2,3) to[R=$R_1$, i>_=$i_1$] (2,0) -- (0,0); 
\draw (2,3) -- (4,3) to[R=$R_2$, i>_=$i_2$] (4,0) to[short, -*] (2,0); \end{circuitikz} 
\end{document}
```