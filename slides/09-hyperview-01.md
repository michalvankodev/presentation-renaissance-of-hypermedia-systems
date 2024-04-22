#### Hyperview

```xml
<doc xmlns="https://hyperview.org/hyperview">
  <screen>
    <styles>
      <style id="Body" backgroundColor="white" flex="1" padding="48" />
      <style id="Label" fontSize="18" lineHeight="24" />
      <style id="Label--Link" color="blue" fontSize="18" />
    </styles>
    <body style="Body">
      <text style="Label">This is screen 1.</text>
      <text style="Label Label--Link" href="/case_studies/navigation/screen2.xml">
        Click me
      </text>
    </body>
  </screen>
</doc>
```

Note:

**Dala by sa takáto architektúra využiť aj inde ako na webe?**

Tak ako sa **web development priblížil k mobilným aplikáciám.**, tym ze sa aplikacna logika nachadza na strane klienta.
**Čo keby sme priblížili mobilne a natívne aplikácie bližšie k webu?**

**Chcem vám predstavit, dá sa povedať, sesterskú knižnicu k HTMX a to je hyperview**.

**Keďže mobilné aplikácie natívne neovládajú HTML**,
tak nám treba vlastne nejaký jazyk,

**medzi serverom a klientom pomocou ktorého budú komunikovať, v tomto pripade HXML**,
tak aby **server vedel priamo posielať elementy a akú funkciu majú tieto elementy**
a **klient by mal vedieť zobrazovať tieto elementy a vykonávať ich spravanie**

