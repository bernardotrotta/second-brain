#basi-di-dati #secondo-anno 

## Definizione

Nel linguaggio SQL la clausola `Join` viene utilizzata per combinare tuple di due o più tabelle, basandosi sulle relazioni tra i rispettivi attributi. 

### Sintassi: Join Implicito

```sql
SELECT _ATTRIBUTO1, _ATTRIBUTO2
FROM TABELLA 1, TABELLA 2
WHERE CONDIZIONE
```

### Sintassi: Join Esplicito

```sql 
select attributo1, attributo2
from tabella1 join tabella2
on condizione
```

### Sintassi Estesa per Join in Sql-2

In SQL-2 è stata introdotta la seguente sintassi per esprimere il `join` ed estenderlo al concetto di [[Join Naturale (Algebra Relazionale)#Join Esterni|Join Esterno]]

```sql
select AttrEspr [[as] Alias],AttrEspr [[as] Alias]
from Tabella [[as] Alias] [TipoJoin] join Tabella [[as]Alias]
on CondizioneJoin
where AltraCondizione
```

La clausola `TipoJoin` può assumere diversi valori:

- `inner`: valore di default, corrisponde ad un [[Join Naturale (Algebra Relazionale)#Theta Join|theta join]].
- `natural`: corrisponde al [[Join Naturale (Algebra Relazionale)#Join Naturale|join naturale]].
- `right[outer]`: corrisponde ad un [[Join Naturale (Algebra Relazionale)#Join Destro|join destro]].
- `left[outer]`: corrisponde ad un [[Join Naturale (Algebra Relazionale)#Join Sinistro|join sinistro]].
- `full[outer]`: corrisponde ad un [[Join Naturale (Algebra Relazionale)#Join Completo|join completo]].

---

- Vedi anche: [[Join Naturale (Algebra Relazionale)]]
- Vedi anche: [[Join Destro]]
- Vedi anche: [[Join Esterno]]
- Vedi anche: [[Join Interno]]
- Vedi anche: [[Join Completo]]
- Vedi anche: [[Join Naturale (Algebra Relazionale)]]