# GBIF.org Design System

Colours, typography, spacing, icons, logos and React components for GBIF.org, exported from the 2026 Adobe XD designs (`GBIF-2026.xd`, `search - 2026.xd`).

**Browse it:** https://javiesgm.github.io/Design-system-test/ (once GitHub Pages is on)

## What's here

| Path | What |
| --- | --- |
| `index.html` | The documentation site: guidelines, colour ramps, type scale, icons, logos and live component previews |
| `tokens/tokens.css` | All design tokens as CSS custom properties, plus a class per type style |
| `tokens/tokens.json` | Source tokens with usage notes and aliases |
| `tokens/tokens.flat.json` | Resolved values (hex, px) for tools that don't read CSS |
| `components/bundle.js` · `bundle.css` | 35 React 18 components as `window.GBIF` |
| `components/index.d.ts` | Props for every component |
| `components/<Name>/` | Live preview and usage guideline per component |
| `assets/logos/` | GBIF logo and leaf marks (SVG) |
| `assets/icons/` | Content-type, interface and social icons (SVG) |
| `assets/images/` | Sample occurrence photos used in the designs |
| `vendor/` | React 18.3.1 (MIT) for the previews |

## Use it

```html
<link rel="stylesheet" href="https://javiesgm.github.io/Design-system-test/tokens/tokens.css">
```

```css
.cta { background: var(--brand); color: var(--on-brand); border-radius: var(--radius-sm); }
```

## Contributing

Suggest changes or report problems through Issues. Values come from the XD source files; when the designs change, the tokens, components and assets here are regenerated from them.
