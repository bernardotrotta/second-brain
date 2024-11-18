#elettronica #elettrotecnica #secondo-anno 

## Amplificatore Operazionale Invertente

È una configurazione circuitale che implementa un amplificatore operazionale in modo da prelevare una tensione di ingresso e cambiarne di segno. 

![[inverting-amplifier-circuit.webp]]

- Ingresso non invertente collegato a massa.
- Tensione di ingresso collegata all'ingresso invertente tramite un resistore R1
- Collegamento tra ingresso e uscita mediante un resistore di reazione.

$$
\begin{align}
v_{i} - R_{1}i_{1}-v_{1} &= 0 \\
v_{1}-R_2i_{2}-v_0 &= 0 \\
\end{align}
$$

Supponendo l'amplificatore ideale, ho il cortocircuito virtuale, per cui $v_{1} = v_{2}$. Inoltre, non essendoci corrente nei terminali di ingresso, è possibile considerare le due resistenze come attraversate dalla stessa corrente. $i_{1} = i_{2}$

Dalle KVL ottengo:

$$
\begin{align}
v_{i} - R_{1}i_{1} - 0 &= 0 \\
 0-R_{2}i_{1} - v_{0} &= 0 \\
\end{align}
$$

Ricavo l'espressione della corrente $i_1$

$$
i_{1} = \frac{v_{i}}{R_{1}}
$$

$$
-\frac{R_{2}v_{i}}{R_{i}} -v_{0} = 0
$$

$$
v_{0} = -\frac{R_{2}}{R_{1}}v_{i}
$$

Il guadagno di tensione è dato da $A_{v} = \dfrac{v_0}{v_{i}}$ 

$$
A_{v} = -\frac{\frac{R_{2}}{R_{1}}\not     v_{i}}{\not v_{i}}
$$