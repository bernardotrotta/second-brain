- La shell inteattiva di [[Python]] immagazzina l'ultima espressione in una variabile chiamata `_`

```python
 5 + 4
 
### Output
9

### Input
_

### Output
9
```

- `Underscore(_)` può essere utilizzato per ignorare una variabile durante l'assegnazione

```python
a, _, b = (1, 2, 3)
a, *_, b = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(a, b)

### Output

1 3
1 9
```

---

