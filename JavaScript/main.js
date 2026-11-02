// Kopanong Restaurant - ST10525115 - Final JS

// 1. DATETIME - yellow bar updates every second
function updateDateTime() {
  const dt = document.getElementById('datetime');
  if (dt) {
    const now = new Date();
    dt.textContent = now.toLocaleString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 2. ACCORDION - About page "Click here for history"
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      if (!content) return;
      // toggle
      if (content.style.display === 'block' || content.classList.contains('open')) {
        content.style.display = 'none';
        content.classList.remove('open');
      } else {
        content.style.display = 'block';
        content.classList.add('open');
      }
    });
  });

  // 3. SLIDESHOW - Gallery page
  const slides = [
    { src: "Images/Combo.jpeg", caption: "Combo - R65 - Best Seller" },
    { src: "Images/DeliciousCombo.jpeg", caption: "Delicious Combo - R70 - Loaded" },
    { src: "Images/Kota1.jpeg", caption: "Kota1 - R40 - Classic Kasi" },
    { src: "Images/Plate.jpg", caption: "Plate - R55 - Full Meal" },
    { src: "Images/Sides.jpeg", caption: "Sides - R15 - Chips & Salad" }
  ];
  
  const slideImage = document.getElementById('slideImage');
  const slideCaption = document.getElementById('slideCaption');
  const slideCounter = document.getElementById('slideCounter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const playBtn = document.getElementById('playBtn');
  
  if (slideImage) {
    let current = 0;
    let interval = null;
    let playing = true;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slideImage.src = slides[current].src;
      if (slideCaption) slideCaption.textContent = slides[current].caption;
      if (slideCounter) slideCounter.textContent = `${current + 1} / ${slides.length}`;
    }

    function startSlideshow() {
      interval = setInterval(() => showSlide(current + 1), 3000);
      playing = true;
      if (playBtn) playBtn.textContent = "Pause slideshow";
    }

    function stopSlideshow() {
      clearInterval(interval);
      playing = false;
      if (playBtn) playBtn.textContent = "Play slideshow";
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { showSlide(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', () => { showSlide(current + 1); });
    if (playBtn) playBtn.addEventListener('click', () => { playing ? stopSlideshow() : startSlideshow(); });
    
    slideImage.addEventListener('click', () => {
      // open lightbox on slideshow click
      openLightbox(slideImage.src);
    });

    showSlide(0);
    startSlideshow();
  }

  // 4. LIGHTBOX - Gallery bottom images
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryImages = document.querySelectorAll('.gallery img');

  function openLightbox(src) {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightbox.classList.add('open');
      lightbox.style.display = 'flex';
    }
  }

  galleryImages.forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
      lightbox.style.display = 'none';
    });
  }
});