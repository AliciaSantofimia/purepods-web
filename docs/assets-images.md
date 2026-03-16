# Image and Media Rules

This document defines how images and media assets should be handled in the PurePods website project.

## Image Location

All images must be stored inside the `/assets/img` directory.

Example structure:

assets/
  img/
    pods/
    experiences/
    locations/
    general/

Do not place images outside this folder unless explicitly required.

---

## Naming Convention

Use clear and consistent file names.

Rules:

- use lowercase
- use hyphens instead of spaces
- avoid special characters
- avoid very long names

Examples:

kahutara-exterior.jpg  
kahutara-interior-bed.jpg  
night-falls-stars.jpg

Avoid names such as:

IMG_3487.jpg  
photo-final-final.jpg

---

## Image Format

Preferred formats:

- JPG or JPEG → for photographs
- PNG → for transparent graphics
- SVG → for icons or logos

Avoid using extremely large images.

---

## Image Size

Images should be optimised for web performance.

Rules:

- avoid images larger than necessary
- compress images when possible
- do not upload raw camera files

---

## Usage

Images should reflect the PurePods experience:

- nature-focused
- calm and atmospheric
- authentic and not overly staged
- consistent with the PurePods brand tone

## AI Image Path Rules

When generating HTML or components that include images:

- Always use images from the `/assets/img` directory.
- Do not invent image paths.
- Do not generate placeholder images unless explicitly requested.
- Only reference images that exist in the project structure.

Example of correct usage:

/assets/img/pods/kahutara/kahutara-exterior.jpg

Avoid paths such as:

/images/kahutara.jpg  
/img/photo1.png

## Image Organisation

Images should be grouped by content type when possible.

Example:

assets/img/pods/
assets/img/experiences/
assets/img/general/