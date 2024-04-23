#### Infinite scroll

<style>
  .grid-layout-infinite {
		display: grid;
		grid-template-columns: 70% auto;
	}
	.grid-layout-infinite code {
		font-size: 0.9rem;
		line-height: 0.9rem;
	}
</style>

<div class="grid-layout-infinite">

<div>

```xml
<doc xmlns="https://hyperview.org/hyperview">
  <screen>
    <body style="Body">
      <list>
        <item key="1" style="Item">
          <text style="Item__Label">Item 1</text>
        </item>
        // ... items 2 - 19 omitted
        <item key="20" style="Item">
          <text style="Item__Label">Item 20</text>
        </item>
        <item
          style="Spinner"
          key="loadMore"
          trigger="visible"
          once="true"
          href="/case_studies/infinite_scroll/page2.xml"
          action="replace"
        >
          <spinner />
        </item>
      </list>
    </body>
  </screen>
</doc>
```

```xml
<items xmlns="https://hyperview.org/hyperview">
  <item key="21" style="Item">
    <text style="Item__Label">Added: Item 21</text>
  </item>

  // ... items 22 - 29 omitted

  <item key="30" style="Item">
    <text style="Item__Label">Added: Item 30</text>
  </item>
</items>
```

</div>

<div>

![infinite scroll gif](img/infinite-scroll.gif)

</div>

</div>

Note: 

Dalsim jednoduchym prikladom je infinite scroll

Na spodku listu sa nachadza `Spinner` element ktory definuje **logiku svojimi attributmi**

`trigger` urcuje kedy sa ma vykonat definovana akcia.

Akonahle sa tento **spinner dostane do obrazu**, tak sa **vyvola poziadavka na server** pre obsah dalsej strany poloziek.

Ked nam server odpovie, tak sa vykona akcia `replace` ktora **nahradi tento spinner obsahom odpovede**.

Ak by **server chcel indikovat, ze su este nejake dalsie polozky, tak by sa v tejto odpovedi nachadzal dalsi spinner element**.

Kedze sa nenachadza tak uz nieje treba nacitavat dalsie polozky.

