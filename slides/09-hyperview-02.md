
```javascript
import Hyperview from 'hyperview';
import MapView from 'react-native-maps';

export default class HyperviewMap extends PureComponent<Props> {
  static namespaceURI = 'https://instawork.com/hyperview-map';
  static localName = 'map';

  render() {
    // Parses the HXML elements attributes.
    // Returns styles and custom props.
    const props = Hyperview.createProps(
      this.props.element,
      this.props.stylesheets,
      this.props.options,
    );
    // Render any HXML sub-elements using Hyperview.
    const children = Hyperview.renderChildren(...);
    const region = { ... }
    return (
      <MapView {...props} region={region}>{children}</MapView>
    );
  }
}
```

Note:

**Hyperview je react-native boilerplate** ktory je vlastne ako taký malý alternatívny browser.

**Ak chcete vymyslieť vlastné správanie komponentov**, tak si vytvoríte nativny **custom element na strane klienta** ktoremu urcite ako sa má správať.

Pri každej takejto zmene treba rátať s tým, že aplikácie si musia **ľudia na svojích zariadeniach updateovat** a taktiež že takéto updatey sa ešte musia dostať aj **do mobilných obchodov**.

