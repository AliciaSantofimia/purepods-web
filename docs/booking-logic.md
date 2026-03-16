# Booking Logic

This document defines how booking links must work across the PurePods website.

There are **two booking behaviours**, and they must always remain separate.

---

## 1. Global Booking

Use the **global booking page** when the user has not selected a specific pod yet.

URL:

https://purepods.com/booking/

This applies to:

- Home page "Book" CTA
- Experiences listing page
- Experience detail pages (e.g. Night Falls, Journey, Romantic, etc.)
- Any page that is not a specific pod landing page

---

## 2. Pod-Specific Booking

Use the **pod-specific booking page** when the user is already on an individual pod landing page.

Format:

https://purepods.com/booking/?force_site_id=SITE_ID

### Confirmed mappings

- Kahutara → https://purepods.com/booking/?force_site_id=1
- Manakau → https://purepods.com/booking/?force_site_id=2
- Greystone → https://purepods.com/booking/?force_site_id=3
- Pōhue → https://purepods.com/booking/?force_site_id=4
- Atatū → https://purepods.com/booking/?force_site_id=5
- Korimako → https://purepods.com/booking/?force_site_id=6
- Ruru → https://purepods.com/booking/?force_site_id=7
- Pamu → https://purepods.com/booking/?force_site_id=8
- Haurapa → https://purepods.com/booking/?force_site_id=9
- Kokomea → https://purepods.com/booking/?force_site_id=10
- Tokoeka → https://purepods.com/booking/?force_site_id=11
- Hananui → https://purepods.com/booking/?force_site_id=12
- Taima → https://purepods.com/booking/?force_site_id=13
- Mākōha → https://purepods.com/booking/?force_site_id=14
- Rewarewa → https://purepods.com/booking/?force_site_id=15
- Matū → https://purepods.com/booking/?force_site_id=16

---

## Where Pod-Specific Booking Must Be Used

This applies to **all booking CTAs inside a pod landing page**, including:

- header CTA
- mobile CTA
- hero CTA
- sticky CTA
- inline CTA
- “Book this pod” buttons
- “Book now” buttons

---

## Important Rule

Never use the generic `/booking/` URL inside an individual pod landing page when a pod-specific booking URL exists.

If the user is already viewing a specific pod page, the booking link **must always include the correct `force_site_id` for that pod.**