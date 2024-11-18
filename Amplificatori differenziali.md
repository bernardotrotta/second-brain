## Cosa Sono gli Amplificatori Differenziali?

### Introduzione

Un amplificatore differenziale è un componente a 3 terminali il quale utilizzo è di amplificare una differenza di potenziale applicata ai due terminali di ingresso. 

- Terminale negativo è detto terminale invertente;
- Terminale positivo è detto terminale non invertente;

Si chiama operazionale proprio perché veniva utilizzato per svolgere operazioni matematiche.

### Caratteristiche

Un buon amplificatore differenziale è bene che abbia le seguenti caratteristiche: 

1. Bassa impedenza di uscita
2. Elevata impedenza di ingresso
3. Elevato guadagno di tensione 

La sua struttura interna deve essere simmetrica rispetto ai suoi morsetti di ingresso. Viene fabbricato con tecnica litografica in serie, esistono modelli a BJT o a MOSFET.

### Parametri

- $V_{D}:$ tensione differenziale di ingresso
- $V_{UD}:$ tensione differenziale di uscita
- $A_{VD}:$ guadagno di tensione differenziale, in generale si calcola con la seguente formula

### Polarizzazione Del Modello a Bjt

$$
V_{D} = A_{VD} \qquad  V_{{D}}
$$

$$
V_{D} = V_{BE_{1}} - V_{BE_{2}}
$$$$I_{C_{1}}+I_{C_{2}} = \frac{\beta_F}{\beta_F+1}I_{0} \cong I_{0}






$$

$$
V_{UD} = V_{CC} - R_{C}I_{C0}
$$

### Piccoli Segnali Del Modello a Bjt

$$
A_{VD}^{CA} = \frac{V_{UD}}{V_{D}}=g_{M}R_{C} \approx \frac{I_{0}}{2V_{T}} R_{C}
$$

$$
A_{VD}^{CA}|_{\text{MAX}}\approx \frac{V_{CC}}{2V_{T}} 
$$

$$
R_{i} = 2r_{BE} \approx \frac{4V_{T}\beta_{F}}{I_{0}}
$$

$$
R_{U} = 2R_{C}
$$