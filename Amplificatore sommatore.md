#elettronica #elettrotecnica #secondo-anno

## Amplificatore Sommatore

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}

\draw (23,25) node[op amp,scale=1] (opamp2) {};
\draw (opamp2.+) to[short] (21.5,24.5);
\draw  (opamp2.-) to[short] (21.5,25.5);
\draw (24.2,25) to[short](24.5,25);
\draw (21.5,26.5) to[R,l={ \normalsize $R_f$}] (24.5,26.5);
\draw [](21.5,26.5) to[short] (21.5,25.5);
\draw [](24.5,26.5) to[short] (24.5,25);
\draw (21.5,24.5) to (21.5,23.5) node[ground]{};
\draw[] (21.5,25.5) to[short] (20.5,25.5);
\draw [](20.5,25.5) to[short] (20.5,27);
\draw [](20.5,25.5) to[short] (20.5,24);
\draw (20.5,24) to[R,l={ \normalsize $R_3$}] (17.5,24);
\draw (20.5,25.5) to[R,l={ \normalsize $R_2$}] (17.5,25.5);
\draw (20.5,27) to[R,l={ \normalsize $R_1$}] (17.5,27);
\draw [](17.5,27) to[short, -o] (17,27) node {$v_1$};
\draw [](17.75,25.5) to[short, -o] (17,25.5) node {$v_2$};
\draw [](17.5,24) to[short, -o] (17,24) node {$v_3$};
\draw [](24.5,25) to[short, -o] (25,25) node {$v_o$};

\end{circuitikz}
\end{document}
```

Applicando il principio di sovrapposizione degli effetti, scrivo le KVL considerando i relativi generatori accesi.

$$
\begin{cases}v_1-R_1i_1=0 \\ v_2-R_2i_2=0\\ v_3-R_3i_3=0\end{cases}
$$

Scrivo la KCL per il nodo collegato al terminale invertente:

$$
i_{1}+i_{2}+i_{3} = i_{f}
$$

Sostituisco con le espressioni delle relative correnti ricavate dalla KVL

$$
\frac{v_1}{R_1}+\frac{v_2}{R_2}+\frac{v_3}{R_3}=i_f
$$

Scrivo la KVL per la maglia di retroazione:

$$
v^{-}-R_{f}i_{f}-v_{o}
$$

Considerando l'amplificatore come ideale, abbiamo la condizione di cortocircuito virtuale, 

$$
v^- = v^+ = 0
$$

Risolvo per $v_{o}$ e sostituisco.

$$
v_{o}=-R_{f}i_{f}=-R_{f}\left(v_1\frac{1}{R_{1}}+v_2\frac{1}{R_{2}}+v_3\frac{1}{R_{3}}\right)
$$

$$
v_{o} = - \left(\frac{R_{f}}{R_{1}}v_{1}+\frac{R_{f}}{R_{2}}v_{2}+\frac{R_{f}}{R_{3}}v_{3}\right)
$$
