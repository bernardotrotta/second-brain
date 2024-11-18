La **brace expansion** è una funzionalità della shell Bash che permette di generare automaticamente stringhe o serie di stringhe in base a un modello racchiuso tra parentesi graffe `{}`.

## Sintassi

- Le espressioni sono racchiuse tra parentesi graffe `{}`, e le alternative all'interno sono separate da virgole `,`.
- La shell espande ogni combinazione possibile dei valori indicati.

## Esempi

1. **Elenco di stringhe:**
   - Comando: `echo {rosso,verde,blu}`
   - Output: `rosso verde blu`
   
2. **Sequenze numeriche:**
   - Comando: `echo {1..5}`
   - Output: `1 2 3 4 5`

3. **Sequenze di lettere:**
   - Comando: `echo {a..d}`
   - Output: `a b c d`

4. **Aggiungere prefissi/suffissi:**
   - Comando: `echo file{1..3}.txt`
   - Output: `file1.txt file2.txt file3.txt`

5. **Combinazione di brace expansion:**
   - Comando: `echo {a..c}{1..2}`
   - Output: `a1 a2 b1 b2 c1 c2`

## Usabilità

- È utile per generare rapidamente nomi di file o sequenze di comandi.
- Può essere combinata con altri comandi come `mkdir`, `touch`, `cp`, ecc.
  - Esempio: `mkdir dir{1..3}` crea le directory `dir1`, `dir2`, e `dir3`.

### Nota

- La brace expansion avviene **prima** che le wildcard vengano elaborate dalla shell.