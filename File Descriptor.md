#sistemi-operativi #c #secondo-anno 

## Descrittore di Un File

### Introduzione

Nei sistemi operativi Unix e Unix-like, un descrittore di file è un numero intero, non negativo che rappresenta univocamente un file, una pipe o un socket aperto da un processo e sul quale è possibile effettuare operazioni di input/output

### Tabella Dei File Aperti

Un file descriptor è di fatto un indice di un array detto tabella dei file aperti, che fa parte del process control block (PCB). Quando viene aperto un file, il primo indice libero viene assegnato ad esso e inviato al processo che ne ha richiesto l'apertura. Di solito gli indici disponibili partono dal 3, in quanto 0, 1, 2 sono predefiniti e non è necessario crearli.