#secondo-anno #basi-di-dati 

## Query

Esercizi sulle [[Interrogazioni semplici(SQL)|interrogazioni SQL]]

### Esercitazione 1

- Vedi esercizi: [[Esercizinegozio.pdf]]
- Vedi soluzioni: [[Esercizinegoziorisolti.pdf]]

```sql
CLIENTI(Codice_Cliente, Nome, Cognome, NomeDitta, Indirizzo, Citta, Telefono)
CATEGORIE_PRODOTTI(Codice_Categoria, Nome) 
PRODOTTI(Codice_Prodotto, Nome, Produttore, Cod_Categoria, Scadenza, PrezzoVendita) 
VENDITE(Cod_Cliente, Data, Quantita, Cod_Prodotto, Sconto)
```

```sql
-- Il nome dei prodotti con prezzo > 100

SELECT P.Nome
FROM PRODOTTI AS P
WHERE PrezzoVendita > 100
```

```sql
-- Il cognome e il nome dei clienti che abitano a Parma

SELECT C.Nome, C.Cognome
FROM CLIENTI AS C
WHERE Citta = 'Parma'
```

```sql
-- Cognome e nome dei clienti che hanno acquistato prodotti che scadevano nel 2008 (usare la funzione year(data) per estrarre l’anno dalla data)

SELECT C.Cognome, C.Nome
FROM CLIENTI AS C, PRODOTTI AS P, VENDITE AS V
WHERE V.Cod_Cliente = C.Codice_Cliente
AND V.Cod_Prodotto = P.Codice_Prodotto
AND year(P.Scadenza) = 2008

```

```sql
-- Nome dei prodotti che appartengono alla categoria Alimentari

SELECT P.Nome, CP.Nome
FROM PRODOTTI AS P JOIN CATEGORIA_PRODOTTO AS CP
ON CP.Cod_Categoria = CP.Codice_Categoria
WHERE CP.Nome = 'Alimentari';

```

```sql
-- Nome e cognome dei clienti di nome Giuseppe che hanno acquistato prodotti di costo > 150

SELECT C.Nome, C.Cognome
FROM CLIENTI AS C, VENDITE AS V, PRODOTTI AS P
WHERE  V.Cod_Cliente = C.Codice_Cliente
AND P.Codice_Prodotto = V.Cod_Prodotto
AND C.Nome = 'Giuseppe'
AND P.PrezzoVendita > 150;

```

```sql
-- La massima quantità di un prodotto venduta a un cliente di nome Piero

SELECT max(V.Quantita)
FROM VENDITE AS V, CLIENTI AS C
WHERE V.Cod_Cliente = C.Codice_Cliente
AND C.Nome = 'Piero';
```

```sql
-- I ricavi totali ottenuti per la vendita di ciascun prodotto dal 1/1/2012 al 31/12/2012

SELECT P.Nome, SUM(P.PrezzoVendita * V.Quantita)
FROM PRODOTTI as P, VENDITE as V
WHERE V.Cod_Prodotto = P.Codice_Prodotto
AND year(V.Data) = 2012
GROUP BY P.Nome
```

```sql
-- Il costo del prodotto più caro acquistato da un cliente residente a Parma

SELECT MAX(P.PrezzoVendita)
FROM PRODOTTI AS P, CLIENTI AS C, VENDITE AS V
WHERE V.Cod_Cliente = C.Codice_Cliente
AND V.Cod_Prodotto = P.Codice_Prodotto
AND C.Citta = 'Parma';

```

```sql
-- Il prezzo medio di vendita dei prodotti di ciascuna categoria

SELECT CP.Nome, AVG(P.PrezzoVendita)
FROM PRODOTTI AS P, CATEGORIE_PRODOTTI AS CP
WHERE P.Cod_Categoria = CP.Codice_Categoria
GROUP BY CP.Nome;
```

