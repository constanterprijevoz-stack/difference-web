# Difference — V5 production/legal patch

This package contains the production fixes prepared for the existing `crnavatra749-sudo/difference-usluge-web` project.

## Included

- Article schema is now actually passed to `BaseLayout`.
- Real `publishedAt` / `updatedAt` values are used only when present.
- Sitemap link is added to the document head.
- Google Analytics is blocked until analytics consent is given.
- Cookie consent UI supports Accept / Reject / Settings.
- Footer contains a persistent “Postavke kolačića” control.
- Privacy and Cookie pages are complete enough for the current stated configuration.
- Contact-form wording is changed from “consent” to a privacy-notice acknowledgment.
- Security headers and immutable Astro asset caching are added.
- START-HERE is updated.

## Important

The legal text is based on the currently known configuration. It is not a substitute for individualized legal advice. If the technical setup changes, the legal pages must change with it.

Before production analytics:
1. verify the legal business details;
2. verify Netlify Forms and its notification recipient;
3. set `PUBLIC_GA_ID`;
4. test the cookie banner in a clean browser session;
5. confirm that Google Analytics requests do not appear before analytics is accepted.
