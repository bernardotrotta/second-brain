Dal 2018 i siti con protocollo HTTP ricevono una classificazione come "Non protetto"

Google ha anche confermato che i siti Web con SSL godranno di vantaggi SEO e posizionamenti più elevati. Dall’anno scorso, un gran numero di siti Web è così passato da HTTP a HTTPS.

Metodi di convalida:

Esistono principalmente 3 tipi di certificati SSL, i certificati confermati dal dominio (verifica che tu sei il proprietario del dominio), quelli da un ente esterno (verifica che tu sei il proprietario dell'azienda) e certificati a validazione estesa (dimostra che hai legalmente registrato la tua azienda).

L’autorità di certificazione può generalmente convalidare tramite e-mail, DNS o HTTP.

Durante la convalida via e-mail, l’autorità di certificazione invierà una e-mail all’amministratore. Da lì, il proprietario del sito farà clic su un collegamento nell’email per richiedere un certificato da verificare.

Attraverso la **verifica via DNS invece**, l’utente convalida di essere il proprietario del sito tramite un record DNS collegato al dominio del sito web.

Un record DNS è un file di testo che mostra a quali indirizzi IP è associato ciascun dominio.

La **convalida HTTP** prevede invece che l’utente comprovi la proprietà del sito creando e salvando un file di testo nella cartella Web pubblica del proprio dominio.

---

## **Attivare Ssl / Https in Wordpress manualmente**

Questo metodo richiede di risolvere i problemi manualmente e modificare i file WordPress. Tuttavia questa è una soluzione permanente e più performante.

Per prima cosa, devi visitare **Impostazioni »** Pagina **generale** .Da qui è necessario aggiornare i campi di WordPress e indirizzo URL del sito sostituendo http con https.

Non dimenticare di fare clic sul pulsante “Salva modifiche” per memorizzare le tue impostazioni.

Una volta salvate le impostazioni, WordPress ti disconnetterà e ti verrà chiesto di effettuare nuovamente l’accesso.

Successivamente, devi impostare i **reindirizzamenti di WordPress da HTTP a HTTPS** aggiungendo il seguente codice al tuo file .htaccess .

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

```

Se si è su server nginx (la maggior parte degli utenti non lo sono), è necessario aggiungere il seguente codice per reindirizzare da HTTP a HTTPS nel file di configurazione:

```
server {
listen 80;
server_name example.com www.example.com;
return 301 https://example.com$request_uri;
}

```

Non dimenticare di sostituire [esempio.com](http://esempio.com) con il tuo nome di dominio.

Seguendo questi passaggi, eviterete che l’HTTPS di WordPress non funzioni, poiché WordPress caricherà l’intero sito Web utilizzando https.

Se si desidera forzare SSL e HTTPS nell’area di amministrazione di WordPress o nelle pagine di accesso, è necessario configurare SSL nel [file wp-config.php](https://translate.googleusercontent.com/translate_c?client=tw-ob&depth=1&hl=it&ie=UTF8&rurl=translate.google.it&sl=en&sp=nmt4&tl=it&u=https://www.wpbeginner.com/beginners-guide/how-to-edit-wp-config-php-file-in-wordpress/&xid=17259,15700021,15700186,15700190,15700248&usg=ALkJrhg8ggovpN4e4Ox3Ni69DFy06dSu-g) .

Aggiungi semplicemente il seguente codice sopra la riga *“Questo è tutto, smetti di editare!”* Nel tuo file wp-config.php:

```
define('FORCE_SSL_ADMIN', true);

```

Questa linea consente a WordPress di forzare SSL / HTTPs nell’area di amministrazione di WordPress.

Una volta fatto questo, il tuo sito Web è completamente configurato per utilizzare SSL / HTTPS, ma continuerai a riscontrare errori di contenuto misto.

Questi errori sono causati da fonti (immagini, script o fogli di stile) che vengono ancora caricati utilizzando il protocollo HTTP non sicuro negli URL. In questo caso, non potrai vedere l’icona di un lucchetto sicuro nella barra degli indirizzi del tuo sito web.

Molti browser moderni **bloccheranno automaticamente script e risorse non sicuri.** Potresti visualizzare l’icona di un lucchetto ma con una notifica a riguardo nella barra degli indirizzi del browser.

Puoi scoprire quale contenuto è scoperto da HTTPS attraverso un protocollo insicuro usando lo strumento Ispeziona del tuo browser. L’errore di contenuto misto verrà visualizzato nel codice.Noterai che la maggior parte degli URL ancora rimasti all’HTTP sono immagini, iframe e gallerie di immagini mentre alcuni sono script e fogli di stile caricati dai tuoi plugin e temi WordPress.

## Ricorda di Correggere gli Errori Dei Vecchi Link