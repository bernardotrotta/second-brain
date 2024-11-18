#secondo-anno #modello-relazionale #basi-di-dati 

## Definizione

Produce una nuova relazione correlando attributi con nome diverso, nella condizione in cui $X_1X_{2} = \emptyset$  

> [!theorem]
> Siano $X_1$​ e $X_2$​ due insiemi di attributi e siano $R_{1}(X_{1})$ e $R_2(X_2)$ due schemi di relazione basati sui rispettivi insiemi di attributi.
> Il theta join $r_1 \bowtie_{\theta} r_2$​ di $R_1(X_1)$ e $R_2(X_2)$ è una relazione definita su $X_1 \cup X_2$ (cioè l'unione degli insiemi $X_1​$ e $X_2$) dove $\theta$ è una condizione qualsiasi esprimibile in termini di confronto (ad esempio, $=$, $<$, $>$, $\leq$, $\geq$, $\neq$).
> Formalmente, $r_1 \bowtie_{\theta} r_2$ è l'insieme delle tuple $t$ tali che esistano tuple $t_1 \in r_1$ e $t_2 \in r_2$ che soddisfano la condizione $\theta$.
> $r_{1} \bowtie_{F} r_{2} = \sigma_{F}(r_{1}\bowtie r_{2})$

- Se $F$ è una condizione di uguaglianza fra un attributo della prima relazione e uno della seconda, allora siamo in presenza di un *equi-join*
- È basato sui *valori*;
- Consente di associare tuple attraverso la corrispondenza tra attributi arbitrari e non necessariamente omonimi;
- Consente di basare l'associazione su una condizione arbitraria e non solo su una condizione di uguaglianza

## Esempio

$$
\text{JOIN}_{\text{Reparto} = \text{Codice}}
$$

![[Screenshot 2024-05-13 alle 21.10.18.png]]

Esistono due modi per ottenere questo stesso risultato, infatti potrei combinare l'uso della ridenominazione + un join naturale, oppure, utilizzare una proiezione per rimuovere la tabella in comune.

- Il theta join e il join naturale escludono le tuple dangling, quindi nella relazione si perderà l'informazione che si aveva nelle tabelle di partenza