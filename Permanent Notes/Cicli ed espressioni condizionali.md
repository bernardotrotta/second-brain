Come in python vale l'annidamento, if, esle, else if (non abbreviabile in elif madonna m

```c++
if(x) -> // se x = 0 allora la condizione è falsa, altrimenti risulta vera per tutti gli altri valori
```

Switch case, è un operatore che sceglie tra diversi blocchi di codice

```c++
switch (selettore)
{
	case etichetta_1: istruzione 
	case eiichetta_2: istruzioone
	default: //valore eseguito solo se le altre non si verificano
}
```

## Operatore Ternario

è uno shortcode per un if

if (y<z)

	x = y+3;

else x = z-2

x = (y<z) ? y+3 : z-2;

## While

```c++
while (condizione)
{
	statement1;
	sstatement2;
	...
}

/*il programam valuta la confizione ogni volta che finisce il ciclo, è importante che nel blocco di codice accade qualcos ache modifica la condizione per non entrare in un loop infinito.*/
```

esiste anche una versione leggermente diversa chiamata do while

```c++
do
{
	statement1;
	statement2;
	...
} while (condizione);
```

I cicli anche di diverso tipo si possono annidare

Per generare un numero pseudo casuale si può usare la funzione rand di sistema

cstdlib

iostrea

ctime 

## File Header

I file header contengono include di altre librerie, sono file di intestazione

## Array = Vettori

Sono una forma di struttura dati, quindi un contenitore di dati in memoria. 

## Puntatori

è un tipo di dato con un suo indirizzo di memoria il cui contenuto è un indirizzo di memoria 

```
int *var1Ptr;
```

Allocazione statica e dinamica, automatica della memoria di una variabile
