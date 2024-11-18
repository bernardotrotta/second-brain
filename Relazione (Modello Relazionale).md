#basi-di-dati #modello-relazionale #secondo-anno 

## Definizione

Una relazione è definita come il [[Prodotto cartesiano|prodotto cartesiano]] tra $n$ insiemi, è un concetto mutato dalla definizione matematica della teoria degli insiemi.

## Esempio

Dati due insiemi $D_1$ e $D_2$, tali che:

$$
\begin{align}
D_1 &= \{\text{cubo, cono}\} \\
D_2 &= \{\text{rosso, verde, blu}\}
\end{align}
$$

e sia il loro prodotto cartesiano dato da:

$$
\begin{align}
D_1 \times D_2 =  \\
\{ 
&(cubo, rosso), \\
&(cubo, verde), \\
&(cono, verde), \\
&(cubo, blu), \\
&(cono, blu) \}
\end{align} $$
, una possibile relazione può essere $A = \{(cubo,rosso),(cono,rosso),(cubo,blu)\}$

- L'operazione è estendibile ad $n$ insieme, di conseguenza anche le relazioni saranno definite tra $n$ insiemi.
- In una rappresentazione tabellare, ogni riga è detta tupla o n-upla, dove $n$ rappresenta il grado del prodotto cartesiano
- **Cardinalità:** numero di tuple della tabella
- Un insieme può apparire più volte in una relazione

| $D_1$         | $D_2$   |
| ------------- | ------- |
| $\text{cubo}$ | $rosso$ |
| $cono$        | $rosso$ |
| $cubo$        | $blu$   |

- **Definizione 1**: una relazione è definita come il prodotto cartesiano fra $n$ insiemi, è un concetto mutuato dalla definizione di relazione matematica della teoria degli insiemi;
- **Definizione 2:** insieme di tuple definite sullo schema della relazione;