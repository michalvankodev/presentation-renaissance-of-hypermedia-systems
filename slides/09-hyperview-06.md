<style>
  .grid-layout-proscons {
		display: grid;
		grid-template-columns: 50% auto;
	}
</style>

<div class="grid-layout-proscons">

<div>

#### Pros

- Any backend technology
- Instant updates on deploy
- Much lower need for backwards compatibility

</div>

<div>

#### Cons

- Offline support
- Network reliability
- Styling

</div>

</div>

Note: 

**Dôležité je vedieť si vybrať kedy je vhodne použiť práve túto architektúru**.

Je **vhodná keď váš produkt je práve o komunikácii medzi serverom a klientom**.

Tym, ze sme zavisli na tejto komunikacii, tak velmi tazko sa nam bude **implementovat offline support**.

Stylovanie HXML je tiez definovane ako XML prvky a je odlisne od uz znamych technologii.

Ak staviate **aplikaciu alebo hru kde sa všetko odohráva na strane klienta** tak vtedy je **dobré oddeliť túto logiku na samostatné riešenie**.

Nejedná sa vtedy ani o **prenos hypermedia**, takže **nieje dôvod sa nasilu snažiť použiť takyto prístup**. 

