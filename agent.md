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

##2 Booking integration (must be preserved)
### Critical external system

The booking system is an external Newbook integration and must always be preserved.  
Any redesign of the website must maintain compatibility with the existing booking flow.

### Current booking flow
All booking CTAs must link to the booking page using the existing parameter:
https://purepods.com/booking/?force_site_id=16

This parameter is required by the current Newbook integration and must be preserved.

Do not remove or modify the `force_site_id` parameter when linking to the booking system.

### Booking CTA rules

All "Book Now" or "Book This Pod" buttons must link to the booking page using the same base URL and parameters used on the current site.

Do not change the booking entry URL structure.

Example:

<a href="https://purepods.com/booking/?force_site_id=16">Book Now</a>

The booking system behaviour is controlled by the external Newbook engine.

The website must not attempt to replicate availability logic, filtering or pod selection in the frontend.

All availability, pricing and booking logic must remain inside the Newbook system.





---

### Booking CTA rules

All "Book Now" and "Book This Pod" buttons must link to the booking page using the same base URL and parameters used on the current site.

Do not change the booking entry URL structure.

Example:

<a href="https://purepods.com/booking/?force_site_id=16">Book Now</a>

---

### External booking system

The booking system behaviour is controlled by the external Newbook engine.

The website must not attempt to replicate availability logic, filtering or pod selection in the frontend.

All availability, pricing and booking logic must remain inside the Newbook system.



---



The new PurePods website must preserve the current booking architecture exactly as it works today.




- The booking experience is not a custom local booking form.
- The `/booking/` page embeds the external Newbook booking engine inside the PurePods website.
- The booking engine must remain external and embedded following the current structure.

---

## Current implementation references

### Reference implementation snippets

These snippets are extracted from the current PurePods website and document how the Newbook booking integration is embedded.

They are provided for reference only and must not be reimplemented locally.


Book Now link used on the current website:

```html
<a href="https://purepods.com/booking/?force_site_id=16">Book Now</a>
```

Booking container used by the Newbook integration:

```html
<div id="newbook_content-container"></div>
```

Checkout step used in the booking process:
```javascript
go_to_step("https://purepods.com/booking/?cart=Checkout");
```

Booking form action used by the current booking flow:

```html
<form id="newbook_online_main_form" action="https://purepods.com/booking/?cart=Booking" method="post">
```

Direct checkout button reference:

```html
<button type="button" onclick='javascript: location.href="https://purepods.com/booking/?cart=Checkout";return false;'>
```

 Newbook integration references

The booking page loads the Newbook booking engine and related assets from domains such as:

driveap.newbook.cloud

apiap.newbook.cloud

Relevant configuration references from the current site:
newbook_api_path='https://purepods.com/wp-content/plugins/newbook-online/includes/api.php?';
cc_data_path='https://apiap.newbook.cloud/cc_secure/548';
newbook_image_host='https://driveap.newbook.cloud/';
is_newbook_online='1';
isUsingNewOnlineTheme=true;
instance_name='PurePods';
Rules for the new website

Keep all "Book Now" buttons consistent with the current booking flow.

Do not replace the booking engine with a custom local booking form.

Do not create a new custom checkout flow if the goal is to preserve the current system.

Maintain compatibility with the existing Newbook booking structure and step URLs.

The website design can change, but the booking logic must remain aligned with the current PurePods setup.

### Important constraints

Do not copy or hardcode temporary session values from the existing booking page, including:

CSRF tokens

IP addresses

current cart contents

guest session data

dynamic dates

temporary totals or prices

popup HTML related to specific pods

transient booking state

Only preserve the booking architecture and the relationship between:

site CTA → /booking/

/booking/ → embedded Newbook engine

booking step → ?cart=Booking

checkout step → ?cart=Checkout
Implementation instruction

When building or refactoring pages or components, treat the booking system as an existing external embedded integration that must be preserved and not redesigned from scratch.
Critical booking system rules

The booking system used by PurePods is an external engine (Newbook) embedded inside the website.

This system must not be replaced, rewritten or redesigned.

The /booking/ page must always include the container:
<div id="newbook_content-container"></div>
The booking page must allow the Newbook scripts and assets to load from their original domains.

The booking page must not:

replace the Newbook engine with a custom booking UI

recreate the booking form locally

remove or rename the container used by the booking engine

