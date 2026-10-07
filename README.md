# Smart-troškovnik project system — v2

Ovo je ispravljena baza za sve buduće projekte.

- Naslovna fotografija je zaseban 16:9 web cover, ne veliki mobilni screenshot.
- Gallery fotografije su smanjene na praktičnu web širinu.
- Astro `<Picture>` generira AVIF/WebP varijante i responsive širine.
- Galerija je lazy-loaded.
- Fotografije nisu više ogromni full-width blokovi: svaka je u kontroliranom media okviru i ima pripadajući tekst.
- Na desktopu se slika i tekst izmjenjuju lijevo/desno; na mobitelu se slažu jedan ispod drugoga.
- Homepage ProjectCard ima opcionalni cover.
- Za svaki novi projekt koristimo isti frontmatter: cover, coverAlt, externalUrl i gallery.
