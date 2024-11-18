Tags: #tecnologie-internet #terzo-anno

[[Client-side JavaScript]]

## Introduzione

- Programmazione ad eventi
- Non serve un compilatore, bensì un interprete.
	- Lato server: Node.
	- Lato client: Browser.
	- È possibile creare un'app client-server che utilizzi Node.

## Model-view-controller

- È un pattern per organizzare sezioni di codice, si individuano 3 parti:
	- 1. Modello: Rappresentazione dei dati.
	- 2. View: Interfaccia utente.
	- 3. Controller: Componente che lega le due parti che da sole non comunicherebbero.
	- Model e View non comunicano tra loro.
	- Il Controller interroga entrambe le parti (Interazione forte), al contrario le due parti possono mandare feedback al Controller senza interrogarlo (Interazione debole).
- Nato dall'esigenza di progettare applicazioni per smartphone.
- Utile anche per i sistemi distribuiti.
- XML, JSON --> Model. (In combinazione con JavaScript, JSON si presta ad essere la soluzione migliore). 
- HTML + CSS --> View.
- JavaScript --> Controller.
- 

## JavaScript

- Prende il nome da Java in quanto agli albori del linguaggio la sintassi somigliava molto a quest'ultimo.
- Standard: ECMAScript
- Microsoft ha creato un linguaggio compatibile chiamato JScript.
- 

## Embedding JavaScript

- Unobtrusive JavaScript
- React non tiene separato l'HTML da JS

## Funzioni Carine

```JavaScript
window.alert() // Utile per creare avvisi "pop-up".
```

```JavaScript
document.write() // "document" è un oggetto precostituito. Rappresenta il documento HTML. Questo comando sovrascrive tutto quello che ho scritto.
```

```JavaScript
innerHTML // 
```

```JavaScript
console.log() // Permette di stampare un messaggio nella console di debug integrata nel browser.
```

Il browser legge il sito e memorizza in una struttura dati detta document

Il codice JavaScript viene sempre eseguito per primo

Il browser utilizza un solo core per questioni di sicurezza

```JavaScript
// Gli identificatori di una variabile sono case sensitive
// Non posso dichiarare una variabile o una funzione il quale identificatore comincia con un numero

let = myVar; 
const = myConst;

// Il tipo di dato viene dichiarato automaticamente.

// Conversione tra tipi
// JS legge le informazioni da sinistra verso destra, da la precedenza al tipo di dato Stringa.

let = 16 + "Volvo";
let = "16" + "Volvo";

let = 16 + 4 + "Volvo";
let = 20 + "Volvo";
let = "20" + "Volvo";
let = "20Volvo";


// Oggetto formato JSON

let cars = {"Saab", "Volvo", "BMW"}; // Array
let x = {firstName: "John", lastName: "Doe"}; // Oggetto

// Operatori artimetici

=== // Due variabili hanno lo stesso valore e stesso tipo.
== // Due variabili hanno lo stesso valore anche se di tipo diversi.
&= and
^= or
|= not

// Concatenazione 
String + String

(cond) ? (true) : (false)

// forin

let person 
for (x in person) {
text += person[x];
}


// Arrow function
const sum = (x, y) => { return x + y; };


```

## Oggetti

``` JavaScript
let car = {type:"Fiat", model:500, color:"white"};
let person = {
	firstName:"John";
	lastName:"Doe";
	fullName:function() {return this.firstName + " " + this.lastName;}
}
```

## Creare Oggetti

```JS
// mediante object literal
// mediante classe
// mediante un costruttore
// mediante new

let person = new Object();

function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age =.age;
	this.eyeColor = eye; 
}

class Shape {
	constructor (id, x, y) {
		this.id = id;
		this.move = (x, y); 
	}
	move (x, y) {
		this.x = x;
		this.y = y;
	}
}

s1 = new Shape("s1", 5, 5);

posso dichiarare una proprietà static
```

---

### Referenze

- Vedi anche: 
- Vedi anche:

- 