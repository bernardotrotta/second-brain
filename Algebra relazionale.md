#basi-di-dati #secondo-anno 

## Algebra Relazionale

### Premessa

Prima di entrare nel discorso dell'algebra relazionale è necessario conoscere bene il concetto di tupla e attributo. 

#### Tupla

**Definizione:** se una relazione viene identificata come una tabella, una tupla è una singola riga della tabella. 

**Esempio:**

| ID  | Nome  | Cognome | Età |
| --- | ----- | ------- | --- |
| 1   | Marco | Rossi   | 20  |
| 2   | Laura | Bianchi | 22  |
| 3   | Luca  | Verdi   | 19  |

#### Attributo

**Definizione:** se una relazione viene identificata come una tabella, una tupla è una singola colona della tabella.

**Esempio:**

### Introduzione

**Definizione:** L'algebra relazionale è un linguaggio procedurale, utilizzato nell'ambito delle basi di dati per costruire interrogazioni, per questo motivo è anche detto "Linguaggio di interrogazione".

### Operatori

Gli operatori sono funzioni che operano su una o più relazioni, per produrre una nuova relazione. Si dividono in:

- Operatori insiemistici
- Operatori specifici

#### Operatori Insiemistici

Sono operatori presi in prestito dalla teoria degli insiemi e permettono di combinare e manipolare, due o più insiemi di tuple provenienti da diverse relazioni. Gli operatori insiemistici sono:

- Unione
- Intersezione
- Differenza

Ha senso applicare gli operatori insiemistici solo su tuple con stessi attributi

| Matricola | Cognome | Età |
| --------- | ------- | --- |
| 7274      | Rossi   | 37  |
| 7432      | Neri    | 39  |
| 9824      | Verdi   | 28  |

| Matricola | Cognome | Età |
| --------- | ------- | --- |
| 9297      | Neri    | 56  |
| 7432      | Neri    | 39  |
| 9824      | Verdi   | 38  |

##### Unione

L'unione $\cup$ è una relazione su $X$ (insieme di attributi) caratterizzata da:

- Tuple che appartengono a $r_1$
- Tuple che appartengono a $r_2$
- Tuple che appartengono sia a $r_1$ che a $r_2$

| Matricola | Cognome | Età |
| --------- | ------- | --- |
| 7274      | Rossi   | 37  |
| 7432      | Neri    | 39  |
| 9824      | Verdi   | 28  |
| 9297      | Neri    | 56  |

##### Intersezione

L'intersezione $\cap$ una relazione su $X$ caratterizzata da:

- Tuple che appartengono contemporaneamente a $r_1$ e $r_2$

| Matricola | Cognome | Età |
| --------- | ------- | --- |
| 7432      | Neri    | 39  |
| 9824      | Verdi   | 28  |

##### Differenza

La differenza $-$ di $r_1(X)$ e $r_2(X)$ è una relazione su $X$ caratterizzata da:

- Tuple che appartengono ad $r_1$ e non appartengono ad $r_2$.

| Matricola | Cognome | Età |
| --------- | ------- | --- |
| 7274      | Rossi   | 37  |

#### Operatori Specifici

Sono operatori propri dell'algebra relazionale, più specifici di quelli insiemistici e che permettono di compiere operazioni più avanzate rispetto ai precedenti.

1. Ri-denominazione
2. [[Selezione (Algebra Relazionale)]]
3. [[Proiezione (Algebra Relazionale)]]	
4. [[Join Naturale (Algebra Relazionale)]]
		1. Join Naturale
		2. Prodotto cartesiano
		3. Theta Join

##### Ridenominazione

Cambia i nomi degli attributi a seconda delle necessità, al fine di superare le limitazioni imposte agli operatori insiemistici.

| Padre  | Figlio   |
| ------ | -------- |
| Adamo  | Caino    |
| Adamo  | Abele    |
| Abramo | Isacco   |
| Isacco | Giacobbe |

$$
\Large\rho_{\text{nuovo nome} \leftarrow {\text{vecchio nome}}}
$$

$$
\Large\rho_{\text{Genitore} \leftarrow {\text{Padre}}}
$$

| Genitore | Figlio   |
| -------- | -------- |
| Adamo    | Caino    |
| Adamo    | Abele    |
| Abramo   | Isacco   |
| Isacco   | Giacobbe |

> [!info]
 *Definizione generale*: sia $r$ una relazione definita su un insieme di attributi $X$ e sia $Y$ un altro insieme di attributi con la stessa [[Modello Relazionale#Prodotto cartesiano|cardinalità]] (numero di attributi). Inoltre siano $A_1, A_2, \dots, A_k$ e $B_1, B_2, \dots, B_k$ rispettivamente un ordinamento per gli attributi in $X$ e un ordinamento per gli attributi in $Y$. Allora la ridenominazione:

> $$
> \Large\rho_{B_1, B_2, \dots, B_k \leftarrow A_2, \dots, A_k }
> $$ 
> 
> contiene una tupla $t'$ per ciascuna tupla $t$ in $r$, definita come segue: $t'$ è una tupla su $Y$ e $t'[B_i] = t[A_i]$ per $i = 1, \cdots, k$ 

##### Selezione

Operatore che produce un sottoinsieme delle tuple, su tutti gli attributi.  
È considerabile una decomposizione orizzontale in quanto lavora sulle righe.

> [!info]  
> Data una relazione $r(X)$, una formula proposizionale F su $X$ è una formula ottenuta combinando, con i connettivi $\vee$(or), $\wedge$(and) e $\neg$(not), condizioni atomiche del tipo $A \theta B$ o $A \theta C$
> - $\theta$ è un operatore di confronto
> - $A$ e $B$ sono attributi in $X$
> - $c$ è una costante compatibile con il dominio di $A$

##### Esempio

| Cognome | Nome     | Età | Stipendio |
| ------- | -------- | --- | --------- |
| Rossi   | Mario    | 25  | 2000,00   |
| Neri    | Luca     | 40  | 3000,00   |
| Verdi   | Nico     | 36  | 4500,00   |
| Rossi   | Giovanni | 40  | 3900,00   |

$\Large\sigma_{\text{Età}>30 \wedge \text{Stipendio} > 4000}$

| Cognome | Nome     | Età | Stipendio |
| ------- | -------- | --- | --------- |
| Verdi   | Nico     | 36  | 4500,00   |

##### Proiezione

La proiezione è un operatore unario ortogonale dell'algebra relazionale che seleziona alcuni attributi (colonne) di una relazione (tabella). Il simbolo della proiezione è la pi greco $\pi$ con in pedice la lista degli attributi e tra parentesi il nome della relazione

$$
\pi_{\text{Attributi}}(\text{Relazione})
$$

∏attributi(relazione)∏𝑎𝑡𝑡𝑟𝑖𝑏𝑢𝑡𝑖(𝑟𝑒𝑙𝑎𝑧𝑖𝑜𝑛𝑒)oppure PROJPROJattributi(relazione)

Anche nella proiezione la cardinalità varia. Per la gestione dei duplicati.
