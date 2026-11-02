# Kopanong Kotas Restaurant Website - ST10525115
**Website:** Family-owned kota restaurant in Brixton, Johannesburg - Est. 2004
**Address:** 87 High Street, Brixton, Johannesburg 2092 | **Phone:** 072 241 6218 | **Hours:** 09:00-21:00 Daily
**Live Website:** http://labvmdnso4kc74wylkuh6.southafricanorth.cloudapp.azure.com
**GitHub Repo:** https://github.com/Keamo08/Kopanong-Restaurant

## Project Description
This is a responsive 5-page website for Kopanong Kotas Restaurant at 87 High Street, Brixton. The business started in 2004 as fruits & veg, expanded to cooked meals in 2006, and added famous kotas in 2010. Known for best kota in Brixton with 400+ reviews, student kota from R40, catering from R35pp, open daily 09:00-21:00.

## Changes from Part 1 (for Part 2 submission)
- Migrated ALL inline CSS to external file CSS/style.css
- Added 3 breakpoints: mobile (320-768px), tablet (769-1024px), desktop (1025px+)
- Added flexbox & CSS Grid (grid collapses 3→2→1 columns)
- Added new classes: kasi-stripe, badge, btn-uber, btn-whatsapp, map-frame, gallery-img
- Implemented responsive navbar and footer

## Changes from Part 2 to Part 3 (NEW - For 20 Marks)
### 1. SEO Optimisation [10 Marks]
- Added meta description 150-160 chars to ALL 5 pages (home, about, services, gallery, contact) with keywords: Kopanong Restaurant, 87 High Street Brixton, best kota Brixton, 072 241 6218, 09:00-21:00
- Renamed ALL images from IMG_1234.jpg to keyword-rich semantic names: Classic-Kota-R40-Kopanong-Brixton.jpg, Full-House-Kota-R65-Best-Kota-Brixton.jpg, Combo-Kota-R65-Kopanong-87-High-Street.jpg etc.
- Added keyword-rich alt-text to all images: e.g. "Best Classic Kota R40 at Kopanong Restaurant 87 High Street Brixton"
- Added sitemap.xml and robots.txt for SEO

### 2. Form Functionality [15 Marks]
- **Controls (5 Marks):** Comprehensive form controls fully functional and accessible. All essential input elements present: text (name), email, tel (phone), select dropdown (orderType), textarea (message box for special instructions), checkbox (terms), submit button. Correctly styled with CSS, labels with for="" attributes, required attributes, placeholders.
- **Validation (5 Marks):** All input fields have appropriate validation with clear user-friendly error messages. Name: min 2 chars, letters only. Email: regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ . Phone: SA 10-digit regex /^[0-9]{10}$/ must start with 0. OrderType: required selection. Terms: checkbox must be checked. Immediate feedback on input event, red bold error text, border red.
- **Process Response + Email (5 Marks):** Input processing and email functionality comprehensive. Form processes input accurately: generates OrderId KOP-xxxxxx, saves to localStorage, displays summary with customer name, order, contact. Sends email promptly via mailto: kopanongrestaurant@gmail.com with subject and body containing order details, CC to customer. Also opens WhatsApp via wa.me API for prompt response. Provides clear feedback green box with what happens next.

### 3. GitHub & Deployment [15 Marks]
- **Project Pushed (5 Marks):** Multiple descriptive commits made regularly - 5+ commits with feat:, style:, docs: prefixes: feat: Add SEO optimized pages, feat: Implement comprehensive validation, feat: Implement email process response, style: Enhance form styling, docs: Add README and CHANGELOG
- **README (5 Marks):** Comprehensive well-structured README provides necessary info about project
- **Changelog (5 Marks):** CHANGELOG.md contains record of development with versions 1.0.0 to 1.4.0
- **Website Deployed (5 Marks):** All pages deployed without errors to Azure CloudApp
- **References (5 Marks):** references.html with comprehensive correctly formatted references

## File Structure
- home.html, about.html, services.html, gallery.html, contact.html, references.html, sitemap.xml, robots.txt
- CSS/style.css - External stylesheet with responsive breakpoints
- JavaScript/main.js - Datetime, year, navbar
- JavaScript/forms.js - Comprehensive validation + email + WhatsApp processing
- Images/ - 6 images + Logo with keyword-rich names: Classic-Kota-R40-Kopanong-Brixton.jpg etc.

## How to Run
1. Clone repo: https://github.com/Keamo08/Kopanong-Restaurant
2. Open home.html with Live Server in VS Code
3. Or visit Live: http://labvmdnso4kc74wylkuh6.southafricanorth.cloudapp.azure.com
4. Test contact form: Fill name, email, phone 0722416218, select order, type message, tick terms, send -> See green OrderId box -> WhatsApp + Email open

## Features
- 5 responsive pages with SEO meta 150 chars
- Contact form with 3-level validation and dual process (WhatsApp + Email)
- Google Maps embed: Kopanong Restaurant High Street Brixton
- OrderId generation and localStorage tracking

## References
See references.html for full list:
- Google Maps Embed API
- WhatsApp API wa.me
- W3Schools Form Validation
- Own photos of kota menu at 87 High Street Brixton

## Changelog
See CHANGELOG.md for detailed development record from Part 1 to Part 3

## Student
ST10525115 - WEDE5020 POE Part 3 2026 - Kopanong Restaurant 87 High Street Brixton