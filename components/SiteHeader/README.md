# SiteHeader

2026 site header: 60px top bar (`surface-header`, leaf mark, main nav, API/translate/search/feedback glyphs, Login), optional category tab row starting with "Any", optional `surface-filterbar` of FilterChips.

- One per page. Pass `categories` on search pages only; `filters` when filters are applied.
- Consumer supplies `nav`, `categories`, `activeCategory`, `filters`.
