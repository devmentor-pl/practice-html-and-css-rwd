> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e02-html-and-css-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` HTML i CSS: Responsywność

Podobnie jak w poprzednim zadaniu ustawisz elementy w odpowiednim miejscu w zależności od zdefiniownaych punktów granicznych:
- do 599px (mobile),
- od 600px do 1199px (tablet),
- nie mniej niż 1200px (desktop).

W tym przypadku każdy z elementów to odpowiednio:
- `T` (Text) – treść na stronie składająca się z wielu linii,
- `P` (Picture) – obraz, który ma wypełniać całą dostępną przestrzeń i utrzymywać proporcje,
- `V` (Video) – film z serwisu YouTube osadzony dzięki `<iframe>`, wypełniający całą dostępną przestrzeń.

## Mobile

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P`
- `T`
- `V`

## Tablet

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P` `T`
- `V` `T`

Kolumna z zasobami, tj. `P` oraz `V`, nie powinna być mniejsza niż 200px oraz większa niż 50% dostępnej przestrzeni.

## Desktop

W tej wersji układ strony ma być zgodny z poniższą strukturą:

- `P` `V`
- `T` `T`

Zawartość strony powinna mieć maksymalną szerokość 1400px. Po przekroczeniu tej wartości po bokach ma pojawiać się wolna przestrzeń.


# Zasoby

## Obraz

Obraz, który wybierzesz do umieszczenia na stronie, powinien być osadzony przy pomocy znacznika `<picture>`, aby można było serwować różne rozmiary (a nawet formaty) obrazu w celu optymalizacji szybkości wczytywania strony.

Obraz możesz pobrać z darmowego serwisu [pixabay.com](https://pixabay.com/pl/), natomiast konwersję do odpowiednich rozdzielczości i formatów wykonasz np. w  [iloveimg.com](https://www.iloveimg.com/).

## Wideo

Możesz wybrać dowolny film z [YouTube](https://www.youtube.com/). Wystarczy, że przejdziesz do podstrony z konkretnym filmem i kliniesz w link "udostępnij". Tam wybierzesz z dostępnych opcji "Umieść (<>)". Pamiętaj, że kod ten będzie trzeba zmodyfikować, aby stał się responsywny.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-html-and-css-rwd/)*

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