```sql
-- La spesa totale dei clienti residenti nelle diverse città (un totale per ogni città).

SELECT C.Citta, SUM(P.PrezzoVendita * V.Quantita)
FROM CLIENTI AS C, PRODOTTI AS P, VENDITE AS V
WHERE V.Cod_Cliente = C.Codice_Cliente
AND V.Cod_Prodotto = P.Codice_Prodotto
GROUP BY C.Citta

-- Versione con il JOIN Esplicito

SELECT C.Citta, SUM(P.PrezzoVendita * V.Quantita)
FROM PRODOTTI AS C JOIN VENDITE AS V ON V.Cod_Prodotto = P.Codice_Prodotto
JOIN CLIENTI AS C ON V.Cod_Cliente = C.Codice_Cliente
GROUP BY C.Citta

```

```sql
-- I ricavi totali anno per anno.

SELECT. year(V.Data) SUM(P.PrezzoVendita * V.Quantita)
FROM PRODOTTI AS P, VENDITE AS V
WHERE V.Cod_Prodotto = P.Codice_Prodotto
GROUP BY year(V.Data)

```

```sql
-- I ricavi totali, anno per anno, per ciascuna categoria di prodotti.

SELECT 

```

```sql
-- Il cognome e il nome dei clienti che abitano a Parma

```

```sql
-- L'elenco dei prodotti che sono più cari di almeo un prodotto della categoria Alimentari

SELECT P.Nome, P.Codice_Prodotto
FROM PRODOTTI AS P
WHERE P.PrezzoVendita >
ANY (SELECT P1.Nome, MAX(P1.PrezzoVendita)
FROM PRODOTTI as P1, CATEGORIE_PRODOTTI AS CP1
WHERE P1.Cod_Categoria = CP1.Codice_Categoria
AND CP1.Nome = 'Alimentari')
```

```sql
-- Tutti i prodotti in vendita, in ordine di quantità venduta nel 2010


```

```sql
-- Il prodotto più caro fra quelli acquistati da Piero Neri nel 2010 (usando una query nidificata)

SELECT P.Nome
FROM PRODOTTI AS P
JOIN VENDITE AS V ON V.Cod_Prodotto = P.Codice_Prodotto
JOIN CLIENTI AS C ON V.Cod_Cliente = C.Codice_Cliente
WHERE C.Nome = 'Pietro'
AND C.Cognome = 'Neri'
AND year(V.Data) = 2010
AND P.PrezzoVendita = 
SELECT MAX(P1.PrezzoVendita)
FROM PRODOTTI AS P1
JOIN CLIENTI AS C1 ON C1.Cod_Cliente = C1.Codice_Cliente
JOIN VENDITE AS V1 ON V1.Cod_Prodotto = P1.Codice_Prodotto
J
WHERE C1.Nome = 'Pietro'
AND C1.Cognome = 'Neri'
AND year(V1.Data) = 2010
```

```sql
-- L’elenco dei prodotti più cari per ogni categoria, oltre alla la categoria e il prezzo corrispondenti, ordinati in ordine decrescente di prezzo.

SELECT P.Nome, CP.Nome, MAX(P.PrezzoVendita)
FROM PRODOTTI AS P
JOIN CATEGORIE_PRODOTTI AS CP ON P.Cod_Categoria = CP.Codice_Categoria
GROUP BY CP.Nome
ORDER BY P.PrezzoVendita DSC
```

```sql
-- Il cliente che ha acquistato merce per il valore complessivo più alto dal 1/1/2011 ad oggi

SELECT C.Nome, C.Cognome, SUM(P.PrezzoVendita * V.Quantita) AS TOTACQUISTI
FROM CLIENTI AS C, VENDITE AS V
WHERE V.Cod_Cliente = C.Codice_Cliente
AND year(V.Data) = 2011
AND TOTACQUISTI >= ALL
GROUP BY 

(SELECT SUM(P.PrezzoVendita * V.Quantita)
FORM PRODOTTI AS P, VEDITE AS V
WHERE V.Cod_Prodotto = P.Codice_Prodotto
AND year(V.Data) = 2011
```

