## Codifica

#fondamenti-di-informatica #primo-anno

---

### Premessa

- Una grandezza può essere rappresentata in due forme: digitale ed analogica

| Grandezza Digitale                    | Grandezza Analogica                  |
| ------------------------------------- | ------------------------------------ |
| Assume valori da un insimeme continuo | Assume valori da un insieme discreto |

- **Codice:** è un sistema basato su **simboli** e serve per rappresentare informazioni 
- L'insieme dei simboli $s$ contenuti in un codice è detto **alfabeto** $A$. $s \in A$
- **Cardinalità del codice:** è il numero di simboli in un alfabeto;
- L'insieme infinito di tutte le combinazioni di simboli di un alfabeto viene indicato con $s \in A^*$;
- **Stringa:** Una stringa è una sequenza di simboli; 
- **Linguaggio:** un insieme di stringhe definite da qualche regola, formalmente è sottoinsieme di $A^*$

---

### Codifica

- Una **codifica** definisce le regole di corrispondenza per passare da un certo codice ad un altro
---

### Notazione Posizionale

- Ciascuna cifra ha un valore che dipende dalla sua posizione

$$
N = c_n \cdot base^n
$$

- $587_{10} = 7 \cdot 10^0 + 8 \cdot 10^1 + 5 \cdot 10^2 = 7 + 80 + 500 = 587$
- $(110)_2 = 0 \cdot 2^0 + 1 \cdot 2^1 + 1 \cdot 2^0 = 0 + 2 + 4 = 6$ 
---

### Codice Binario

- È un codice posizionale in base 2 e fu inventato da [[Gottfried Wilhelm von Leibniz]] nel lontano 1700
- **Bit**: singolo elemento di una sequenza binaria, può essere 0 o 1
- **Nibble**: sequenza di *4 bit*
- **Byte**: sequenza di *8 bit*
---

#### Conversione da Decimale a Binario

1. Si divide il numero per 2
2. Si scrivono i resti a partire dal basso
3. 375 in binario è 101110111

| 375 / 2 | Resto |
| ------- | ----- |
| 187     | 1     |
| 93      | 1     |
| 46      | 1     |
| 23      | 0     |
| 11      | 1     |
| 5       | 1     |
| 2       | 1     |
| 1       | 0     |
| 0       | 1     |

#### Conversione da Binario a Decimale

1. Si usa la notazione posizionale e si eseguono i calcoli

$$
101110111_2 = 1 \cdot 2^8 + 1 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 + 1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0 = 256 + 64 + 32 + 16 + 4 + 2 + 1
$$

2. Per i numeri decimale si faal somma delle potenze negative di 2

> Per rappresentare un numero naturale in binario occorrono $k$ bit con $k \space | \space 2^k > n$. Un calcolatore assegna un numero fisso di bit da utilizzare in base alle esigenze, se si sfora questo numero si parla di *underflow* oppure di *overflow*

I numeri binari godono anache loro delle regolari operaazioni algbriche, basta ricordarsi che

- 1 + 1 = 10
- 1 + 1 + 1 = 11

Numero massimo di combinazioni possibili avendo una base e numero limitato di bit

Avendo la possibilità di rappresentare 0 con dito aperto e 1 con dito chiuso ho 2 stati per dito

avendo 10 dita posso rappresentare $2^{10}$ combinazioni diverse e quindi numeri che vanno da 0 a 1023

### Rappresentazione Numeri Negativi

#### Modulo e Segno

#### Complemento a 2

### Rappresentazione Numeri Reali

#### Virgola Fissa

#### Virgola Mobile

[[Unicode]]

[[IEEE 754]]

[[Rappresentazione di documenti]]

[[Digitalizzazione delle immagini]]

[[Audio digitale]]