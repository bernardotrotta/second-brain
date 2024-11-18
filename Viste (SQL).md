#secondo-anno #basi-di-dati 

## Definizione

Sono tabelle virtuali ricavate da informazioni contenute in altre tabelle. Nella definizione possono essere contenute anche altre viste purché non vi siano dipendenze ricorsive o immediate, né transitive. 

### Sintassi

```sql
create view NomeVista[(ListaAttributi)] as SelectSQL [ with [local | cascaded ] checkoption]
```

Le viste sono tabelle virtuali ricavate da informazioni contenute in altre tabelle.  
Nella definizione possono essere contenute anche altre viste purché non vi siano dipendenze ricorsive o immediate (una vista non può dipendere da se stessa), né transitive.

```
create view NomeVista[(ListaAttributi)] as SelectSQL
```

- La query [[SQL]] deve restituire un numero di attributi pari a quelli contenuti nello schema;
- L'ordine degli attributi nella target list deve rispettare quello dello schema
