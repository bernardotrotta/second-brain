#secondo-anno #basi-di-dati 

## Identificatori di Entità

### Generalità

È un [[Attributi (Modello ER)|attributo]] o un insieme di attributi che consente di identificare univocamente ogni occorrenza di un'[[Entità (Modello ER)|entità]] all'interno di un [[DBMS|database]]. 

- **Identificatore interno:** è un attributo o un insieme di attributi propri dell'entità che sono sufficienti ad identificarla univocamente.
- **Identificatore esterno:** è un attributo o un insieme di attributi di altre entità che sono richiesti per identificare una entità.
- Deve avere cardinalità (1,1)
- Deve essere unico e specificato
- Un identificatore esterno può coinvolgere entità che a loro volta sono identificate esternamente, purché non si creino cicli.
- Ogni entità può avere anche più di un identificatore 

Le associazioni non hanno identificatori propri mas sono identificate esternamente dalle entità che le legano!

---

#### Referenze

- Vedi anche: 
- Vedi anche:
 