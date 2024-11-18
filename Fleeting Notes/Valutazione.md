## Hold-out

---

È una tecnica di valutazione che mira a suddividere il dataset in due parti, una destinata all'addestramento ed un'altra destinata al collaudo. Risulta utile quando si ha un ampio dataset 

## Strategia K-fold

---

È una tecnica molto utile nel valutare le prestazioni di un modello di classificazione.

Risulta la migliore nel caso in cui il dataset e piccolo e limitato

## Passaggi

1. Suddivisione del dataset in K sottoinsiemi detti fold
2. Il modello viene allenato K volte, ad ogni iterazione viene preso un K-i esimo fold e considerato come set di addestramento, la parte rimanente come set di collaudo.
3. Ad ogni iterazione vengono registrati i risultati, detti "metriche", possono contenere parametri come accuratezza errore, a fine ciclo viene fatta una media

Dalla cross validation scatusicono metriche di valutazione che consentono di effettuare una scelta di un algoritmo rispetto ad un altro. 

Per valutare l

La matrice di confusione è una cross tabulazione che mostra il numero di Veri positivi, veri negativi, falsi positivi, falsi negativi

Il totale delle classi positive è dato da P = TP + FN

Il totale delle classi negative è dato da N = TN + FP

Ogni metrica è più adeguata al modello utilizzato

- Accuratezza : Vogliamo che ogni elemento sia classificato, indipendentemente dal numero di falsi positivi o falsi negativi
- Sensibiità : Massimizzare i True Positive mantenendo basso il numero di False Positive 
- Precisione : Massimizzare i Veri positivi e i falsi negativi 
- Specificità :