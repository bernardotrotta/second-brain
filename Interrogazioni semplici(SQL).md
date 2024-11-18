#basi-di-dati #secondo-anno 

## Definizione

Le interrogazioni (o query) in SQL (Structured Query Language) sono utilizzate per estrarre, manipolare e gestire i dati memorizzate nel database. Le principali funzionalità sono:

1. Selezione
2. Inserimento
3. Aggiornamento
4. Eliminazione
5. Creazione

## Selezione

La selezione viene effettuata attraverso il comando `select`

```sql
select ListaAttributi
from ListaTabelle
[where Condizione]
```

Ogni colonna può essere rinominata con un alias

### Interpretazione Algebrica

...

### Esempio 1

Data una base di dati che contiene le tabelle:

```
Impiegato(Nome, Cognome, Dipart, Ufficio, Stipendio, Città)
Dipartimento(Nome, Indirizzo, Città)
```

```sql
select Stipendio/12 as SalarioMensile
from Impiegato
where Cognome = 'Rossi'
```

L'interrogazione appena vista genera una tabella rinominata `SalarioMensile` e tante righe quanti sono gli impiegati che si chiamano `Rossi`.

Se si indica `select *` si selezionano tutti gli attributi

### Esempio 2

Data una base di dati che contiene la tabella `Persone(Nome, Età, Reddito)`, selezionare nome e reddito delle persone con meno di trenta anni. 

$$
 \text{PROJ}_{\text{Nome},\text{Reddito}}(\text{SEL}_{\text{Età}<30}(\text{Persone}))
$$

| Nome    | Età | Reddito |
| ------- | --- | ------- |
| Andrea  | 27  | 21      |
| Aldo    | 25  | 15      |
| Maria   | 55  | 42      |
| Anna    | 50  | 35      |
| Filippo | 26  | 30      |
| Luigi   | 50  | 40      |
| Franco  | 60  | 20      |
| Olga    | 30  | 41      |
| Sergio  | 85  | 35      |
| Luisa   | 75  | 87      |

``` sql
select Nome,Reddito
from Persone
where Età < 30

```

``` sql
select p.nomme as nome, p.reddito as reddito
from persone as p
where p.eta < 30
```

## Interrogazione su Più Tabelle

Per effettuare una interrogazione su più tabelle è possibile effettuare un [[Join (SQL)|Join]] Implicito o Join Esplicito

### Join Implicito

Si specifica la lista delle tabelle nella clausola `from`, la condizione di join viene specificata nella clausola `where`. Dal punto di vista dell'algebra relazionale, si tratta di un [[Join Naturale (Algebra Relazionale)#Theta Join|theta join]], ovvero un [[Modello Relazionale#Prodotto Cartesiano|prodotto cartesiano]] tra due o più tabelle. 

```sql
select Studenti.Nome, Studenti.Cognome, Esami.Voto
from Studenti, Esami
where Esami.Studente = Studenti.Matricola
```

### Join Esplicito

La clausola `from`, leggerà un join fra le tabelle `A` e `B`

```sql
select Studenti.Nome, Studenti.Cognome, Esami.Voto
from Studenti join Esami
on Esami.Studente = Studenti.Matricola 
```

### Esempio 1

Estrarre i nomi degli impiegati e le città dove lavorano:

```sql
-- Con Join Implicito

select Impiegato.Nome, Impiegato.Cognome, Dipartimento.Citta
from Impiegato, Dipartimento
where Impiegato.Dipart = Dipartimento.Nome
```

```sql
-- Con Join Esplicito

select Impiegato.Nome, Impiegato.Cognome, Dipartimento.Citta
form Impiegato join Dipartimento
on Impiegato.Dipart = Dipartimento.Nome
```

Per semplificare la query è possibile utilizzare gli [[Alias (SQL)|alias]]

```sql
select I.Nome, I.Cognome, D.Citta
from Impiegato as I, Dipartimento as D
where I.Dipart = D.Nome
```

È possibile omettere un nome per la tabella in quei casi in cui non possono presentarsi ambiguità

```sql
select I.Nome, I.Cognome, D.Citta
from Impiegato as I, Dipartimento as D
where Dipart = D.Nome
```

## Referenze

- Vedi anche: [[Interrogazioni (Algebra Relazionale)]]
- Vedi anche: [[Where (SQL)]]
- Vedi anche: [[Raggruppamento (SQL)]]