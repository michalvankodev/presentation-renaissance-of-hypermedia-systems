#### HTML with state

```html
  <tr>
    <th>Name</th>
    <th>Points</th>
    <th>Rebounds</th>
    <th>Played</th>
		<th>Actions</th>
  </tr>
	<tr>
	  <td>Nikola Jokić</td>
	  <td>32</td>
	  <td>12</td>
	  <td>39:23</td>
	  <td>
			<a href="player/15/star">Star</a>
			<button @click="navigator.clipboard.writeText('...');">>Share</button>
		</td>
	</tr>
```
- More bandwidth needed for repeatedly accessing additional pages of data
- No parsing needed

Note:

**Narozdiel od tradicneho JSONu**, **hypermedia system odpoveda priamo** s tym co sa ma zobrazit.
V odpovedi sa **nachadzaju vsetky mozne akcie klienta** a browser uz vie ako ich zobrazit,
cize **nieje potrebna ziadna predpriprava ani logika, ktora by naucila browser ako funguje nas produkt**.


