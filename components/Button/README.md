# Button

Buttons in three sizes (S 25px, M 35px, L 43px) and four looks: green outline (default), green fill (`primary`), grey fill and grey outline.

- Use `primary` for the one main action in a view (Download, Apply, Explore the gallery); everything else is `outline`.
- `grey` is the secondary action beside a primary one (Cancel next to Apply) — never on its own.
- `shape="pill"` with `icon="download"` is the dataset Download button in the record header.
- Labels are 16px bold (14px at S) — white on `brand` is 3.44:1, so do not set primary labels smaller than 14px bold.
- Consumer supplies: the label (children), `variant`, `size`, optional `icon` (any name in `GBIF.iconNames`) and `onClick`.
