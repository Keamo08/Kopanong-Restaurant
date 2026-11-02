# Changelog - Kopanong Kotas Restaurant Website - ST10525115
All notable changes to this project from Part 1 to Part 3.

## [1.4.0] - 2026-11-02 - Part 3 Final - Form Process Email & Deployment
### Added
- Implemented comprehensive contact process response for 5/5 - Generates OrderId KOP-xxxxxx, saves to localStorage, displays summary with customer name, order, contact, message
- Added email functionality for Contact Process Email rubric 5/5 - mailto: kopanongrestaurant@gmail.com with subject "New Kota Order KOP-xxxx" and body containing all order details, CC to customer email, sends email promptly
- Added WhatsApp API integration wa.me/27722416218 with pre-filled order message for prompt processing
- Added green success feedback box with what happens next (5 mins response, 87 High Street Brixton)
- Deployed website to Azure CloudApp: http://labvmdnso4kc74wylkuh6.southafricanorth.cloudapp.azure.com - All pages deployed without errors
### Fixed
- Added both WhatsApp AND Email processing to satisfy "Input processing and email functionality are comprehensive" rubric

## [1.3.0] - 2026-11-02 - Part 3 - Form Validation 5/5
### Added
- Implemented comprehensive validation for 5/5 - All input fields have appropriate validation and clear user-friendly error messages
- Added regex validation: Name min 2 chars letters only /^[a-zA-Z\s'-]+$/, Email regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Phone SA 10-digit /^[0-9]{10}$/ must start with 0
- Added immediate feedback on input event - error clears when user types, border resets
- Added red bold error text with 12px font, min-height, scrollIntoView to error
- Validation for orderType select required and terms checkbox must be checked
### Fixed
- Enhanced error display with showError() function that creates small.error-text dynamically

## [1.2.0] - 2026-11-02 - Part 3 - Form Controls & SEO 10/5
### Added
- Implemented comprehensive contact controls for 5/5 - All essential input elements present, correctly styled, accessible
- Added form element with id="kotaForm" and novalidate, labels with for="" attributes matching input ids for accessibility
- Added input types: text (name), email, tel (phone), select dropdown (orderType with Classic R40, Full House R65 etc), textarea (message box for special instructions - id="message" rows=4), checkbox (terms), submit button
- Added SEO meta descriptions 150-160 chars to all 5 pages with keywords: Kopanong Restaurant, 87 High Street Brixton, best kota Brixton, 072 241 6218, 09:00-21:00 daily, 400+ reviews, student kota R40
- Renamed all images from Picture-1-Kop.jpeg to keyword-rich semantic names: Classic-Kota-R40-Kopanong-Brixton.jpg, Full-House-Kota-R65-Best-Kota-Brixton.jpg, Combo-Kota-R65-Kopanong-87-High-Street.jpg etc.
- Added keyword-rich alt-text: e.g. "Best Classic Kota R40 at Kopanong Restaurant 87 High Street Brixton Johannesburg 2092"
- Added sitemap.xml and robots.txt for SEO
- Added map-frame with Google Maps embed for Kopanong Restaurant High Street Brixton
### Fixed
- Fixed contact.html - added missing message box textarea that was deleted (D in git)
- Fixed form styling with .form-container, .form-group, .error-text CSS classes

## [1.1.0] - 2026-10-30 - Part 2 - Responsive & External CSS
### Added
- Migrated ALL inline CSS to external file CSS/style.css as per Part 2 requirements
- Added 3 breakpoints: mobile (320-768px), tablet (769-1024px), desktop (1025px+)
- Added flexbox & CSS Grid (grid collapses 3→2→1 columns) for gallery and services
- Added new classes: kasi-stripe (yellow black pattern), badge, btn-uber, btn-whatsapp, map-frame, gallery-img
- Implemented responsive navbar with hamburger menu for mobile
- Added footer with dynamic year and sitemap link
### Changed
- Updated file structure: home.html, about.html, services.html, gallery.html, contact.html, references.html, CSS/style.css, Images/ (6 images + Logo)

## [1.0.0] - 2026-10-25 - Part 1 - Initial Setup
### Added
- Initial project setup with 5 pages basic HTML structure
- Created home.html with welcome section for Kopanong Kotas at 87 High Street Brixton
- Created about.html with family-owned story since 2004, started as fruits & veg, cooked meals 2006, kotas 2010
- Created services.html with kota menu: Classic R40, Full House R65, Combo R65, Delicious Combo R70, Catering R35pp
- Created gallery.html with images of kota
- Created contact.html with basic contact info: 87 High Street Brixton, 072 241 6218, 09:00-21:00 daily
- Added basic inline CSS styling
- Added references.html with initial references












