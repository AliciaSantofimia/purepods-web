# HTML Reference Structure

The project includes a set of reference HTML files located in the `reference-html` directory.

These files represent the **visual and structural reference** of the current PurePods pages and should be used as guidance when recreating pages in the new website.

They are **not production code**, but a reference for layout, content structure and page hierarchy.

---

## Folder Structure

The folder structure mirrors the real URL structure of the website.

Example:

reference-html/
  location/
    kahutara/
      index.html
    atatu/
      index.html
    greystone/
      index.html
  experiences/
    night-falls/
      index.html
  home/
    index.html

Example URL mapping:

- `/location/kahutara` → `reference-html/location/kahutara/index.html`
- `/experiences/night-falls` → `reference-html/experiences/night-falls/index.html`
- `/` → `reference-html/home/index.html`

---

## Usage Rules

These files should be used as **design and structure references only**.

When recreating pages in the new website:

- Recreate layouts using **reusable components**
- Do not copy entire HTML files directly
- Avoid copying inline styles unless strictly necessary
- Maintain the same **semantic structure** where possible (headings, sections, hierarchy)
- Preserve important **SEO elements** such as:
  - page titles
  - meta descriptions
  - heading hierarchy (H1, H2, etc.)
- Respect the real URL structure (e.g. `/location/kahutara`)

---

## Purpose

These reference files exist to guide:

- page layout
- section structure
- content hierarchy
- page organisation

They help ensure the new site maintains consistency with the current PurePods experience.

## Important Rule

Do not change the URL structure of existing pages unless explicitly required.

## Page Structure Guidelines

Pages on the PurePods website should follow a clear and consistent storytelling structure.

The goal is to guide visitors naturally through the experience while keeping the layout calm, visual and easy to explore.

Images should lead the experience, with text supporting the visual narrative.

---

### Typical Page Structure

Most pages (pods and experiences) should follow a structure similar to:

**Hero section**
- large visual image or video
- page title
- short introductory line

**Introduction**
- short paragraph introducing the place or experience
- simple and inviting language

**Highlights**
- key elements of the experience
- presented as short points or small sections

**Visual storytelling**
- image galleries or visual sections
- minimal text that complements the images

**Context or location**
- information about the surroundings
- nature, landscape, nearby experiences

**Booking call to action**
- clear invitation to check availability or book

---

### Content Principles

When generating content:

- keep paragraphs short
- prioritize readability
- avoid long blocks of text
- let images lead the page
- maintain a calm rhythm between visuals and text

### Key Design Principles

**Simplicity first**

Interfaces should be clean and uncluttered. Avoid unnecessary visual complexity.

**Photography-led design**

Large, high-quality images should guide the experience. Text supports the visuals rather than dominating the page.

**Calm visual rhythm**

Pages should feel spacious and relaxed, with generous spacing and a clear visual hierarchy.

**Premium but approachable**

The design should feel refined and high-end without feeling exclusive or intimidating.

**Consistency across pages**

Layout patterns, components and spacing should remain consistent across pods, experiences and other pages.

---

### Layout Guidelines

- Use large visual sections  
- Avoid dense blocks of text  
- Maintain generous spacing between sections  
- Keep navigation simple and intuitive  
- Allow content to breathe with balanced whitespace  

---

### Visual Tone

The overall feeling of the website should be:

- calm  
- natural  
- immersive  
- elegant  
- understated

## Navigation & User Flow

Navigation on the PurePods website should remain simple, intuitive and efficient.

Visitors should be able to move naturally from inspiration to booking without navigating through complex structures.

---

### Navigation Principles

The navigation should:

- be intuitive and easy to understand  
- avoid deep or complex menu structures  
- allow visitors to explore pods and experiences easily  
- guide users naturally towards booking  

---

### Typical User Journeys

Most user journeys should remain short and clear.

Examples:

- Homepage → Pod page → Booking  
- Homepage → Experiences → Pod page → Booking  
- Homepage → Pods listing → Pod page → Booking  

Whenever possible, important information should be reachable within **three clicks**.

---

### Menu Structure

Primary navigation should focus on the main areas of the site:

- Pods  
- Experiences  
- Locations or Destinations  
- About PurePods  
- Book Now  

Navigation labels should remain simple and descriptive.

---

### Usability Guidelines

- Avoid too many menu levels  
- Ensure key pages are easy to reach  
- Keep navigation labels clear  
- Make booking actions visible from multiple points in the site

## SEO Guidelines

The PurePods website should maintain a clear and search-friendly structure.

When rebuilding pages, preserve SEO-relevant elements from the existing content whenever possible.

---

### Heading Hierarchy

Pages should follow a clear heading structure:

- One **H1** per page (main page title)  
- **H2** for main sections  
- **H3** for subsections when necessary  

