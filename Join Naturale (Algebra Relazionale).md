#basi-di-dati #secondo-anno  

## Definizione

Il Join (Naturale) è un operatore dell'algebra relazionale che combina dati contenuti in relazioni diverse sulla base di valori uguali in attributi dallo stesso nome.

Il risultato di un Join è costituito da una relazione basata sull'unione degli insiemi ottenuta combinando le tuple degli operandi con valori uguali sugli attributi comuni

Non ha un corrispettivo nella teoria degli insiemi.

> [!theorem]  
> Siano $X_{1}$ e $X_{2}$ due insiemi di attributi e siano $R_{1}(X_{1})$ e $R_{2}(X_{2})$ due schemi di relazione basate sui rispettivi insiemi 
> Il join naturale $r_{1} \bowtie r_{2}$ di $R_{1}(X_{1)}$ e $R_{2}(X_{2)}$ è una relazione definita su $X_1\cup X_2$ (cioè dall'unione degli insiemi $X_1$ e $X_2$)  
> 
> $$
> r_{1} \bowtie r_{2} = {t}
> $$ 

- Se tutte le tuple contribuiscono al join, questo si dice completo
- Le tuple che non contribuiscono al join si dicono dangling
- Un join vuoto è un insieme vuoto

### Proprietà

1. Il numero di tuple contenuto in $r_1 \bowtie r_2$ è compreso tra 0 e $|r_1| \cdot |r_2|$
2. Se il join è completo, allora il numero di tuple dato dal massimo tra $|r_1|$ e $|r_2|$
3. Se $X_{1}X_{2}$ contiene una chiave per $r_{2}$ allora $r_1[X_1] \bowtie r_2[X_2]$ contiene al più |r_1| tuple
4. Il join è commutativo $r_{1} \bowtie r_{2} = r_{2} \bowtie r_{1}$
5. Il join è associativo $(r_{1}\bowtie r_{2})\bowtie r_{3} = r_{1}\bowtie (r_{2}\bowtie r_{3})$

### Caratteristiche

#### Perdita di Informazioni

> [!info]  
> Date due relazioni $R_1(X_1)$ e $R_2(X_2)$, se proietto il risultato del join sullo schema di una delle due relazioni ottengo un sottoinsieme della relazione di partenza
> 
> $$
> \Pi_{X_1}(R_{1}\bowtie R_{2}) \subseteq R_{1} \qquad \Pi_{X_2}(R_{1}\bowtie R_{2}) \subseteq R_{2}
> $$

- Nel JOIN le tuple *dangling* vengono escluse, se si tenta di ricostruire le due relazioni originali si ha perdita di informazioni.

### Scomposizione di Uno Schema

> [!info]
> Data una relazione $R$ sullo schema $X$, se scompongo lo schema in due sotto-schemi $X_1$ e $X_2$, $R$ è contenuta nella relazione che si ottiene effettuando il join fra le proiezion di $R$ su di essi. 

## Esempio

## Tipi di Join

---

## Domande

Cosa si intende per tupla dangling? :: 

Qual è la definizione di Join? :: 

Cosa si intende per Join Naturale? ::

Cosa si intende per Join Esterno? ::

Enunciare le differenze tra Join Destro, Join Sinistro e Join Completo ::

Esporre rischi e problematiche relative alla perdita delle informazioni in un Join