```
CLIENTI(Codice_Cliente, Nome, Cognome, NomeDitta, Indirizzo, Citta, Telefono) CATEGORIE_PRODOTTI(Codice_Categoria, Nome) 
PRODOTTI(Codice_Prodotto, Nome, Produttore, Cod_Categoria, Scadenza, PrezzoVendita)
VENDITE(Cod_Cliente, Data, Quantita, Cod_Prodotto, Sconto)


con i seguenti vincoli di integrità referenziale: 
VENDITE.Cod_Cliente  CLIENTI.Codice_Cliente 
VENDITE.Cod_Prodotto  PRODOTTO.Codice_Prodotto 
PRODOTTI.Cod_Categoria  CATEGORIE_PRODOTTI.Codice_Categoria

```

### Esercitazione 2

- Vedi esercizio: [[Esercizigestione.pdf]]
- Vedi soluzione: [[Esercizigestionerisolti.pdf]]

#### Traccia 1

```sql
IMPIEGATO(MatricolaImpiegato, Nome, Cognome, Stipendio, NReparto, Indirizzo) 
PROGETTO(CodiceProgetto, Sede, Responsabile, Budget) PARTECIPAZIONE(IDPartecipante, CodProgetto, Incarico) 
REPARTO(Nome, Direttore, Sede)
```

#### Traccia 2

```sql
PROGETTO.Responsabile -> IMPIEGATO.MatricolaImpiegato PARTECIPAZIONE.IDPartecipante -> IMPIEGATO.MatricolaImpiegato PARTECIPAZIONE.CodProgetto -> PROGETTO.CodiceProgetto REPARTO.Direttore -> IMPIEGATO.MatricolaImpiegato 
IMPIEGATO.NReparto -> REPARTO.Nome
```

#### Traccia 3

```sql
-- Trovare, per ciascun progetto, nome e cognome dell’impiegato che vi partecipa che ha lo stipendio più alto

SELECT MAX(I.STIPENDIO)
FROM IMPIEGATO AS I, PARTECIPAZIONE AS P
WHERE P.IDParteciapete = I.MatricolaImpiegato


```

### Esercitazione 3

- Vedi esercizio: [[es172430-04-08-15-052024xampp (1).pdf]]
- Vedi correzione: [[SoluzioniEsercizi2024.pdf]]

#### Traccia a

```sql
-- a) Codice e titolo dei libri pubblicati dall’editore Mondadori.

```

#### Traccia B

```sql
-- b. Cognome e nome degli utenti appartenenti alla categoria ‘Studenti’ che hanno più di 50 anni.

SELECT Nome, Cognome
FROM UTENTI
WHERE Eta > 50
```

#### Traccia C

```sql
-- c. Cognome e nome degli utenti cui sono stati prestati libri pubblicati nel 2016.

SELECT 
    U.Nome, U.Cognome
FROM
    Utenti AS U
        JOIN
    Prestiti AS P ON U.Codice_Utente = P.Cod_Utente
WHERE
    YEAR(P.Data) = 2016
```

#### Traccia D

```sql
-- d. Titolo dei libri che appartengono al genere ‘Saggio’.

-- select generi.nome, libri.titolo from generi left join libri on libri.cod_genere = generi.codice_genere

-- INSERT INTO libri (codice_libro, titolo, autore, editore, scaffale, cod_genere, num_pagine, anno_pub) 
-- VALUES ('L0006', 'Come trattare gli altri e farseli amici', 'Dale Carnegie', 'Bompiani', 'F06', 'G0006', 300, 1936);

select l.Titolo, g.nome as Categoria
from libri as l
join generi as g on l.cod_genere = g.codice_genere
where g.nome = 'Saggi'
```

