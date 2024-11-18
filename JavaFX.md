#ingegneria-del-software #terzo-anno #java

- Quali sono le funzionalità di 
- [[Stages]]
- [[Scene]]
- [[Scene-Graph]]

## Classi

- [[Application]]

Il primo passo da compiere è chiamare il metodo `launch` appartenente alla classe [[Application]]. Siccome questa classe viene estesa dalla classe `Main`, il metodo `launch` viene ereditato. Per chiamarlo:

```java
public static void main(String[] args) {
	Launch(args);
}
```

- Per creare uno stage dobbiamo sovrascrivere il metodo start

	```java
	@Override
	public void start(Stage stage) {
		// Stage stage = new Stage();
		
	}
	```

- Per mostrare lo stage chiamo il metodo `show`:

	```java
	@Override
	public void start(Stage stage) {
		
		stage.show();
	}
	```

## Radici

Per creare un nodo radice, scelgo la tipologia di nodo da voler utilizzare, nell'esempio seguente uso `Group`

```java
	@Override
	public void start(Stage stage) {
		Group root = new Group();
		
		stage.show();
	}
```

```java
@Override
public void start(Stage stage) {
	Group root = new Group();
	Scene scene = new Scene(root);
	stage.show();
}

```

## Fxml