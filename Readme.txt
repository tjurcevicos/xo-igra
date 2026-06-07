##### X-O Game vs AI ####

Jednostavna X-O igra napravljena u HTML-u, CSS-u i JavaScriptu. Igra se pokreće u web pregledniku, a protivnik je računalo.

##### O projektu ####

Projekt je izrađen bez vanjskih biblioteka i namijenjen je kao primjer jednostavne web aplikacije. Igrač igra kao X, a računalo kao O. Nakon svakog poteza automatski se provjerava postoji li pobjednik ili je igra završila neriješeno.

#### Datoteke ####

```text
xo-igra/
├── index.html
├── style.css
├── script.js
└── README.md
```

#### Pokretanje ####

Otvori projekt u Visual Studio Codeu i pokreni datoteku `index.html` pomoću ekstenzije Live Server.

Alternativno možeš pokrenuti lokalni server naredbom:

```bash
python -m http.server 8000
```

Nakon toga otvori:

```text
http://localhost:8000
```

#### Kako igrati ####

Igrač koristi znak X.

Računalo koristi znak O.

Cilj je složiti tri ista znaka u red, stupac ili dijagonalu prije protivnika.

## Tehnologije

HTML

CSS

JavaScript
