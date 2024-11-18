#geometria-e-algebra-lineare #secondo-anno 

## Definizione

Sia $V$ uno spazio vettoriale su k. Sia $S \subseteq V$ un sottoinsieme. Diciamo che S è un sottospazio vettoriale di V se si verifica che:

1. $0_v \in S$;
2. Se $v, w \in S$ allora $v + w \in S$;
3. Se $\lambda \in k$ e $v \in S$ allora $\lambda v \in S$;

La (2) e la (3) si esprimono anche dicendo che $S$ è chiuso rispetto alle operazioni di somma (2) e di prodotto con lo scalare (3). 

Dato un k-spazio vettoriale $V$ e un suo sottospazio $S$, si ha che $S$ è in modo naturale un k-spazio vettoriale.

## Esempio

### Esempio 1

Sia $V$ un k-spazio vettoriale qualsiasi. Allora:

1. $S = V$ definisce un sottospazio
2. $S = {0_v}$ definisce un sottospazio (sottospazio banale)

### Esempio 2

$\mathbb{R}[x]_{\leq d}$ è un sottospazio di $\mathbb{R} [x]$.

### Esempio 3

Consideriamo in $\mathbb{R} ^3$ il vettore $v =\begin{bmatrix} 3 \\ 2 \\ 1\end{bmatrix}$ e poniamo $S=v^{\perp}=\{w\in\mathbb{R}^{3}|<u,v>=0\}$. 

Dimostriamo che è un sottospazio:

- $$0 \in S \implies <0,v >  \ =  \ <\begin{bmatrix}

0 \\

0 \\

0 \\

\end{bmatrix},

\begin{bmatrix}

3 \\

2 \\

1 \\

\end{bmatrix}>

= 0

$$
- Se $u,w \in S$ è vero che $u+w \in S$?
$$

\begin{align} <u+w,v> &= <u+w, \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix}> \\

&=<u, \begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix}>+<w,\begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix}> \\

&=

0 +0 \\

&= 0 \end{align}

$$
- Se $u \in S$ e $\lambda \in \mathbb{R}$, è vero che $\lambda u \in S$?
$$

\begin{align}

<\lambda u, v> &= <\lambda u, \begin{bmatrix} 3 \\ 2 \\ 1\end{bmatrix}> \\

&= \lambda<u,\begin{bmatrix} 3 \\ 2 \\ 1\end{bmatrix}> \\

&= \lambda \cdot 0 \\

&= 0

\end{align}

$$
### Esempio 4

Considero in $\mathbb{R}^2$ il sottoinsieme: 
$$

S'= \left\{ \begin{bmatrix}

x \\

y

\end{bmatrix} \in R^2 \ |\ 3x-y = 0 \right\}

$$
In questo caso abbiamo un sottospazio, infatti sono valide entrambe le proprietà: 
$$

0 \in S'

$$
Se $\begin{bmatrix}x_{1}\\y_{1}\end{bmatrix},\begin{bmatrix}x_{2}\\y_{2}\end{bmatrix} \in S'$, allora ho che:
$$

\begin{align}

3x - y &= 3(x_{1} + x_{2}) - (y_{1} + y_{2}) \\

	   &= 3x_{1} + 3x_2 - y_{1} - y_{2} \\

\Rightarrow \quad 3x_{1} + 3x_{2} &= y_{1} + y_{2} 

\end{align}

$$
 3. Se $\lambda \in k$ e $v \in S$ allora $\lambda v \in S$:
		Con $v = \begin{bmatrix}x\\y\end{bmatrix}$ e $\lambda \in \mathbb{R}$ si ha che $y = 3x$ 

### Esempio 4

## Controesempio

### Controesempio 1

Consideriamo in $\mathbb{R}^2$ il sottoinsieme:
$$

S = \left\{ \begin{bmatrix}

x \\

y \\

\end{bmatrix}

\in \mathbb{R} \ | \ 3x-y = 5\right\}

$$
Questo non è un sottospazio di $\mathbb{R}^2$ poiché (ad esempio) $0 \not\in S$, infatti :
$$

\begin{align}

3 \cdot 0 - 0 &= 5 \\

0 &\neq 5

\end{align}

$$
### Controesempio 2

Consideriamo ancora:
$$

T = \left\{ \begin{bmatrix} x \\ y \end{bmatrix} \in \mathbb{R}^2 \ |\ y=x^2\right\}

$$
In questo caso notiamo che $0 \in T$, infatti:
$$

0 = \begin{bmatrix}

0 \\

0

\end{bmatrix},\ 0=0^2

$$
Però se considero i punti 
$$

\begin{bmatrix}1 \\ 1\end{bmatrix}, \ \begin{bmatrix} -1 \\

1 \end{bmatrix} \in T

$$
si ha che:
$$

\begin{bmatrix}

1 \\

1

\end{bmatrix} + \begin{bmatrix}

-1 \\

1

\end{bmatrix}

= \begin{bmatrix}

0 \\

2 \\

\end{bmatrix}

\notin T$$

Infatti $0^2 = 0, \ 0 \neq 2$
