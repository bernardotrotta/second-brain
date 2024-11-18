La logica proposizionale è una logica classica.

Una proposizione è una frase alla quale si può associare un valore di verità (vero/falso) in maniera oggettiva

"Madrid è la capitale dell'Italia" è una proposizione, il suo valore è falso

"Dove stai andando" non è una proposizione, non le si piò assegnare un valore di verità

"Luigi è simpatico" non è una proposizione perché, nonostante le si possa assegnare un valore di verità, questo non è oggettivo

Una proposizione può essere:

- Aperta: se dipende da una variabile, questa variabile deve essere presa da un insieme detto "insieme di verità"
	- "La città x è in Lombardia" ovviamente la variabile deve appartenere al dominio della frase
- Chiusa: 

Le sentenze possono essere:

- Semplici o atomiche
- Composte: proposizioni formate da più proposizioni semplici legate da un connettivo
	Esempio: 
		$p:$ Cagliari è in Sardegna
		$q:$ Verona è in Puglia
		$p \land q :$ Cagliari è in Sardegna e Verona è in Puglia
		$\bar p$ : Verona non è in Puglia

$\not E$

## Connettivi

| Simbolo | Significato |
|-|-|
|$\neg$|Negazione|
|$\land$|Congiunzione|
|$\lor$|Disgiunzione|
|$\implies$|Implicazione|
|$\iff$|Equivalenza|
|$\bot$|Falso|

## Alfabeto Del Linguaggio Proposizionale

Si compone di:

- Simboli di proposizione
- Connettivi logici
- Simboli ausiliari

$\not {F}$

## Quantificatori

|Simbolo|Significato|
|-|-|
|$\forall$|Per ogni|
|$\exists$|Esiste|
|$\nexists$|Non esiste|
|$\exists$!|Esiste ed è unico|

**Esempio:** Preso un qualunque numero naturale, sommando a questo il valore 2 si ottiene un numero strettamente positivo. (Proposizione vera)

$$
\forall n \in \mathbb{N}, n+2>0
$$

Esiste almeno un numero razionale q, tale che il suo quadrato sia uguale a 2. (Proposizione falsa)

$$
\exists q \in \mathbb{Q}:q^2=2
$$ 

Negare frasi con i quantificatori:

$p:$ "Tutti i gatti hanno la coda"

$\bar p:$ "Esiste almeno un gatto che non ha la co"da 

$\forall x$ gatto, $x$ ha la coda

$\exists x$ gatto: $x$ non ha la coda

Logica predicativa

Questa logica può rappresentare soltanto fatti

Il limite è che abbiamo bisogno di rappresentare anche relazioni tra oggetti di diverso tipo, nasce quindi la logica del primo ordine (o logica dei predicati)

- Logica più espressiva, rappresenta un mondo più complesso
- Non opera sul dominio vuoto

È un linguaggio formale

	- Ha una sintassi ben definita

## Sintassi

Una sentenza è predicativa

I connettivi sono gli stessi

## La Semantica

mi permeette di accettare solo frasi che sono semanticamente corrette

Deve dare una interpretazioni di queste formule stabilendo se una frase è vera o falsa

Per interpetare ciò, devo vedere come ho ancorato la mia formula sul dominio che ho analizzato

1. Scelgo il dominio, non posso scegliere dominio vuoto, su ogni ci sono funzioni sensate e non

Quantificatore

	$\forall$ $x$ King$(x)$ $\rightarrow$ Person$(x)$

	per ogni x se x è un re, allora x è una persona

	Il simbolo $x$ è chiamato variabile

Per q

La combinazione dei 2 quantificatori permette di creare frasi decisamente più complesse

La formalizzazione del problema è compito del progettista (con formalizzazione si intende tradurre il problema da linguaggio naturale in formule)

Devo dare un algoritmo di inferenza in modo tale che, applicando questo algoritmo a tutta la mia base di conoscenza (assiomi iniziali + seuqenza percettiva) verificio se applicando la regola di inferenza, creo una nuova conoscenza. 

Nel mondo del wunkus 

Clausole
---

Com la rappresentazione a clausole è utilizzare un'unica regola di inferenza detta "regola di risoluzione"

**Regola di risoluzione:**
Da $A \vee B, ¬ B \vee C$, 

Se applicando la regola di risoluzione trovo una contraddizione, ho la conferma di aver inserito una cosa falsa. Quando si arriva a trovare una contraddizione? Quando trovo una clausola vuota.

Come posso togliere i quantificatori?
---

Utilizzo il **modus pones** generalizzato in grado di eliminare i quantificatori universali. Il modus pones è una regola di inferenza

> dall’implicazione e dalla premessa dell’implicazione si può inferire la conclusione (a->B, A =>B)

Se A implica B e A è vero posso dedurre che anche B sia vero

**Esempio:**
B1 è una Barbie, appartenente al dominio di giocattoli e persone
Possiede(Jenny, B1), Jenny possiede B1

$\forall x$ Barbie $(x) \wedge$ Possiede Jenny $(x)$ $\rightarrow$ Presta(Linda, Jenny, x)

Se al posto di X mettto B1

Per inferire intendo dire che è vero

Concatenazione in avanti. Quando un nuovo fatto è incluso nella mia base di conoscenza

Ragionamento concatenato in avanti e ragionanento concatento all'indietro

Vantaggi e svantaggi della logica:

In logica la semantica, il significato è chiaro, non equivocabile, non ambiguo 