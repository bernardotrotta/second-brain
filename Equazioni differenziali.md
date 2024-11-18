#analisi-matematica 

## Equazioni Differenziali

Sono equazioni in cui l'incognita è una funzione e in cui sono presenti una o più derivate della funzione incognita.

$$
\begin{align}
f'(x)+f(x) = x \tag 1\\
y'+y = x
\end{align}
$$

Risolvere una equazione differenziale significa trovare la funzione o le funzioni che soddisfino l'equazione. 

Non esiste però un metodo generale che permetta la risoluzione di una equazione differenziale, è necessario analizzare caso per caso. 

### Classificazione

- **Ordine:** massimo ordine di derivazione che compare.

### Forma Normale

Una equazione differenziale si dice in **forma normale** quando è data nella seguente forma:

$$
y^{(n)} = f(x, y, y', y''(x),\dots,y^{(n-1)})
$$

### Risoluzione di Una Equazione Differenziale

$$
y' = x
$$

Per risolvere questa equazione differenziale, devo trovare tutte le $y =f(x)$ la cui derivata prima corrisponda ad $x$.

$$
\int f'(x)dx = \int xdx  = \frac{x^2}{2}
+c
$$

 Naturalmente le soluzioni sono infinte, variano in fatti in base al parametro $c$ della soluzione generale appena trovata. 

#### Esempio

$$
f'(x)=2-\sqrt{ f(x) }
$$

### Soluzioni

#### Tipologia 1

$$
y' = f(x)
$$ 

Per risolvere questo tipo di equazione differenziale è sufficiente integrare: 

$$
y = \int f(x) \, dx = F(x) + c
$$

##### Esempio

###### Equazione Differenziale

$$
y' = 3e^{2x}
$$ 

###### Soluzione

$$
y = \int 3e^{2x} \, dx = \frac{3e^{2x}}{2} + c
$$

#### Tipologia 2

$$
y''(x)= f(x)
$$

In questo caso è sufficiente integrare due volte

$$
y' = \int f(x)dx = F(x)+c_{1}
$$

$$
y = \int F(x)+c_{1}dx = \int F(x)dx+ c_1x+c_{2}
$$

##### Esempio

$$
y''=2-\cos x
$$

###### Soluzione

$$
y'= \int 2-\cos xdx = 2x-\sin (x)+c_{1}
$$

$$
y = \int 2x-\sin(x)dx = x^2 + \cos (x) + c_{1}x+c_{2}
$$

### Problema di Cauchy

Condizioni iniziali

$$
\begin{cases}
y'= -e^{-x} \\ \\
y(0) = 3
\end{cases}
$$

Si trova la soluzione generale e si sostituisce il problema. 

$$
y = \int-e^{-x}dx= e^{-x}+c
$$

$$
3 = e^{-0}+c \qquad 3= 1+c \qquad c= 2
$$
