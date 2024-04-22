```xml
<view xmlns:maps="https://instawork.com/hyperview-map">
  <maps:map
    latitude="37.781229"
    longitude="-122.393232"
    latitude-delta="0.0922"
    longitude-delta="0.0421"
  />
</view>
```

Note:

Na druhej strane **logika servera sa môže meniť zo sekundy na sekundu** a pokiaľ klient ovláda všetky prvky ktoré sa posielajú tak **vieme riadiť aplikáciu a meniť vzhľad či štruktúru okien na požiadanie** alebo aspoň tak rýchlo ako viete **redeploynut váš produkčný server.**

To iste platí v prípade aj **webovych aplikacii kde nemusíme vymýšľať rôzne mechanizmy** kde musíme žiadať užívateľov aby si **reloadli stránku**.

**Dôležité je vedieť si vybrať kedy je vhodne použiť práve túto architektúru**.

Je **vhodná keď váš produkt je práve o komunikácii medzi serverom a klientom**.

Ak staviate **aplikaciu alebo hru kde sa všetko odohráva na strane klienta** tak vtedy je **dobré oddeliť túto logiku na samostatné riešenie**.

Nejedná sa vtedy ani o **prenos hypermedia**, takže **nieje dôvod sa nasilu snažiť použiť takyto prístup**. 

