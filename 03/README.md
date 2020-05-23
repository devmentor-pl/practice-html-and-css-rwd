# Ćwiczenie 03

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

Podobnie jak w poprzednim zadaniu będziesz musiał ustawić elementy w odpowiednim miejscu w zależności od zdefiniownaych punktów granicznych:
- do 599px (mobile)
- od 600px do 1199px (tablet)
- nie mniej niż 1200px (desktop)

W tym przypadku każdy z elementów to odpowiednio:
- `T` (Text) - treść na stronie składająca się z wielu linii
- `P` (Picture) - obraz, który ma wypełniać całą dostępną przestrzeń i utrzymywać proporcje
- `V` (Video) - film osadzony dzięki `<iframe>` z serwisu YouTube wypełniający całą dostępną przestrzeń

## Mobile

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P`
- `T`
- `V`

## Tablet

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P` `T`
- `V` `T`

Kolumna z zasobami tj. `P` oraz `V` nie powinna być mniejsza niż 200px oraz większa niż 50% dostępnej przestrzeni.

## Desktop

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P` `V`
- `T` `T`

Zawartość strony powinna mieć maksymalną szerokość 1400px. Przekraczając ta wartość po bokach powinna pojawiać się wolna przestrzeń.


# Zasoby

## Obraz

Obraz, który wybierzesz do umieszczenia na stronie powinien być umieszczony przy pomocy znacznika `<picture>`, aby móc serwować różne rozmiary (a nawet formaty) w celu lepszej optymalizacji szybkości wczytywania strony.

Obraz możesz pobrać z ramowego serwisu [pixabay.com](https://pixabay.com/pl/), natomiast konwersji do odpowiednich rozdzielczości i formatów możesz użyć [iloveimg.com](https://www.iloveimg.com/).

## Wideo

Jeśli chodzi o film wideo możesz wybrać dowolny z [YouTube](https://www.youtube.com/). Wystarczy, że przejdziesz do podstrony z konkretnym filmem i kliniesz w link "udostępnij". Tam wybierzesz z dostępnych opcji "Umieść (<>)". Pamiętaj, że ten kod będzie trzeba zmodyfikować, aby stał się responsywny.


&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/html-and-css-rwd/)
