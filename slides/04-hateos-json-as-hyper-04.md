#### JSON as hypermedia

```json
{
	"elements": [
		{ "el": "table", "children": [
		  { "el": "table-row", "children": [
				{ "el": "table-header", "text": "Name" },
				{ "el": "table-header", "text": "Points" },
				{ "el": "table-header", "text": "Rebounds" },
				{ "el": "table-header", "text": "Played" },
				{ "el": "table-header", "text": "Actions" },
			]},
		  { "el": "table-row", "children": [
				{ "el": "table-cell", "text": "Nikola Jokić" },
				{ "el": "table-cell", "text": "32" },
				{ "el": "table-cell", "text": "12" },
				{ "el": "table-cell", "text": "39:23" },
				{ "el": "table-cell", "children": [
					{ "el": "link", "href": "/player/15/star", "text": "Star" },
					{ "el": "button", "action": "copy-clipboard", "text": "Share" },
				] },
...
}
```

- Client has to know how to parse and display elements


Note:

Kebyze sme sa ozaj rozhodli ze by sme chceli pouzit JSON na prenos dat v hypermedia systeme,
tak ten JSON by mal vyzerat nejak takto.
Client stale nemusi ovladat logiku nasej aplikacie ale musi ovladat moznosti zobrazovania definovanych elementov.
To ci sa vam lepsie parsuje JSON ako HTML alebo XML je len otazka vkusu a performance parsera ktory si vyberieme.

