# Restaurant Survey Analytics redesign

The portfolio combines a serif editorial hero with four linked photographic
research overview cards, KPI links, a grouped Research Findings navigation,
and four detailed photo panels in two columns, including on mobile. Expandable
research preserves the original analysis and charts. Satisfaction controls
highlight categories without altering values. Decorative numbering is removed.

The final CSS variables are Dark Sapphire `#081A35`, Warm Amber `#E5961A`,
Midnight Ink `#050E20`, Warm Ivory `#F8F4E9`, and Dusty Blue `#A8B6D2`.
Amber buttons have dark text; chart labels remain readable, and the Very Bad
category has a stripe pattern to distinguish it from other dark bars.

Nine optimized JPEGs come from the owner's existing Pexels uploads. Originals
remain unchanged. Credits and photo links are available in the website and
PHOTOGRAPHY.md. There are no AI-generated photographs or runtime asset CDN
requests. Credit names follow uploaded filenames; current Pexels metadata was
not independently retrieved through the cloud proxy.

The original findings and nine chart bar widths are preserved. The original
page reports 72% female share, 28% male share and 64% Retention Index. The index
has no supplied definition; no sample count is supplied. The requested
“500+ responses” remains flagged rather than presented as a measured finding.
See RESEARCH-AUDIT.md for the exact source evidence and limitations.

## Local development

No package installation or build step is required. From the repository:

```sh
python3 -m http.server 8000
```

The page can also be opened directly in a browser. CSS, JavaScript, and images
use relative paths compatible with a GitHub Pages project site. Deployment
settings and workflows are unchanged. Only the redesign's site files,
optimized assets and review documentation belong in this change.

## Validation

- All local image, CSS and JavaScript paths respond successfully under
  `/RestaurantSurveyAnalytics/`; all nine JPEGs decode in Chromium.
- Section anchors, grouped navigation, hero and Learn more links work.
- Native disclosures work by keyboard; satisfaction controls retain values.
- Responsive layouts checked at 1440, 834, 390 and 320 pixels, with research
  details both closed and expanded. Two research columns remain on mobile.
- Reduced-motion behavior, no horizontal overflow and no JavaScript errors.
- Main color pairs exceed WCAG AA text contrast; important chart labels
  identify categories without relying on color alone.
- Original insight/recommendation statements and chart widths retained.

Actual GitHub Pages deployment is left to the repository's existing
configuration after the owner reviews and merges the pull request.
