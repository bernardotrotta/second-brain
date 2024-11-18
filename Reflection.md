#tag #tag

## Reflection

Le **Reflection** in Java sono un meccanismo che permette al programma di ottenere informazioni su classi, metodi, campi, e costruttori a runtime, e addirittura di manipolarli senza conoscere il tipo esatto a tempo di compilazione.

Vediamo come usare la **Reflection** con un esempio semplice. Supponiamo di avere una classe Person e vogliamo ottenere informazioni su di essa tramite Reflection.

```java
public class Person {
    private String name;
    private int age;

  
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

  
    public String getName() {
        return name;
    }

  

    public void setName(String name) {
        this.name = name;
    }
  

    public int getAge() {
        return age;
    }
  

    public void setAge(int age) {
        this.age = age;
    }
}
```

```java
import java.lang.reflect.Field;

import java.lang.reflect.Method;

import java.lang.reflect.Constructor;

  

public class Main {

    public static void main(String[] args) {

        try {

            // Ottieni l'oggetto Class che rappresenta Person

            Class<?> personClass = Class.forName("Person");

  

            // Ottieni il nome della classe

            System.out.println("Nome della classe: " + personClass.getName());

  

            // Ottieni i costruttori della classe

            Constructor<?>[] constructors = personClass.getConstructors();

            System.out.println("Costruttori:");

            for (Constructor<?> constructor : constructors) {

                System.out.println("  " + constructor);

            }

  

            // Ottieni i metodi della classe

            Method[] methods = personClass.getMethods();

            System.out.println("Metodi:");

            for (Method method : methods) {

                System.out.println("  " + method);

            }

  

            // Ottieni i campi dichiarati nella classe

            Field[] fields = personClass.getDeclaredFields();

            System.out.println("Campi:");

            for (Field field : fields) {

                System.out.println("  " + field.getName());

            }

  

        } catch (ClassNotFoundException e) {

            e.printStackTrace();

        }

    }

}
```

### Summary

- 

---

### Referenze

1. 

---
**Tags**: 