attempt to simulate booking logic in the frontend

The booking flow must remain:
site → /booking/ → Newbook engine → checkout
Book Now CTA consistency rules

All primary booking CTAs across the website must remain consistent with the current PurePods booking system.

This includes booking CTAs that may appear in:

-the site header

-navigation menus

-pod listing cards

-pod detail pages

-promotional sections

-footer links

-any booking-related call to action

### Rules for the new website

Primary booking CTAs should continue to use the existing booking logic and route users into the same booking system.

Do not invent different booking flows for different pages unless explicitly documented.

Do not create alternative booking destinations such as /book, /reserve, /checkout, or custom modal flows.

Do not replace the booking CTA with a custom availability form.

Keep the booking CTA purpose aligned with the existing PurePods booking flow.

If a page includes a primary reservation CTA, it must remain compatible with the existing /booking/ → Newbook → checkout structure.

If pod-specific booking behaviour, filters or parameters are needed in future, they must be explicitly documented before implementation. Do not invent or assume pod-level booking logic.
Booking page styling rules

The visual design surrounding the booking page may be updated to match the new PurePods website.

This may include:

page layout

spacing

typography

headings

supporting copy

surrounding sections

header and footer

background treatments

visual framing around the booking area

However:

the Newbook booking engine itself must remain the existing embedded system

do not replace the embedded booking engine with a custom styled booking form

do not assume the internal Newbook UI can be fully redesigned unless explicitly supported by the integration

styling changes must not interfere with booking functionality, scripts, container IDs, checkout flow, or embedded behaviour

Priority order:

Preserve booking functionality

Preserve booking integration structure

Apply the new visual design around the booking experience where safe
Preservation priority

For the booking system, preservation of the current behaviour has priority over redesign, simplification or refactoring.

If there is any doubt, preserve the existing booking structure rather than replacing it.

### Pod-specific booking behaviour

Booking CTAs from individual pod detail pages may carry pod-specific context into the booking flow.

If a user clicks "Book This Pod" from a pod page, the booking experience should preserve the selected pod context whenever the current website does so.

This means the booking flow must not lose pod selection when entering the booking system from a pod detail page.

Rules:

- Do not treat all booking CTAs as identical if the current site preserves pod context.
- A "Book This Pod" CTA from a pod page should continue to lead into the existing booking system with the relevant pod preselected or filtered when applicable.
- Do not replace this behaviour with a generic booking entry point if the current implementation is pod-aware.
- If pod-specific parameters, filters or state are used, preserve that behaviour rather than simplifying it away.

### Non-negotiable system boundaries

The following booking integration boundaries are non-negotiable and must be preserved in all redesigns, refactors and new page implementations:

- Do not replace the external Newbook booking engine with a custom local implementation.
- Do not remove, rename or bypass the booking container used by the integration.
- Do not remove or modify required booking URL parameters such as `force_site_id`.
- Do not recreate availability, pricing, filtering, checkout or booking logic in the frontend.
- Do not invent alternative booking flows, routes or modal systems.
- Do not assume pod-specific booking logic unless it is explicitly documented.
- Do not alter the booking entry URL structure unless explicitly approved and revalidated against the live integration.
- Do not treat the booking system as a design-only component; it is a functional external dependency.

If any requested design or code change conflicts with the existing booking integration, preserve booking functionality first and adapt the surrounding design instead.

## Safe modification zones

The following parts of the website can be freely redesigned or refactored without affecting the booking system:

- homepage layout and sections
- pod listing pages
- pod detail pages
- experience pages
- editorial content sections
- navigation menus
- headers and footers
- typography, spacing and color system
- responsive layouts and grid systems

These areas can evolve as part of the redesign of the PurePods website.


## Restricted modification zones

Some areas of the site may be visually styled but their functionality must remain unchanged:

- the `/booking/` page layout surrounding the booking engine
- booking call-to-action buttons and their destination URLs
- the container used to embed the Newbook booking system

Design adjustments are allowed, but the booking logic must remain intact.


## Protected system zones

The following parts of the system must never be modified or recreated:

- the Newbook booking engine itself
- the booking container `#newbook_content-container`
- required booking URL parameters such as `force_site_id`
- the booking checkout flow handled by Newbook
- scripts and assets loaded from Newbook domains

These components are part of an external booking system integration and must be preserved as they are.