#### Traccia e

```sql
-- Nome e cognome dei utenti di nome Giuseppe che hanno ottenuto il prestito di libri che hanno più di 500 pagine.

select u.nome, u.cognome, p.cod_utente, l.titolo, l.num_pagine
from utenti as u
join prestiti as p on p.cod_utente = u.codice_utente 
join libri as l on p.cod_libro = l.codice_libro
where l.num_pagine > 500
```

#### Traccia F

```sql
-- f. L’elenco dei libri appartenenti al genere ‘Romanzo’ che hanno più pagine di almeno un libro di genere ‘Storico’.

-- update generi set Nome = 'Avventura' where codice_genere = 'G0005'

-- insert into generi (codice_genere, nome) values ('G0007','Storico')

select l.titolo, g.nome
from libri as l
join generi as g on l.cod_genere = g.codice_genere
where g.nome = 'Romanzo'
and l.num_pagine > ANY (select num_pagine
						from libri as l
						join generi as g on l.cod_genere = g.codice_genere
						where g.nome = 'Storico')

SELECT L.TITOLO, L.Num_Pagine
FROM LIBRI AS L, GENERI AS G
WHERE G.Codice_Genere = L.Cod_Genere 
AND G.Nome = "Romanzo" 
AND EXISTS(SELECT 1
           FROM LIBRI AS L1, GENERI AS G1
           WHERE G1.Codice_Genere = L1.Cod_Genere 
           AND G1.Nome = "Storico"
           AND L.Num_Pagine > L1.Num_Pagine)
```

#### Traccia G

```sql
-- g. Quante volte sono stati prestati libri che hanno come autore ‘Manzoni’


select count(*)
from prestiti as p 
join libri as l on p.cod_libro = l.codice_libro
where l.autore = 'Alessandro Manzoni'
```

#### Traccia H

```sql
-- h. Quante volte è stato prestato ciascun libro che ha come autore ‘Manzoni’.

select l.titolo, count(p.cod_libro)
from libri as l
left join prestiti as p on p.cod_libro = l.codice_libro
where autore = 'Alessandro Manzoni'
group by l.titolo
```

#### Traccia I

```sql
-- i. Per ciascun genere, il numero medio di pagine dei libri che gli appartengono.

select g.nome, avg(l.num_pagine)
from generi as g
join libri as l on l.cod_genere = g.codice_genere
group by g.nome
```

#### Traccia J

```sql
-- j. Per ogni età, il numero medio di pagine di libri di genere "Avventura" presi in prestito. 

SELECT AVG(L.Num_Pagine), U.Eta
FROM GENERI AS G, LIBRI AS L, UTENTI AS U, PRESTITI AS P
WHERE P.Cod_Libro = L.Codice_Libro
AND P.Cod_Utente = U.Codice_Utente
AND L.Cod_Genere = G.Codice_Genere
AND G.Nome = "Avventura"
GROUP BY U.Eta
```

#### Traccia K

```sql
-- k. Il numero di prestiti totali, anno per anno.

SELECT COUNT(P.*), year(P.Data)
FROM PRESTITI AS P
GROUP BY year(P.Data)
```

#### Traccia L

```sql
-- l. Il numero di prestiti totali, anno per anno, per i diversi generi.

SELECT COUNT(*), year(P.Data), G.Nome
FROM PRESTITI AS P, GENERI AS G, LIBRI AS L 
WHERE P.Cod_Libro = L.Codice_Libro
AND G.Codice_Genere = L.Cod_Genere
GROUP BY year(P.Data), G.Nome
```

### Traccia M

```sql
--m. I generi per i quali nel 2005 si sono avuti più di 50 prestiti

SELECT G.Nome, COUNT(*)
FROM GENERI G, PRESTITI P, LIBRI L
WHERE G.Cod_Genere = L.Codice_Genere
AND P.Cod_Libro = L.Codice_Libro
AND YEAR(P.Data) = 2005
GROUP BY G.Nome
HAVING COUNT(*) > 50

```

