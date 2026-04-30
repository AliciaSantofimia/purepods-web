# PurePods – Agent Context

This project stores its documentation in the `/docs` directory.

These files define the rules, structure and behaviour of the PurePods website.

Always consult these files before generating or modifying code, content or layouts.

## Source of truth

The following documents must be treated as the source of truth for the project:

- docs/project-overview.md
- docs/brand-guidelines.md
- docs/language-rules.md
- docs/pods-and-naming.md
- docs/booking-logic.md
- docs/html-reference.md
- docs/assets-images.md
- docs/footer-pages-content.md

## Rule

When generating or editing code, content or structure:

- Follow the rules defined in the `/docs` files.
- Do not invent rules outside these documents.
- Respect naming conventions, booking logic and page structure defined in the documentation.

 ## Next.js as the source of truth

This project’s production website must be implemented in **Next.js**, not as standalone HTML files.

### Rules

* All new production pages, sections, and features must be built inside the real Next.js app structure.
* Use `app/`, `components/`, `lib/`, and `public/` as the source of truth for anything that should appear in production.
* Do **not** create or maintain new production functionality in standalone `.html` files.
* HTML files inside `reference-html/` are reference material only, not production code.
* If an old HTML page is used as a visual/content reference, its final implementation must be migrated into the real Next.js route/component before being considered complete.
* A page visible through Live Server is **not** considered a valid final implementation unless the same result exists in the actual Next.js app.
* Any route intended for Vercel deployment must be connected to the real Next.js routing and component system.

### Migration guidance

* When migrating an old HTML page, keep the visual and content fidelity, but implement it using the existing Next.js architecture and shared components where appropriate.
* Avoid duplicate sources of truth. Do not leave a completed feature split between `reference-html/` and the real app.
* If something is only a prototype or internal experiment, label it clearly as non-production and avoid mixing it with real deployed routes.

When implementing or editing a page, always state the real Next.js route and the source files used for production.

