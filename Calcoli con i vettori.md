#geometria-e-algebra-lineare #primo-anno 

## Definizione 1

Per ogni vettore $v \in V$ si ha che $0_k \cdot v = 0_v$

### Esempio

Scegliamo $k = \mathbb{Q}$ e consideriamo $V = \mathbb{Q}^3$. Sia $v = \begin{bmatrix} x_{1} \\ x_{2} \\ x_{3} \end{bmatrix}$, e consideriamo $0 \cdot v$. 

$$
0 \cdot v = 0 \cdot \begin{bmatrix} x_{1} \\ x_{2} \\ x_{3} \end{bmatrix} = \begin{bmatrix}
0 \cdot x_{1} \\
0 \cdot x_{2} \\
0 \cdot x_{3}
\end{bmatrix}
= 0
$$

### Dimostrazione

$$
0_{k} \cdot v = [0_{k}= 0_{k}+0_{k}] = (0_{k}+0_{k} \cdot v) = [(v)] = 0_{k} \cdot v + 0_{k} \cdot v
$$

Sommiamo ad ambo i membri $-(0_{k} \cdot v)$ e troviamo:

$$
0_{v} = 0_{k} \cdot v + 0_{k} \cdot v - 0_{k} \cdot v = 0_{k} \cdot v
$$

## Definizione 2

Per ogni $\lambda \in k$ si ha che $\lambda \cdot 0_v = 0_v$

### Esempio

Scegliamo k = C e v = C^4. Allora per ogni \lambda \in C si ha che

$$
\lambda \cdot 0
= \lambda \cdot \begin{bmatrix}
0 \\
0 \\
0 \\
0 \\
\end{bmatrix}
= \begin{bmatrix}
\lambda 0 \\
\lambda 0 \\
\lambda 0 \\
\lambda 0
\end{bmatrix} = 
\begin{bmatrix}
0 \\
0 \\
0 \\
0
\end{bmatrix}
= 0
$$

### Dimostrazione

$$
\lambda \cdot 0_{v} = \lambda \cdot (0_{v}+0_{v}) = [(v_{i})] = \lambda + 0_{v} + \lambda + 0_{v}  $$

## Definizione 3

Se $\lambda \in k$ e v \in V sono tali che $\lambda \cdot v = 0_v$, allora $\lambda = 0_k$ oppure $v = 0_v$
$$

### Esempio

### Dimostrazione