### Traccia N

```sql
--n. Elenco di libri Camilleri in ordine decrescente di numero di prestiti.

SELECT COUNT(*) L.Titolo
FROM LIBRI L, PRESTITI P
WHERE P.Cod_Libro = L.Codice_Libro
AND L.Autore = "Andrea Camillieri"
GROUP BY L.Titolo
ORDER BY COUNT(*) DESC
```

### Traccia O

```sql
--o. In quale scaffale sono localizzati più libri.

SELECT COUNT(L.Titolo) N_LIBRI, L.Scaffale
FROM LIBRI L
GROUP BY L.Scaffale
HAVING N_LIBRI >= ALL(SELECT COUNT(L1.Titolo) N1_LIBRI
                     FROM LIBRI L1
                     GROUP BY L1.Scaffale)
```

### Traccia P

```sql
--p. La categoria per cui nel 2015 sono stati presi meno libri.

SELECT 
    C.Nome, COUNT(*) AS Prestiti, YEAR(P.Data) AS Anno
FROM
    categorie AS c
        JOIN
    utenti AS u ON u.categoria_utenti = c.codice_categoria
        JOIN
    prestiti AS p ON p.cod_utente = u.codice_utente
GROUP BY C.Nome , Anno
HAVING Anno = 2023
    AND Prestiti = (SELECT 
        MIN(Prestiti)
    FROM
        (SELECT 
            C.Nome, COUNT(*) AS Prestiti, YEAR(P.Data) AS Anno
        FROM
            Categorie AS C
        JOIN utenti AS u ON u.categoria_utenti = c.codice_categoria
        JOIN prestiti AS p ON p.cod_utente = u.codice_utente
        GROUP BY c.nome , anno
        HAVING anno = 2023) AS subquery)
```

### Traccia Q

```sql
--q. Per ogni genere, il libro che nel 2014 è risultato il più richiesto.



```

### Traccia U

```sql
--u. Definire una vista Saggi che contenga le tuple contenute nel risultato della query d.

CREATE VIEW SAGGI 
select l.Titolo, g.nome as Categoria
from libri as l
join generi as g on l.cod_genere = g.codice_genere
where g.nome = 'Saggi'

```

### Traccia R

```sql
-- r. L'utente di 35 anni che ha letto di più (cioè che ha preso in prestito libri per il massimo numero totale di pagine)
	
SELECT U.Nome, U.Eta, SUM(L.Num_Pagine) AS TOT_PAGINE
FROM UTENTI AS U
JOIN PRESTITI AS P
JOIN LIBRI AS L
ON P.Cod_Utente = U.Codice_Utente
AND P.Cod_Libro = L.Codice_Libro
WHERE U.Eta = 35
GROUP BY U.Nome, U.Eta
HAVING TOT_PAGINE >= ALL (SELECT SUM(L1.Num_Pagine) AS TOT2_PAGINE
                      FROM UTENTI AS U1
                      JOIN PRESTITI AS P1
                      JOIN LIBRI AS L1
                      ON P1.Cod_Utente = U1.Codice_Utente
                      AND P1.Cod_Libro = L1.Codice_Libro
                      WHERE U1.Eta = 35    
                      GROUP BY U1.Nome, U1.Eta)
```

### Traccia S

```sql
--s. Gli utenti che hanno preso in prestito più di 50 libri di genrere "Avventura" ma non hanno letto alcun libro di genere "Storico".

SELECT U.Nome, G.Nome
UTENTI AS U
JOIN PRESTITI AS P
JOIN LIBRI AS L
JOIN GENERI AS G
ON U.Codice_Utente = P.Cod_Utente
AND P.Cod_Libro = L.Codice_Libro
AND L.Cod_Genere = G.Codice_Genere



```
