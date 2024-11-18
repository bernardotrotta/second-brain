#secondo-anno #basi-di-dati 

## Notazione

### Algebra Relazionale

---

#### Attributi

- **Notazione:** 
- **Esempio:** 

---

#### Dominio di Attributi

- **Notazione:** $X$
- **Esempio:** 

---

#### Schema di Relazione

- **Notazione:** $R(A_{1},A_{2},\dots,A_{n})$
- **Esempio:** $\text{Studenti(ID, Nome, Cognome, Età)}$

---

#### Schema di Base di Dati

- **Notazione:** $B = R_{1}(X_{1}),R_{2}(X_{2}),\dots,R_{n}(X_{n})$
- **Esempio:**

---

#### Relazione

- **Notazione:** $R$
- **Esempio:** $\text{Studenti}$

---

#### Istanza di Una Relazione

- **Notazione:** $r(R)$
- **Esempio:** $r(\text{Studenti}) = (1,Marco,Rossi,20),(2,Laura,Bianchi,22),(3,Luca,Verdi,19)$

---

#### Tupla

- **Notazione:** $t$
- **Esempio:**

---

#### Valore di Una Tupla Relativamente Al Dominio

- **Notazione:** $t[A_{i}]$
- **Notazione alternativa:** $t.A_i$
- **Esempio:**

---

#### Unione

- **Notazione:** $r_{1}\cup r_{2}$
- **Esempio:**

---

#### Differenza

- **Notazione:** $r_{1}-r_{2}$
- **Esempio:**

---

#### Intersezione

- **Notazione:** $r_{1} \cap r_{2}$
- **Esempio:**

---

#### Ridenominazione

- **Notazione:** $\rho_{\text{nuovo nome}\leftarrow \text{vecchio nome}}$
- **Esempio:**

---

#### Proiezione

- **Notazione:** $\pi_{\text{lista attributi}}(\text{R})$
- **Notazione alternativa:** $\text{PROJ}_{\text{lista attributi}}(\text{R})$
- **Esempio:** $\pi_{\text{Matricola, Cognome}}(\text{Studenti})$

---

#### Selezione

- **Notazione:** $\sigma_{\text{condizione}}(\text{R})$
- **Notazione alternativa:** $\text{SEL}_{\text{condizione}}(\text{R})$
- **Esempio:** $\sigma_{\text{Età}>\text{20}}(\text{Studenti})$

---

#### Join

- **Notazione:** $R \bowtie_{\text{condizione}} S$
- **Notazione alternativa:** $\text{JOIN}_{\text{condizione}}S$
- **Esempio:** $\text{Studenti}\bowtie_{\text{Studenti.ID}=\text{Esami.ID}} \text{Esami}$
- 