## Hypermedia system

- <span class="hyper-highlight">hyper</span>media, such as HTML.
- network protocol, such as HTTP.
- server that presents a hypermedia API responding to network requests with hypermedia responses.
- client that properly interprets those responses.

Note:

Za Hypermedia system alebo architekturu taku architekturu ktora obsahuje tieto 4 jednoduche prvky.

Tento koncept nam radi vyuzit hypermedia ako samotne medium ktorym komunikujeme s klientom.

Klient vie elementy zobrazovať a pozna ich spravanie a zákazník/uzivatel vie s nimi interagovat.

Ku kontrastu s "modernymi" Webovymi aplikaciami sa tento system lisi najma v tom,
ze server si berie zodpovednost prezentovat a vytvarat obsah ktory sa ma zobrazit.

Klient nemusí ovládať business logiku alebo a ani spravanie sa modelov. Vyhýbame sa prvému veľkému bottlenecku typických SPA alebo mobilných aplikácií. Kde je nutný prenos logiky ako sú pospájané rôzne routy a ako vyskladať view/elementy keď prídu čisté data zo servera.

Nieje ziadne pravidlo ze by sa na klientovi nemal vyskytovat ziaden script ale klient by nemal riadit stav aplikacie.

 
