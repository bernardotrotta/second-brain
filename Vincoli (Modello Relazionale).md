#modello-relazionale #basi-di-dati #secondo-anno 

## Definizione

I vincoli nel modello relazionale sono regole che impongono restrizioni sui dati che possono essere inseriti nelle tabelle di un database relazionale. Questi vincoli servono a garantire l'integrità dei dati e la correttezza delle operazioni eseguite sul database.

## Tipi di Vincoli

1. Vincoli Intrarelazionali
	1. [[Vincoli di unicità]]
	2. [[Vincoli di chiave primaria]]
	3. [[Vincoli di integrità di dominio]]
	4. [[Vincoli di integrità]]
	5. Vincoli di Tupla
		1. [[Vincoli di Check]]
		2. [[Vincoli di Not Null]]
2. Vincoli Interrelazionali
	1. [[Vincoli di chiave esterna]]
	2. [[Vincoli di integrità referenziale]]

## Vincoli di Integrità Referenziale

- Un vincolo di integrità referenziale (o foreign key, o chiave esterna) fra un insieme di attributi $X$ di $R_1$ e un'altra relazione $R_2$ è soddisfatto se i valori su X di ciascuna tupla di R_1 compaiono come i valori della chiave (primaria di $R_2$
- **Esempio:** `Corsi(Corso, Ncrediti)` e `Manifesto(CdL, Insegnamento, Anno)`

| Corso                   | Ncrediti |
| ----------------------- | -------- |
| Basi di Dati e Web      | 9        |
| Sistemi Operativi       | 6        |
| Ingegneria Del Software | 9        |

| Cdl   | Insegnamento            | Anno |
| ----- | ----------------------- | ---- |
| IET-I | Basi di Dati e Web      | 3    |
| IET   | Sistemi Operativi       | 2    |
| IET-I | Ingegneria del Software | 3    |

Il vincolo di integrità referenziale è fra Insegnamento, attributo di manifesto e Corso, chiave primaria di corsi. 