#geometria-e-algebra-lineare #primo-anno 

## Definizione

Diciamo che un insieme $V$ è uno spazio vettoriale su $k$ se su $V$ sono definite le seguenti due operazioni:

$$
+:V\times V
$$

$$
\cdot:k\times V \rightarrow V  
$$

Tali che

1. Per ogni $u,v,w$ in V si abbia $(u+v)+w = u+(v+w)$
2. Esista un elemento in $V$, che denoteremo $0v$, tale che $0v + v = v, v+0v$ per ogni $v \in V$
3. Per ogni elemento $v \in V$ esista un elemento di $V$ che denoteremo con $-v$, tale che $v+(-v) = 0v$;
4. Per ogni $v,w \in V$ si abbia che $v+w = w+v$
5. Per ogni $v \in V$ e per ogni $\lambda \mu \in k$ si abbia che $(\lambda + \mu) \cdot v = \lambda \cdot v + \mu \cdot v$
6. Per ogni $v,w$ \in $k$ e per ogni $\lambda \in k$ si abbia che $\lambda \cdot (v+w) = \lambda \cdot v + \lambda \cdot w$  
7. Per ogni $v \in V$ e $\lambda, \mu \in k$ si abbia che $(\lambda \mu) \cdot v = \lambda \cdot (\mu \cdot v)$
8. Per ogni $v in V$ si abbia che $1_k \cdot v = v$

## Esempio

### Esempio 1

Considero $V = R^n$ e su R^n considero le operazioni seguenti

$$
\begin{bmatrix}x_1\\x_2\\\vdots\\x_n\end{bmatrix}+\begin{bmatrix}y_1\\y_2\\\vdots\\y_n\end{bmatrix}=\begin{bmatrix}x_1+y_1\\x_2+y_2\\\vdots\\x_n+y_n\end{bmatrix}
$$

$$
\lambda \cdot \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix} = \begin{bmatrix}
\lambda x_{1} \\
\lambda x_{2} \\
\vdots  \\
\lambda x_{n}
\end{bmatrix} \quad ,\lambda \in \mathbb{R}
$$

Con queste operazioni abbiamo che R^n è uno spazio vettoriale su R.

### Esempio 2

Se consideriamo le operazioni componente per componente, allora anche $C^n$ è uno spazio vettoriale su $C$ e anche $Q^n$ è uno spazio vettoriale su $Q$.

### Esempio 3

Lavoriamo con $k = \mathbb{R}$ e consideriamo l'insieme $V = R[x] = \{\text{polinomi a coefficienti in R nell'indeterminata x}\}$

Se $p,q$ sono due polinomi, posso definire $p+q$.

$$
p(x) = 1+3x-9x^3
$$

$$
q(x) = 2-x^2
$$

$$
(p+q)(x) = (1+2)+(3x)-(x^2)-(9x^3)=3+3x-x^2-9x^3
$$

Se p è un polinomio e \lambda \in \mathbb{R}, posso definire \lambda p.

$p(x) = 3 - 4x + 5x^2$

$3p(x) = (3 \cdot 3) - (3 \cdot 4) x + (3 \cdot 5) x^2 = 3 - 12x + 15x^2$

Queste due operazioni rendono \mathbb{R}[x] uno spazio vettoriale su \mathbb{R}

### Esempio 4

Torniamo a lavorare su k = Q, R, C indistintamente. Chiamiamo

Mat

Date $\left.A=\left[\begin{array}{ccc}a_{11}&\cdots&a_{1n}\\\vdots&\ddots&\vdots\\a_{m1}&\cdots&a_{mn}\end{array}\right.\right]$ e $\left.B=\left[\begin{array}{ccc}b_{11}&\cdots&b_{1n}\\\vdots&\ddots&\vdots\\b_{m1}&\cdots&b_{mn}\end{array}\right.\right]$ $\lambda \in \mathbb{R}$

Posso definire $A+B$ e $\lambda A$

$$
\left.A+B=\left[\begin{array}{ccc}a+b_{11}&\cdots&a+b_{1n}\\\vdots&\ddots&\vdots\\a+b_{m1}&\cdots&a+b_{mn}\end{array}\right.\right]
$$

$$
\left.\lambda A=\left[\begin{array}{ccc} \lambda a_{11}&\cdots& \lambda a_{1n}\\\vdots&\ddots&\vdots\\ \lambda a_{m1}&\cdots& \lambda a_{mn}\end{array}\right.\right]
$$

Con queste due operazioni anche $Mat_{m,n} \in (k)$ diventa un $k-spazio$ vettoriale.

### Esempio 5

Consideriamo ora

$$
R[x]_{\leq d} = \{\text{polinomi a coefficienti reali nell'indeterminata x di grado al più d}\}
$$

Ad esempio, $R[x]_{\leq 2}$ è l'insieme di tutti i polinomi costanti di primo grado e di secondo grado

Anche tale insieme è uno spazio vettoriale su R con le stesse operazioni definite su R[x].

### Esempio 6

Abbiamo visto che C è uno spazio vettoriale su C (è l'esempio 2 con n=1). Possiamo però regalare a C anche un'altra struttura di spazio vettoriale, questa volta su R: la somma è l'usuale somma di numeri complessi, mentre il prodotto è definito nel seguente modo:

$$
\cdot: \mathbb{R} \times \mathbb{C} \longrightarrow \mathbb{C}
$$

$$
(r, a+ib) \longrightarrow r \cdot(a+ib) = (r\cdot a) + i(r\cdot b)
$$

attenzione perché avremo modo di notare che C come spazio vettoriale reale e come spazio vettoriale complesso sono differenti!

In realtà ogni spazio complesso è anche uno spazio vettoriale reale e ogni spazio vettoriale reale è anche uno spazio razionale, ma le singole proprietà cambiano radicalmente.