#elettronica #controlli-automatici #secondo-anno 

## Effetti Della Retroazione

### Introduzione

Le configurazioni di un sistema, dal punto di vista del rapporto tra ingresso e uscita, possono essere di due tipi: 

- Ad anello aperto: non viene applicato alcun controllo sul sistema
- Controllo in retroazione o ad anello chiuso: viene influito l'ingresso in base alla variabile di uscita.

![[aperta-retroazione 1.png]]

Il blocco di ingresso esegue una somma vettoriale

### Grandezze

Il segnale applicato ingresso viene indicato con $X_{s}$

Il segnale in uscita viene indicato con $X_{u}$

Nel blocco di retroazione, viene introdotto il segnale $X_{u}$, questo viene elaborato e trasformato in un segnale di retroazione $X_{r}$ ed inviato al blocco di ingresso, che esegue la somma vettoriale tra $X_s$ e $X_{r}$. Qui si verificano due casi:

- Se $X_{i} < X_{s}$ la retroazione è negativa;
- Se $X_{i}>X_{r}$ la retroazione è positiva; 

### Guadagno

Guadagno del blocco A:

$$
A = \frac{X_{u}}{X_{i}}
$$

Guadagno del blocco B:

$$
B = \frac{X_{r}}{X_{u}}
$$

Guadagno dell'intero sistema: 

$$
A_{r} = \frac{X_{u}}{X_{s}}
$$

```mermaid
graph TD
	A[R(s)] --> B[+]
```

Il guadagno totale è dato dai seguenti passaggi: 

$$
\begin{align}

X_{i} = X_{s} - X_{r} &&&&& X_{r} = X_{u}B  \\

\end{align}
$$

$$
\begin{align} \\

X_{u} &= X_{i}A  \\
X_{u} &= (X_{s}-X_{r})A  \\
X_{u} &= AX_{s}-AX_{r} \\
X_{u} &=AX_{s}-A(X_{u}B)  \\
X_{u} &=AX_{s}-X_{u}BA  \\
X_{u}+X_{u}BA &= AX_{S}  \\ 
X_{u}(\frac{\not X_{u}}{\not X_{u}}+\frac{\not X_{u}}{\not X_{u}}BA) &= X_{s}A \\
X_{u} &= \frac{AX_{s}}{1+BA} \\
A_{r} = \frac{X_{u}}{X_{s}} &= \frac{A}{1+BA}
\end{align}
$$