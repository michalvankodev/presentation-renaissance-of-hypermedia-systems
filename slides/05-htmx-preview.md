# </> HTMX

htmx gives you access to **AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML**, 
using attributes, so you can build modern user interfaces with the simplicity and power of hypertext

```html
<div hx-ws="connect:wss:/chatroom">
    <div id="chat_room">
        ...
    </div>
    <form hx-ws="send:submit">
        <input name="chat_message">
    </form>
</div>
```


Note:

## htmx preview

Webových developerov bude možno zaujímať HTMX viac. Kľudne sa o ňom môžme porozprávať potom. Tí ktorí sa pýtate čo HTMX je: Je to JavaScriptová knižnica ktorá implementuje práve hypermedia architektúru, tak, že je možné písať webové aplikácie v ľubovoľnom Tech stacku alebo programovacom jazyku keď sa to dá tak zjednodušene povedat. Dá sa pomocou nej vytvárať takmer plnohodnotné webové aplikácie. Ja by som chcel venovať viac pozornosti práve hypermedia architektúre lebo htmx je len webová implementácia tejto architektúry a nieje ani jediná.

Za hypermedia architektúru sa dá považovať viacero rôznych techník a dá sa taktiež aplikovať aj mimo webových aplikácií.
