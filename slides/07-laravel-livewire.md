## Laravel Livewire

```html
<button class="btn btn-primary" wire:click="toggleLike()">
    Like
</button>
@if ($liked)
    <i class="fa fa-heart text-danger h4"></i>
@else
    <i class="fa fa-heart text-secondary h4"></i>
@endif
```

```php
<?php
use Livewire\Component;
class PostAlert extends Component{
  public $liked = true;
  public function render(){
    return view('livewire.post-alert');
  }

  public function toggleLike(){
    $this->liked = !$this->liked;
  }
}
```

Note:

Laravel LiveWire je celkom novinka. Doplnuje Laravel o moznost interaktivne menit view componentou cez client-server komunikaciu podobne ako Phoenix LiveView.

LiveWire najprv zobrazi pociatocny component klasicky cez server side render. Ked nastane interakcia tak sa zavola AJAX request so zmenamy. Server potom prerenderuje component a odosla novo upraveny HTML spat klientovi. 
Na klientovy sa potom zmutuje DOM podla toho co server odpovedal.

Rozdiel medzi phoenixom je v tom ze phoenix vyuziva na vymenu dat priamo websockety.
LiveWire componenty sa daju napojit na websockety pomocou Laravel Echo ale samotny system renderovania sa stale daje cez AJAX.
