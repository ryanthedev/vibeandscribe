/**
 * Dynamic Background Loader
 * Randomly selects a scholarly background on each page load
 */
(function() {
  const backgrounds = [
    'celestial-spheres.png',
    'davinci-manuscripts-1.png',
    'davinci-manuscripts-2.png',
    'davinci-manuscripts-3.png',
    'davinci-manuscripts-4.png',
    'mechanical-drawing-1.png',
    'mechanical-drawing-2.png',
    'scholarly-diagrams-1.png',
    'scholarly-diagrams-2.png',
    'scholarly-diagrams-3.png',
    'scholarly-gold-1.png'
  ];

  // Determine the correct path based on page depth
  const depth = window.location.pathname.split('/').filter(p => p && !p.includes('.')).length;
  const pathPrefix = depth > 0 ? '../'.repeat(depth) : './';

  // Select random background
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Create and insert background layer
  const bgLayer = document.createElement('div');
  bgLayer.className = 'bg-layer';
  bgLayer.style.backgroundImage = `url('${pathPrefix}bg/${randomBg}')`;
  document.body.insertBefore(bgLayer, document.body.firstChild);

  // Preload image and fade in when ready
  const img = new Image();
  img.onload = function() {
    bgLayer.classList.add('loaded');
  };
  img.src = `${pathPrefix}bg/${randomBg}`;
})();
