# Brand Guidelines

This document defines how the PurePods brand should feel, sound and present itself across the website.

---

## Brand Tone & Feel

PurePods communicates through calm, clarity and restraint.

The tone should feel natural and confident, never forced or promotional.  
It invites rather than persuades, and allows space for the experience to speak for itself.

The tone is:

- quiet and confident, never loud or sales-driven  
- warm, human and sensory, without exaggeration  
- minimal and considered, but never cold or distant  
- premium in feeling, without being elitist or exclusive  
- emotional, without becoming sentimental or descriptive for its own sake  

Language should feel curated and intentional.

Short, clear sentences are preferred over long explanations.  
Every word should earn its place.

## What to Avoid

Avoid language that feels:

- overly promotional
- exaggerated
- overly descriptive
- cliché or generic tourism language

PurePods communication should remain calm, grounded and authentic.s

## Voice & Tone

The PurePods website should use a tone of voice that is clear, inviting and accessible to a wide audience.

The tone should feel premium and refined, but never elitist or overly complex.

### Key Characteristics

The voice should be:

- simple and easy to understand  
- warm and human  
- evocative and inspiring  
- calm and confident  
- inclusive and welcoming  

The language should create curiosity and anticipation, encouraging visitors to imagine the experience and feel motivated to book.

### Avoid

Avoid language that feels:

- overly technical  
- unnecessarily complex  
- exaggerated or overly promotional  
- aggressive or sales-driven  

The voice should remain aspirational but natural, allowing the beauty of the experience and the landscape to speak for itself.

## Design Principles

The design of the PurePods website should reflect the experience of staying in a PurePod: calm, immersive and connected to nature.

The visual style should feel premium but natural, allowing the landscape and photography to take the leading role.

---

## Typography & Color System

This section defines the visual identity of PurePods through typography and color usage.

All pages must follow these rules to ensure visual consistency across the site.

---

### 1. Typography

Typography must reflect the PurePods brand: calm, refined, and highly readable.

---

#### 1.1 Primary Font (Body & UI)

**Font family:**
"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif

**Usage:**
- body text (paragraphs)
- navigation
- buttons
- subtitles
- section headings (H2, H3)
- price display
- UI elements

**Font weights:**
- 400 → Regular (default body)
- 500 → Medium
- 600 → SemiBold
- 700 → Bold
- 800 → ExtraBold (buttons, emphasis)

---

#### 1.2 Secondary Font (Hero)

**Font family:**
"Noto Serif Display", Georgia, "Times New Roman", serif

**Usage:**
- main hero title only (`h1.heroTitle`)

**Font weights:**
- 400
- 500
- 600

---

### Typography Rules

- Use the secondary font ONLY for the main hero title
- All other text must use the primary font
- Do not introduce additional fonts
- Maintain a clear hierarchy between headings and body text
- Avoid excessive font weight variations
- Typography must remain consistent across all pages

---

### Implementation Rules

- Do not override typography at page level unless explicitly required
- Do not use inline font styles unless strictly necessary
- Always rely on global CSS or design system variables
- Do not mix serif and sans-serif fonts outside defined usage

---

### 2. Color Palette

Colors are defined globally using CSS variables (`:root`) and must be reused consistently.

```css
:root{
 --bg:#F7F6F3;
 --ink:#5C5F3E;
 --muted: rgba(92,95,62,.72);
 --card: rgba(255,255,255,.85);
 --stroke: rgba(92,95,62,.18);
 --brand-green:#5C5F3E;
 --brand-beige:#C2B59E;
}

#### 2.1 Primary Brand Green

**Hex:** #5C5F3E  
**RGB:** 92, 95, 62  

**Usage:**
- section headings
- highlighted links
- price display
- navbar (solid state)
- core brand elements

---

#### 2.2 Secondary Brand Beige

**Hex:** #C2B59E  
**RGB:** 194, 181, 158  

**Usage:**
- primary buttons
- call-to-action backgrounds
- visual accents

---

#### 2.3 Main Background

**Hex:** #F7F6F3  

**Usage:**
- global page background

---

#### 2.4 Secondary Text

**Value:** rgba(92,95,62,.72)

**Usage:**
- paragraphs
- descriptive text
- supporting content

---

#### 2.5 Borders & Dividers

**Value:** rgba(92,95,62,.18)

**Usage:**
- card borders
- dividers
- subtle outlines

---

### Color Rules

- Always use defined variables; do not hardcode colors
- Maintain strong contrast and readability
- Do not introduce new colors unless explicitly defined
- Use brand green for emphasis, not overuse
- Keep visual balance aligned with a calm, minimal aesthetic

---

### Priority

Typography and color consistency are core to the PurePods brand identity.

These rules must be strictly followed across all pages.