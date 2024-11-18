#basi-di-dati #secondo-anno 

## Proiezione

### Definizione

> [!theorem]  
> Dati una relazione $r(X)$ e un sottoinsieme $Y$ di $X$, una proiezione di $r$ su $Y$ (indicata con $\pi_{Y}(r)$) è l'insieme di tuple su $Y$ ottenute dalle tuple di $r$ considerando solo i valori su $Y$  
> 
> $$
> \pi_{Y}(r)=\{t[Y]|t\in r\}
> $$

- Essendo le relazione definite come insiemi , non possono in esse comparire tuple uguali tra loro vedi [[Modello Relazionale]]: i contributi uguali "collassano" in una sola tupla.
- In generale $\pi_y(r)$ contiene lo stesso numero di tuple di $r$ se e solo se $Y$ è superchiave per $r$.

### Esempio

In questo particolare esempio viene fatta una proiezione con gli attributi "Reparto" e "Capo", da notare come le tuple uguali sono collassate.  

$$
\large\pi_{\text{Reparto}, \text{Capo}}(\text{Impiegati})
$$

| Cognome | Nome     | Reparto   | Capo  |
| ------- | -------- | --------- | ----- |
| Rossi   | Mario    | Vendite   | Gatti |
| Neri    | Luca     | Vendite   | Gatti |
| Verdi   | Mario    | Personale | Lupi  |
| Rossi   | Giovanni | Personale | Lupi  |

| Reparto   | Capo  |
| --------- | ----- |
| Vendite   | Gatti |
| Personale | Lupi  |
|           |       |
|           |       |