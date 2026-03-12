## 1. What is PurePods

PurePods is a collection of unique accommodation experiences set in the natural landscapes of New Zealand.  
It is not a traditional hotel, nor a standard tourist accommodation.

The PurePods experience is based on a deep and personal immersion in nature, designed to slow down, disconnect and experience the landscape in an intimate and mindful way.

PurePods are glass eco-cabins, fully integrated into their surroundings, allowing guests to experience nature through all five senses — light, sound, weather, night skies and the ever-changing landscape — even from inside the pod.

The experience is defined by:
- complete privacy and true seclusion  
- a direct connection with nature  
- calm, silence and a strong sense of refuge  
- minimalist, functional design that respects the environment  
- stargazing directly from bed  
- an experience primarily designed for couples  

Although nature is always present (rain, wind, cold, heat), guests remain safe, warm and comfortable, without losing their connection to the outside world.

Sustainability is an essential part of the PurePods concept:
- responsible use of resources  
- sensitive integration with the land  
- collaboration with local landowners to support conservation and protect natural landscapes  

The website must convey exclusivity, simplicity and respect for the environment.  
It should never feel commercial or promotional, but calm, honest and experience-led.

Test: agent.md update

## 2. Booking rules

There are two booking behaviours and they must remain separate.

### 1. Global booking
Use the global booking page when the user has not selected a specific pod yet.

URL:
https://purepods.com/booking/

This applies to:
- Home page Book CTA
- Experiences listing page
- Experience detail pages (e.g. Night Falls, Journey, Romantic, etc.)
- Any page that is not a specific pod page

### 2. Pod-specific booking
Use the pod-specific booking page when the user is already on an individual pod landing page.

Format:
https://purepods.com/booking/?force_site_id=SITE_ID

Confirmed mappings:
- Kahutara -> https://purepods.com/booking/?force_site_id=1
- Manakau -> https://purepods.com/booking/?force_site_id=2
- Greystone -> https://purepods.com/booking/?force_site_id=3
- Pōhue -> https://purepods.com/booking/?force_site_id=4
- Atatū -> https://purepods.com/booking/?force_site_id=5
- Korimako -> https://purepods.com/booking/?force_site_id=6
- Ruru -> https://purepods.com/booking/?force_site_id=7
- Pamu -> https://purepods.com/booking/?force_site_id=8
- Haurapa -> https://purepods.com/booking/?force_site_id=9
- Kokomea -> https://purepods.com/booking/?force_site_id=10
- Tokoeka -> https://purepods.com/booking/?force_site_id=11
- Hananui -> https://purepods.com/booking/?force_site_id=12
- Taima -> https://purepods.com/booking/?force_site_id=13
- Mākōha -> https://purepods.com/booking/?force_site_id=14
- Rewarewa -> https://purepods.com/booking/?force_site_id=15
- Matū -> https://purepods.com/booking/?force_site_id=16

This applies to all booking CTAs inside a pod landing page, including:
- header CTA
- mobile CTA
- hero CTA
- sticky CTA
- inline CTA
- “Book this pod” buttons
- “Book now” buttons

Do not use the generic `/booking/` URL inside an individual pod landing page when a pod-specific booking URL exists.


## 3. Reference HTML Structure

The project includes a set of reference HTML files located in the `reference-html` directory.

These files represent the visual and structural reference of the current PurePods pages and should be used as guidance when recreating pages in the new website.

The folder structure mirrors the real URL structure of the site.

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

Rules:

- Use these HTML files as **design and content references**, not as final production code.
- The new website should recreate their structure using reusable components.
- Do not copy inline styles directly unless necessary.
- Maintain the same semantic structure when possible (headings, sections, content hierarchy).
- Preserve important SEO elements such as titles, descriptions, and heading hierarchy.
- Respect the real URL structure such as `/location/kahutara`.

These files serve as reference material to guide layout, content sections and page hierarchy.

## 4. Typography

### Primary Font (Body)

Font family:

"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif

Usage:

- Body text
- Paragraphs
- Navigation
- Buttons
- Subtitles
- Section headings (h2, h3)
- Price display

Font weights used:

- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 800 (ExtraBold – buttons)

---

### Secondary Font (Hero)

Font family:

"Noto Serif Display", Georgia, "Times New Roman", serif

Usage:

- Main hero title (h1.heroTitle)

Font weights used:

- 400
- 500
- 600

## 5. Color Palette

Defined in :root

```css
:root{
 --bg:#F7F6F3;
 --ink:#5C5F3E;
 --muted:rgba(92,95,62,.72);
 --card:rgba(255,255,255,.85);
 --stroke:rgba(92,95,62,.18);
 --brand-green:#5C5F3E;
 --brand-beige:#C2B59E;
}

Primary Brand Green

Hex: #5C5F3E
RGB: 92, 95, 62

Usage:

Section headings

Highlighted links

Price display

Solid navbar state

Core brand elements

Primary Brand Green

Hex: #5C5F3E
RGB: 92, 95, 62

Usage:

Section headings

Highlighted links

Price display

Solid navbar state

Core brand elements

