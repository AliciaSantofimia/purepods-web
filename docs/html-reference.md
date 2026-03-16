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