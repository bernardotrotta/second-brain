## Kotlin

---

**Created**: 12-04-2023 14:12

---

### Summary

[[Introduzione a Kotlin]]

- Durante la dichiarazione di una variabile in Kotlin è possibile omettere il tipo di dato utilizzato a patto che la variabile sia prima inizializzata con un valore. 

### Somma di Variabili

In Kotlin come in altri linguaggi di programmazione è possibile effettuare operazioni algebriche su dati di tipo "Int". Di conseguenza è anche possibile effettuare delle operazioni sulle variabili che contengono valori di tipo "Int"

```kotlin
fun main() {
    val unreadCount = 5
    val readCount = 100
    println("You have ${unreadCount + readCount} total messages in your inbox.")
}
```

In Kotlin è raccomandato utilizzare "ove possibile" val al posto di var

#### Increment and Decrement Operators

L'incremento è simile all'incremento in phython 

```kotlin
count++ 
```

#### Varibili di Ritorno

È molto importante nelle funzioni dichiarare il tipo di dato, che viene associato alla variabile di ritorno di una funzione

```kotlin
fun birthdayGreeting(): String {
    println("Happy Birthday, Rover!")
    println("You are now 5 years old!")
    return
}
```

Ricorda che è possibile ritornare un solo valore alla volta per cui è meglio buttare tutto in una fottuta variabile

---

### References

1. 

---
**Tags**: 