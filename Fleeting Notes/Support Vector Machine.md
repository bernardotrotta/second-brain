## Support Vector Machine

---

**Created**: 12-12-2023 12:00

---

### Cosa Sono?

È un tipo di algoritmo di classificazione che sfrutta la rappresentazione geometrica del dato. Il suo scopo è quello di costruire iper-piani in grado di separare in modo efficace i dati in due classi.

È possibile rappresentare un iper-piano in spazi vettoriali diversi

### Quale Rappresenta Una Separazione Ottimale?

L'obbiettivo è quello di trovare un iper-piano che massimizza la distanza tra i punti più vicini di classi diverse

### Problematiche

Può capitare che una SVM non riesca ad individuare un iper-piano che divida perfettamente le due classi di dati. In questo caso è possibile utilizzare due tecniche:

1. Soft-margin. Nel calcolo dell'equazione del margine si tiene conto della distanza epsilon tra l'elemento della classe che non si è riesce a separare e un punto sul margine che separa la sua calsse di appartenenza
2. Feature Space: Si rappresentano i dati su spazi dimensionali diversi mappando i punti in uno spazio dimensionale superiore

### Funzioni Kernel