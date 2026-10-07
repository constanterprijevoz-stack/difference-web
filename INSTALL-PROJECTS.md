# BrandistiQ projekti — nova baza

Ovaj patch postavlja četiri istaknuta projekta na naslovnicu:
1. Smart-troškovnik
2. Gloss & Glow
3. DriveQ
4. Pro in mont jedan j.d.o.o.

EPR Check i EPR Report su označeni kao `draft: true`, pa se više ne prikazuju u javnom popisu ni na generiranim projekt stranicama.

Fotografije su unaprijed optimizirane u WebP formatu. Coveri su 16:9 za kartice i hero prikaze, a galerijske slike su ograničene na praktičnu web veličinu.

Za novi projekt kasnije je dovoljno:
- dodati cover u `public/projects/<slug>/`
- dodati gallery slike
- dodati jedan `.md` u `src/content/projekti/`
- dodati karticu na naslovnicu ako projekt treba biti među istaknuta 4.

Napomena: GitHub write pristup iz ove sesije trenutno je odbijen (403), zato je patch pripremljen za ubacivanje u repozitorij umjesto da tvrdim da je već commitan.
