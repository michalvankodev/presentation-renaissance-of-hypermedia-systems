#### JSON with state

```json
{
"sortable": ["points", "rebounds"],
"data": [{
	"name": "Nikola Jokic",
	"played_time": 1920,
	"points": 32,
	"rebounds": 12,
	"birthday": "1995-02-19",
	"actions": [
		"star",
		"share"
	]
},
...
]}
```

Even more complexity and tight coupling between client and server

Note:

Mozeme tieto akcie pridat do JSONu ale to by nam vytvorilo len vacsiu komplexitu medzi klientom a serverom. Taktiez by sme tuto logiku museli implementovat na klientovi
