## Algoritmi di Regressione

Certo, ecco una dimostrazione dell’esistenza e unicità del polinomio interpolatore.

Supponiamo di avere n + 1 punti distinti x_0, x_1, …, x_n e i valori y_0, y_1, …, y_n, assunti ad esempio da una funzione y = f(x). Il problema dell’interpolazione polinomiale consiste nel calcolare il polinomio p_n di grado n tale che p_n(x_i) = y_i, i = 0, 1, …, n.

Il teorema di esistenza e unicità del polinomio interpolatore afferma che il polinomio p_n esiste ed è unico.

La dimostrazione procede per assurdo. Supponiamo che esistano due polinomi distinti p_n e q_n di grado al più n tali che$ $p_n(x_i) = y_i e q_n(x_i) = y_i, i = 0, 1, …, n. Allora (p_n - q_n)(x_i) = 0, i = 0, 1, …, n. Quindi (p_n - q_n)(x) = Q_n k=0(x - x_k)$ è un polinomio di grado n + 1, il che è assurdo, visto che la differenza di due polinomi di grado n è un polinomio di grado n.

Per studiare l’esistenza del polinomio interpolatore, Lagrange osservò che il polinomio di grado n

$L_k(x) = \prod_{j=0,j\neq k}^n \frac{x - x_j}{x_k - x_j}$

$è tale che L_k(x_j) = \delta_{kj}, dove \delta_{kj} è l’operatore di Kronecker, il cui valore è 1 se k = j e 0 altrimenti. Quindi il polinomio interpolatore p_n(x) = \sum_{k=0}^n y_k L_k(x) interpola i dati, visto che p_n(x_j) = \sum_{k=0}^n y_k L_k(x_j) = y_j, j = 0, 1, …, n.$

Spero che questa dimostrazione ti sia stata utile. Fammi sapere se hai altre domande!
