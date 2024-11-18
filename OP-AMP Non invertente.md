#elettronica #elettrotecnica #secondo-anno 

## Amplificatore Operazionale Non Invertente

È una configurazione circuitale che implementa un amplificatore operazionale in modo da ottenere in uscita una tensione positiva. 

```tikz
\usepackage{circuitikz} 
\begin{document}
\begin{circuitikz}

\tikzstyle{every node}=[font=\normalsize]

\draw (15,17.75) node[op amp,scale=1] (opamp2) {};
\draw (opamp2.+) to[short] (13.5,17.25);
\draw  (opamp2.-) to[short] (13.5,18.25);
\draw (16.2,17.75) to[short](16.5,17.75);

\draw (13.5,19.75) to[R,l={ \normalsize $R_2$}] (16.5,19.75);

\draw (13.5,19.75) to[short] (13.5,18.25);

\draw (16.5,19.75) to[short] (16.5,17.75);

\draw (13.5,18.25) to[R,l={ \normalsize $R_1$}] (10.5,18.25);

\draw (10.5,18.25) to (10.5,17) node[ground]{};

\draw (13.5,17.25) to[american voltage source,l={ \normalsize $V_i$}] (13.5,15.25);

\draw (13.5,15.25) to (13.5,14.5) node[ground]{};

\draw (16.5,17.75) to[short, -o] (17.5,17.75) node {$V_o$};

\end{circuitikz}
\end{document}
```

- Alimentazione collegata al terminale non invertente
- Se la resistenza $R_{2} = 0$ oppure $R_{1} = \infty$ allora il guadagno di tensione sarà pari a 1 

$$
\begin{align}
v_{i} + R_{1}i_{1} &= 0 \\
v_{i} - R_{2}i_{2} - v_{o} &= 0
\end{align}
$$

$$
i_{1} = i_{2}
$$

$$
i_{1} = -\frac{v_{i}}{R_{1}}
$$

$$
v_{i} - R_{2}\left( -\frac{v_{i}}{R_{1}} \right) - v_{o}= 0
$$

$$
v_{o} = \left(\frac{\not v_{i}}{\not v_{i}} + \frac{\frac{R_{2}}{R_{1}}\not v_{i}}{\not v_{i}}\right)v_{i}
$$

$$
v_{o} = \left(1 + \frac{R_{2}}{R_{1}}\right) v_{i}
$$

Il guadagno si calcola come..

$$
A_{v} = \frac{v_{o}}{v_{i}} = \frac{\left(1 + \frac{R_{2}}{R_{1}}\right) \not v_{i}}{\not v_{i}}  = \left(1 + \frac{R_{2}}{R_{1}}\right)
$$
