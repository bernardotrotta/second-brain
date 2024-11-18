## Introduzione All'ai

---

**Created**: 09-10-2023 08:54

---

### Alcune Domande da Esame

- Quando è nata l'intelligenza artificiale? 
	- Prima formulazione del test di Turing 1950
- Cos'è l'intelligenza artificiale?
- Cosa vuol dire avere una base di conoscenza?
- Cos'è un problema di search?
- Cos'è l'agente logico?
- Cos'è l'euristica?

---

### Introduzione

Agenti intelligenti a agenti risolutiori di problemi

(Agente risolutore di problemi e agente logico)

Ambiente statico, non ci sono degli ostacoli

Per risolvere problemi di contingenza (con imprevisti), aggiungiamo la componente planning

Per risolvere problemi di ricerca abbiamo problemi.a stato singolo e stato multiplo

Problemi di learning, si esplora il problema

### Problema a Stato Singolo

Esempio dell'aspirapolvere, gli stati sono le possibili configurazione del mondo a partire da uno stato iniziale, lo stato cambia quando il robot agisce sull'ambiente, l'arco fra due stati è rappresentato da funzioni successore

Lo spazio degli stati può essere infinito

### Problema a Stato Multiplo

- lo stato non è completamente accessibile, 

### Problema di Contingenza

- Conoscenza incompleta degli effetti delle azioni
- Soluzione: Alberi di stati

Leggi di Murphy

Si presenta un imprevisto, come può essere risolto? 

## Problemi di Esplorazione

Nessuna informazione degli effetti delle azioni

Nessuna informazione dello stato del mondo 

L'agente deve apprendere tutte queste informazioni in maniera autonoma

## Cercare Soluzioni (problem Solving agents)

"Una soluzione è una sequenza di azioni"

Un algoritmo di ricerca considera quindi diverse possibili sequenze di azioni per raggiungere lo stato obiettivo.

**Obiettivo:** raggiungere un altro stato del mondo e trovare una soluzione

**Come cercare le soluzioni:**
1. Determinazione obiettivo
2. Formulazione del problema
3. Determinazione della soluzione mediante ricerca
4. Esecuzione del piano

Schema degli stati:

Cos'è lo spazio degli stati? Insieme di tutti gli stati raggiungibili dallo stato iniziale attraverso qualsiasi sequenza di azioni

- Stato iniziale
- Operatori di stato 
- Test obiettivo: stato {true/false}
- Costo del cammino, si associa il costo alla funzione successore, ovviamente nel mondo reale è impossibile avere costi negativi

Esempio:

Stato iniziale: essere in Arad

Operatori: Arad > Zerind, Arad > Sibiu

Test obiettivo: esplicito: "In Bucarest"

**Come generare sequenze di azioni?**
Espansione: si parte da uno stato e applicando gli operatori o la funzione successore, si generano nuovi stati, partendo dallo stato iniziale posso generare un albero di ricerca, le foglie rappresentano uno stato da espandere
Strategia di ricerca: ad ogni passo devo scegliere quale stato espandere

## Strutture Dati per L'albero di Ricerca

- Ogni nodo corrisponde ad uno stato nello spazio degli stati
- Nodo genitore rappresenta nodo di partenza
- Operatore appliacato per ottenere il nodo qualsiasi
- Profondità di ogni nodo
- Costo del cammino dallo stato iniziale al nodo

---

### References

1. 

---
**Tags**: 