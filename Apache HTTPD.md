Useremo il browser con curl, command line tool che permette di fare richieste http

```bash
curl -X GET bernardotrotta.com
```

Il risultato è tutto il testo html della pagina

`wget` È progettato per il download di file, in particolare per eseguire download ricorsivi e per scaricare interi siti web. È ottimo per scaricare file singoli o per fare il mirroring di siti web, supportando HTTP, HTTPS e FTP.

```
GET /hello.html HTTP/1.1
Host: webapp0.example.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/24.0
Accept: text/html, application/xhtml+xml, application/xml;q=0.9,

```

Importante disabiltare il firewall

Come funzionano i permessi? Forbidden lato server o lato linux? 

/etc/hosts

## Cose da Evitare All'esame

- Importante la configurazione del virtual host
- Unica cosa di fare nella etc/httpd/conf è modificare la porta