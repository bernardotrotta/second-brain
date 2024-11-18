## Sistema Binario

Il sistema binario è un sistema di rappresentazione numerico di tipo posizionale in base 2. Utilizza due simboli (0-1). Vede la maggior parte delle sue applicazioni in logica booleana e in generale nel mondo dell'informatica.

Bit: Singolo elemento di una sequenza binaria (0-1).

Nibble: Sequenza di 4 bit.

Byte: Sequenza di 8 bit. 

### Conversione da Base 10 a Base 2

1. Si esegue una divisione per 2 del numero considerato.
2. Si osserva il resto della divisione.
3. Si esegue una divisione per 2 del quoziente ottenuto dalla precedente divisione, fino a quando il quoziente non diventa zero.

Il numero binario sarà formato dai resti letti dall'ultimo ottenuto fino al primo

#### Esempio

| Numero      | Resto |
| ----------- | ----- |
| 375/2 = 187 | 1     |
| 187/2 = 93  | 1     |
| 93/2 = 46   | 1     |
| 46/2 = 23   | 0     |
| 23/2 = 11   | 1     |
| 11/2 = 5    | 1     |
| 5/2 = 2     | 1     |
| 2/2 = 1     | 0     |
| 1/2 = 0     | 1     |

Il numero binario ottenuto è 101110111 

### Conversione da Base 2 a Base 10

Si utilizza la [[Sistemi di numerazione#Notazione Posizionale|notazione posizionale]]

$$
\begin{align}
101110111_2 &= 1 \cdot 2^8 + 1 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 + 1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0  \\
&= 256 + 64 + 32 + 16 + 4 + 2 + 1 \\
&= 375 
\end{align}
$$

### Combinazioni

Numero massimo di combinazioni possibili avendo una base e numero limitato di bit

Avendo la possibilità di rappresentare 0 con dito aperto e 1 con dito chiuso ho 2 stati per dito.

Con 10 dita posso rappresentare $2^{10}$ combinazioni diverse e quindi numeri che vanno da 0 a 1023