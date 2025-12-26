/**
 * The Study - Image Lightbox
 * A minimal, warm-feeling lightbox for images.
 */

(function() {
  'use strict';

  // Create lightbox elements
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="">
    </div>
  `;

  // Styles injected directly to keep it self-contained
  const styles = document.createElement('style');
  styles.textContent = `
    .lightbox-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 12, 8, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 10000;
      cursor: zoom-out;
      padding: 2rem;
    }

    .lightbox-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .lightbox-content {
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 4px;
      box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.5),
        0 10px 30px rgba(0, 0, 0, 0.3);
      transform: scale(0.95);
      transition: transform 0.3s ease;
    }

    .lightbox-overlay.active .lightbox-image {
      transform: scale(1);
    }

    /* Clickable images in posts */
    .post__content figure img,
    figure.lightbox-enabled img {
      cursor: zoom-in;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .post__content figure img:hover,
    figure.lightbox-enabled img:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(20, 15, 10, 0.6);
    }
  `;

  // Add to DOM
  document.head.appendChild(styles);
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector('.lightbox-image');

  // Open lightbox
  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after animation
    setTimeout(() => {
      if (!overlay.classList.contains('active')) {
        lightboxImage.src = '';
      }
    }, 300);
  }

  // Event: Click overlay to close
  overlay.addEventListener('click', closeLightbox);

  // Event: Escape key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Event: Click on images in posts
  document.addEventListener('click', function(e) {
    const img = e.target.closest('.post__content figure img, figure.lightbox-enabled img');
    if (img) {
      e.preventDefault();
      openLightbox(img.src, img.alt);
    }
  });

  // Expose globally if needed
  window.StudyLightbox = {
    open: openLightbox,
    close: closeLightbox
  };

})();