Avoid skipping heading levels or using headings purely for styling.

---

### Content Preservation

When migrating content from reference HTML files:

- preserve meaningful headings  
- keep relevant text unless a rewrite is explicitly required  
- maintain the overall section structure if it already works well  

The goal is to **migrate and improve existing content**, not rewrite it unnecessarily.

---

### Internal Linking

Pages should include natural internal links that help users explore related content.

Examples:

- pod pages linking to nearby experiences  
- experience pages linking to relevant pods  
- contextual links between related locations  

Internal linking should help both users and search engines understand relationships between pods, places and experiences.

---

### Images and Accessibility

Images should include descriptive **alt text** where appropriate.

Alt text should describe the scene or experience rather than repeating file names.

# SEO Implementation Requirements

## Core Rule

Every page created, migrated, or adapted for the PurePods website must include the essential on-page SEO elements.

These elements must be present **even if they do not exist in the reference HTML files**.

The agent must **generate them if they are missing**.

This rule applies to:

- pod pages
- experience pages
- location pages
- landing pages
- informational pages
- any future pages created for the site

A page **must not be considered complete** if any required SEO elements are missing.

The agent must not simply copy the reference HTML.  
If SEO elements are missing, they must be **created and implemented correctly**.

---

# Mandatory SEO Elements

Each page must include the following elements:

1. an optimized `<title>` tag  
2. a `<meta name="description">`  
3. a `<link rel="canonical">`  
4. Open Graph metadata  
5. Twitter Card metadata  
6. a correct heading hierarchy (`H1`, `H2`, `H3` where appropriate)  
7. descriptive `alt` text for important images  
8. consistent social sharing metadata  
9. structured data (Schema.org) when appropriate  

If any of these elements **do not exist**, the agent must **create them**.

---

# 1. Meta Title

Every page must include an SEO-optimized `<title>`.

Rules:

- must be **unique for each page**
- must include the **primary keyword naturally**
- must clearly describe the page content
- must be readable for both users and search engines
- avoid generic or vague titles
- avoid keyword stuffing
- align the title with search intent

Poor examples:
Kahutara | PurePods
Romantic | PurePods


Better examples:


Kahutara PurePod | Glass Cabin in Kaikōura, New Zealand
Romantic PurePod Getaway | Private Glass Cabin Escape in New Zealand


---

# 2. Meta Description

Every page must include a unique meta description.

Example structure:

```html
<meta name="description" content="..." />

Rules:

approximately 150–160 characters

clearly summarize the page content

include the primary keyword naturally

written to encourage clicks in search results

must not be duplicated across pages

3. Canonical Tag

Every page must include a canonical tag.

Example:

<link rel="canonical" href="https://purepods.com/location/kahutara/" />

Rules:

must point to the real production URL

must match the real site structure

must never use local development URLs

must never reference reference-html paths

must not use staging or temporary URLs

Never use URLs such as:

127.0.0.1
localhost
/reference-html/
4. Open Graph (Social Sharing)

Every page must include Open Graph metadata.

Open Graph controls how pages appear when shared on platforms such as:

Facebook

LinkedIn

WhatsApp

Slack

Discord

Minimum required tags:

<meta property="og:type" content="website" />
<meta property="og:site_name" content="PurePods" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="..." />
<meta property="og:image" content="..." />

Recommended additional tags:

<meta property="og:locale" content="en_NZ" />
<meta property="og:image:alt" content="..." />

Rules:

og:title should align with the SEO title

og:description should reflect the page content

og:url must match the canonical URL

og:image must be a strong, representative image

images must use absolute URLs

Correct example:

https://purepods.com/assets/img/night-falls/og-night-falls.jpg

Do not use relative paths.

5. Twitter Cards

Every page must include Twitter metadata.

Minimum required tags:

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />

Optional tag:

<meta name="twitter:site" content="@PUREPODS" />

Rules:

always use summary_large_image

twitter:title should align with the page title

twitter:description should align with the meta description

the image must be relevant and high quality

6. Image Alt Text

Important images must include descriptive alt text.

Rules:

clearly describe the image content

include location or experience context when relevant

avoid repeating file names

avoid generic descriptions

Example:

alt="Kahutara PurePod glass cabin overlooking the Kaikōura mountains and river valley in New Zealand"
7. Structured Data (Schema.org)

The site should include structured data using JSON-LD format.

Example for the organization:

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "PurePods",
 "url": "https://purepods.com",
 "logo": "https://purepods.com/assets/img/logo.png",
 "sameAs": [
   "https://www.instagram.com/purepods",
   "https://twitter.com/purepods",
   "https://www.facebook.com/purepods"
 ]
}
</script>

Rules:

use JSON-LD format

include official social profiles using sameAs

this schema should normally appear once on the site (for example in the homepage or global layout)

Final Rule

The agent must not simply copy the reference HTML.

If any required SEO element is missing, the agent must:

detect the missing element

generate the correct metadata

add it properly to the <head> section

A page must not be considered finished until all mandatory SEO elements are implemented.


# Advanced SEO: AI & Generative Search Optimization

## 8. Generative Engine Optimization (GEO)

To improve eligibility for AI-generated summaries (Google AI Overviews, ChatGPT, Perplexity) and conversational search results, all pages must follow these AI-ready content principles.

These are **best practices**, not rigid rules, and should always be applied with natural language and editorial judgment.

---

### 8.1 Impact Summary (AI Snippet Optimization)

Each page must include a concise, high-value summary immediately after the `<h1>`.

**Guidelines:**
- Length: **40–60 words**
- Must clearly answer:
  - What the experience is
  - Where it is located
  - Why it is unique or valuable
- Write in a **factual, descriptive tone**, not poetic or vague
- Avoid generic phrases (e.g., “a place to relax and disconnect”)

**Goal:**
Create a paragraph that can be directly reused or adapted by AI systems as a summary.

---

### 8.2 Informational Density & Structured Content

Content should prioritize **clear, factual, and specific information** over purely emotional or marketing language.

**Include whenever relevant:**
- Distances or access details (e.g., “20-minute walk from the secure car park”)
- Technical or sustainability features (e.g., “100% solar-powered”, “triple-glazed glass”)
- Location-specific references (e.g., mountain ranges, coastline names, regions)

**Structure guidelines:**
- Use `<ul>` lists for:
  - Amenities
  - Features
  - Inclusions
- Do NOT force bullet points where narrative text is more appropriate

**Goal:**
Make content easy to extract, scan, and interpret by both users and AI systems.

---

### 8.3 Page-Specific Structured Data (JSON-LD)

Each page should include structured data relevant to its content type.

**Pod / Location Pages:**
Use:
- `LodgingBusiness` or `Hotel`

**Journey / Experience Pages:**
Use:
- `TouristAttraction`

Only use `TravelAgency` if the page clearly represents a booking/service provider context.

**Recommended properties (when accurate and available):**
- `amenityFeature` (e.g., glass walls, private deck, eco-friendly systems)
- `address` (region, area, country)
- `geo` (latitude and longitude) → **ONLY if verified**
  
**Important:**
- Never invent or assume structured data
- Only include data that is factually correct

---

### 8.4 FAQ Section (Conversational Search Optimization)

Pages should include a short FAQ section at the end when it adds real user value.

**Guidelines:**
- 3 to 5 questions maximum
- Questions must reflect **real user intent** (e.g., “How do I get to the PurePod?”)
- Answers must be:
  - Clear
  - Direct
  - Factual
- Avoid generic or redundant questions

**Structured Data:**
- Use `FAQPage` schema markup when a FAQ section is included

**Goal:**
Capture long-tail and conversational queries while improving AI extractability.

---

### 8.5 General GEO Principles

When generating or editing content:

- Prioritize **clarity over creativity**
- Prefer **specific details over vague descriptions**
- Write content that can be easily:
  - Extracted
  - Quoted
  - Summarized

Always balance:
- SEO performance
- AI readability
- Natural human tone


---

## 8.6 Impact Summary Validation & Auto-Correction

The agent must validate and, if necessary, automatically rewrite the first paragraph after the `<h1>` to ensure it meets AI-ready summary standards.

### Detection Rules

The agent must check the first paragraph after the `<h1>` and detect if it fails any of the following:

- is missing entirely
- is shorter than 30 words or longer than 80 words
- does not clearly explain:
  - what the experience is
  - where it is located
- contains vague or generic language (e.g., “a place to relax”, “disconnect from the world”)
- lacks concrete or descriptive elements (e.g., glass cabin, off-grid, location reference)

If any of these conditions are met, the paragraph must be rewritten.

---

### Rewrite Rules

When rewriting the Impact Summary, the agent must:

- produce a paragraph between **40–60 words**
- explicitly include:
  - the type of experience (e.g., glass cabin, nature retreat, off-grid stay)
  - the location (region + country)
  - a clear differentiating value (e.g., 360-degree views, total seclusion, sustainability)
- use **clear, factual, and descriptive language**
- avoid poetic, vague, or overly emotional phrasing
- ensure the text can function as a standalone summary

---

### Output Constraints

- The rewritten paragraph must remain directly after the `<h1>`
- Do not modify surrounding sections unless necessary
- Do not duplicate content from other sections
- Do not introduce unverified or invented information

---

### Priority Rule

Impact Summary optimization has **higher priority than stylistic preservation**.

If a conflict exists between keeping the original text and meeting GEO standards, the agent must prioritize GEO compliance.