> È una sequenza di byte e per rappresentare testo unicode deve essere convertito in UTF-8

Ogni carattere della stringa è un numero che codifica il codice ASCII

- Le stringhe sono mutabili
- Per estrarre delle #slice si può usare il metodo `a.substr`
- Sulle stringhe è possibile fare confronto in maniera simile a [[Python]]
- Anche il ciclo while è molto simile a [[Python]]
- Esiste l'operatore ++ che può essere usato con ++count per aggiungere 1 al count
- Le operazioni nei cicli while possono essere compattati nei cicli for, per una questione di semantica
- Il :: è quivalente al punto in Pythom.
	- g2d::clear_canvas();

Quando una funzione non produce un risultato la si chiama con la preposizione "void"

Lo standard dice che main deve restituire un intero

- Su c++ le slides si rachiudono con le {} e vengono dette strupt, non sono la stesa cosa
-

## Generatori di Numeri Casuali

Nelle versioni più recenti esistono alcuni generatori di numeri casuali, oppure utilizzare la funzione "rand"

è necessario resettare rand con strand all'inizio dello script in modo da inizializzare la sequenza di numeri casuali

## Vector e Array Dinamici

le strutture dalle librerie standard sono chiamate dallo spazio dei nomi std

Per dichiarare un vettore ad esempio facciamo std::vector{1, 2, 3, 5}

Non è possibile stampare direttamente una vatiabile ma vanno scorsi tutti i dati 

Per aggiungere qualcosa al vector si usa .push_back

Per togliere qualcosa si usa pop_back

## Programmazione Ad Oggetti

è necessario specificare immediatamente i campi

- si usa un underscore alla fine del campo per distinguerlo dalle variabili, a differenza di python non c'è bisogno di specificare self

esiste poi il costruttore , si chiama come la clase e non è l'unica funzione che richiede un valore di ritorno

## Creazione Degli Oggetti

per creare degli oggetti 

(type inference è auto)

per chiamare i metodi si usa sempre il . come in pytho

## Libreria Python per Chiamare C++

Supponiamo che sia una classe molto onersoa e abbiamo un programma driver in python, è possibile importare una classe C++ in un progetto Python, in modo da migliorare la prestazione creando degli oggetti wrapper in modo da interfacciare i due linguaggi insieme. 

`pip3 install cppyy

### Storia`

Ai programmatori del ![https://it.wikipedia.org/wiki/CERN] piace usare pyython ma hanno algoritmi molto pesanti, quindi hanno detto "ue frat'm ma qui non va un cazzo, ottimizziamo tutto facendo un progetto metà in Python e metà C++ madaffacca"

### Puntatori

Un puntatore è una variabile speciale che memorizza un ==indirizzo di memoria==

```c++
char* p;
p = &i; // la & estrae il valore dal puntatore


```

### Allocazione Dinamica

quando in python scriviamo b = Ball (10, 20) b è un puntatore all'oggetto Ball

con l'operatore new, c++ mi crea un oggetto dinamicamente 

si usa new e non fa altro che creare un nuovo indirizzo di memoria che punta all'oggetto

### Sottoclassi

Le sottoclassi devono essere realizzate utilzizando i puntatori altrimenti il polimorfismo non funziona

- se vogliamo creare una sottoclasse di Actor chiamata Ghost `class Ghost : public Actor`