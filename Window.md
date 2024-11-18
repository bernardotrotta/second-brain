[[Timers (JavaScript)]]

L'oggetto `window` rappresenta la finestra del browser e fornisce numerose proprietà e metodi per interagire con la pagina web e l'ambiente del browser.

## 1. Informazioni Sul Browser e Ambiente

- `window.navigator`: contiene informazioni sul browser e sul sistema operativo.
- `window.location`: fornisce informazioni sull'URL corrente e metodi per reindirizzare la pagina.
- `window.history`: consente di navigare nella cronologia del browser.
- `window.screen`: fornisce dettagli sullo schermo dell'utente, come risoluzione e dimensioni.

## 2. Dialog Boxes e Prompt

- `window.alert(message)`: mostra una finestra di dialogo con un messaggio e un pulsante OK.
- `window.confirm(message)`: mostra una finestra di dialogo per confermare, con pulsanti OK e Annulla.
- `window.prompt(message, default)`: visualizza un prompt di input con testo opzionale e valore predefinito.

## 3. Timer e Interval

- `window.setTimeout(function, delay)`: esegue una funzione una sola volta dopo un ritardo specificato.
- `window.setInterval(function, interval)`: esegue una funzione ripetutamente ogni intervallo di tempo specificato.
- `window.clearTimeout(id)`: cancella un timeout precedentemente impostato.
- `window.clearInterval(id)`: cancella un intervallo precedentemente impostato.

## 4. Gestione Del Documento e Del Dom

- `window.document`: rappresenta il documento HTML caricato nella finestra, che permette di manipolare il DOM.
- `window.getComputedStyle(element)`: ottiene lo stile computato di un elemento.

## 5. Eventi Globali e Ascoltatori

- `window.addEventListener(type, listener)`: aggiunge un ascoltatore di eventi alla finestra.
- `window.removeEventListener(type, listener)`: rimuove un ascoltatore di eventi dalla finestra.
- Eventi comuni:
  - `load`: evento scatenato quando la pagina è completamente caricata.
  - `resize`: evento scatenato quando la finestra viene ridimensionata.
  - `scroll`: evento scatenato durante lo scorrimento della pagina.

## 6. Storage e Gestione Dati

- `window.localStorage`: permette di salvare dati nel browser che persistono tra sessioni.
- `window.sessionStorage`: permette di salvare dati nella sessione corrente del browser.
- `window.cookies`: permette di gestire i cookie attraverso il documento (`document.cookie`).

## 7. Contesto di Visualizzazione

- `window.innerHeight` / `window.innerWidth`: altezza e larghezza dell'area visibile della finestra.
- `window.outerHeight` / `window.outerWidth`: altezza e larghezza della finestra, inclusi bordi e barra degli strumenti.
- `window.scrollX` / `window.scrollY`: coordinate di scorrimento orizzontale e verticale.

## 8. Metodi di Navigazione e Controllo Della Finestra

- `window.open(url, target)`: apre una nuova finestra o tab con l'URL specificato.
- `window.close()`: chiude la finestra corrente (richiede autorizzazione o aperture gestite da script).
- `window.moveTo(x, y)`: sposta la finestra in posizione specifica (limitato da impostazioni del browser).
- `window.resizeTo(width, height)`: ridimensiona la finestra (spesso limitato da impostazioni del browser).

## 9. Console e Debugging

- `window.console`: console per il debugging e logging.
  - `console.log(message)`: mostra un messaggio nella console.
  - `console.error(message)`: mostra un messaggio di errore.
  - `console.warn(message)`: mostra un messaggio di avviso.

## 10. Altri Metodi e Funzionalità

- `window.fetch(url)`: API per effettuare richieste HTTP e recuperare risorse (Promise-based).
- `window.requestAnimationFrame(callback)`: pianifica un callback da eseguire prima del prossimo repaint, per animazioni fluide.
- `window.cancelAnimationFrame(id)`: annulla una callback di animazione precedentemente richiesta.
- `window.matchMedia(query)`: valuta una media query e ritorna un oggetto `MediaQueryList`.

