```html
<html lang="en">
<body>
<h1>Joe Smith</h1>
<div>
    <div>Email: joe@example.bar</div>
    <div>Status: Active</div>
</div>
<p>
    <a href="/contacts/42/archive">Archive</a>
    <a href="/contacts/42/message">Message</a>
</p>
</body>
</html>
```

Note: 

Hypermedia aplikácie by mali podľa tohto modelu komunikovať pomocou hypertextu čiže HTML. Tak ako sa to robí stále na viac ako polovici všetkých stránok na internete.

Kedy, prečo, ako táto architektúra je vhodná na použitie?

Veľmi jednoduchá odpoveď: keď aplikacia vyuziva prevazne komunikáciu medzi hostiteľom a klientom.
Pod hostiteľom si predstavme server s databázou a business logikou a klient je zákazník ktorý prišiel využiť služby hostiteľa.

Na tomto priklade si mozeme vsimnut, ze klientovi su odprezentovane akcie ktore moze vykonat nad danym modelom.

