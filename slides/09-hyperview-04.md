#### Mobile Navigation

<style>
  .grid-layout {
		display: grid;
		grid-template-columns: 70% auto;
	}
	code {
		font-size: 1rem;
		line-height: 1.2rem;
	}
</style>

<div class="grid-layout">

<div>

```xml
<doc xmlns="https://hyperview.org/hyperview">
  <screen>
    <body style="Body">
      <text style="Label">This is screen 1.</text>
      <text
        style="Label Label--Link"
        href="/case_studies/navigation/screen2.xml"
      >
        Click me
      </text>
    </body>
  </screen>
</doc>
```

```xml
<doc xmlns="https://hyperview.org/hyperview">
  <screen>
    <styles>
      <style id="Body" backgroundColor="white" flex="1" padding="48" />
      <style id="Label" fontSize="18" lineHeight="24" />
      <style id="Label--Link" color="blue" fontSize="18" />
    </styles>
    <body style="Body">
      <text style="Label">This is screen 2.</text>
    </body>
  </screen>
</doc>
```

</div>

<aside>

![navigation gif](img/navigation.gif)

</aside>
</div>

Note: 

Pre lepsiu predstavu sa mozme pozriet nato ako funguje navigacia medzi dvoma oknami.

Na prvom screene sa nachadza **odkaz ktory vyvola request na server** pre obsah druheho okna.

Navigacia sa udeje instantne. Namiesto obsahu druheho okna sa zobrazi loading indicator kym server neodpovie.

Hned ako nam pride odpoved zo servera, tak sa indicator vymeni za obsah odpovede.
