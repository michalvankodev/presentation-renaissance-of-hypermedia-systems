### Hypermedia as the engine of application state

#### HATEOAS

> software design on the scale of decades: every detail is intended to promote software longevity and independent evolution

[REST APIs must be hypertext-driven by Roy Fielding - 2000](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)


Note:

Jednym z konceptov hypermedia systemov a **navrhou REST systemov je Hypermedia as the engine of application state**.

Tento koncept nie je novinka. **Roy Fielding** ho v roku 2000 vo svojej **dizertacnej praci spaja s REST architekturov**. Prave tato dizertacna praca tuto architekturu opisuje a udava REST principy do povedomia.

**Klient by nemal ovládať business logiku a ani spravanie sa modelov.**

Vyhýbame sa tym veľkému **bottlenecku typických SPA alebo mobilných aplikácií**.

Kde je **nutný prenos logiky ako sú pospájané rôzne routy** a ako **vyskladať obsah keď prídu čisté data** zo servera.

**Nieje ziadne pravidlo ze by sa na klientovi nemal vyskytovat ziaden script** ale **klient by nemal riadit stav aplikacie**.
