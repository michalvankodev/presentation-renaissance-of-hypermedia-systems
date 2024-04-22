<center class="t-violet">DOM native</center>

```html
<script>
document.querySelector('.archive')
  .addEventListener('click', async () => {
    const response = await fetch('/contact/42/archive', { 
    method: "POST"
    })
    document.querySelector('#contact-view').innerHTML = response
  });
</script>
```

<center class="t-violet">HTMX</center>

```html
<section id="contact-view">
  <div
    class="archive"
    hx-post="/contact/42/archive" 
    hx-target="#contact-view"
  >
   Archive
  </div>
</section>
```

Note: 

**Ja by som si dovolil HTMX prirovnat ku tailwindu**.

Je to **kniznica, ktora abstrahuje** a **generalizuje caste akcie** a doplna HTML o funkcionalitu,
ktora je **bezna v interaktivnych webovych aplikaciach**.

Pomocou jedneho `hx-post` atributu HTMX **nahodi listener a nasledne vymeni** content `#contact-view`
odpovedou zo servra.
