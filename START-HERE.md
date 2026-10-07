# START HERE — V5

1. Apply the files in this V5 package to the existing `difference-usluge-web` repository.
2. Let Netlify deploy automatically.
3. Verify `/privatnost/` and `/kolacici/`.
4. Verify `/vodic/` articles and inspect their Article structured data.
5. Open `/kontakt/` and submit a real test message.
6. In Netlify, go to Forms and confirm automatic form detection is enabled and the `kontakt` form is listed.
7. Configure an email notification for the `kontakt` form.
8. Keep `PUBLIC_GA_ID` empty until the production privacy/cookie setup has been checked.
9. When ready for analytics, add `PUBLIC_GA_ID` as a Netlify environment variable. Google Analytics will load only after the visitor accepts analytics.
10. Add `PUBLIC_GOOGLE_SITE_VERIFICATION` when Search Console verification is ready.
11. Submit `https://difference-usluge.com.hr/sitemap-index.xml` to Google Search Console after the production domain is live.

## Legal / privacy checklist

- Confirm the public business details on the legal pages before launch.
- The contact-form checkbox is an acknowledgment that the privacy notice was read; the processing of an inquiry should not be presented as optional marketing consent.
- Analytics is blocked until the visitor gives an explicit analytics choice.
- The cookie banner is rendered only when `PUBLIC_GA_ID` is configured, because the current static site does not otherwise require non-essential analytics consent.
- If you add Meta Pixel, Google Ads, a newsletter, embedded third-party media, CRM integrations or another tracking/marketing tool, update both legal pages and the consent implementation before activating it.
- Netlify Forms must be checked in the actual Netlify account because notification recipients are configured in Netlify, not in this repository.
