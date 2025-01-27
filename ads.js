// ==============================
// Flash USDT Sender - ads.js
// ==============================
// Repository URL: https://likhonsheikhcodes.github.io/ads/ads.js (Emmabed with any kinds web HTML Ads For Higher CPRM Auto SEO with Goods ways advanced with AI Self bwcklinks creations automates ui enhancer)
// Purpose: This script dynamically generates an interactive ad for the Flash USDT Sender platform.
// It includes features like smooth animations, dynamic content, SEO optimizations, special offers,
// dynamic popup, and responsive layout adjustments. It showcases USDT transfer services with advanced UI elements.
// Author: Likhon Sheikh
// Contact: hello@likhonsheikh.com
// ==============================

(async function () {
  // Fetch dynamic data from ads.json
  const jsonUrl = 'https://likhonsheikhcodes.github.io/ads/ads.json';
  const data = await fetch(jsonUrl).then(response => response.json());
  const { global, ads } = data;

  // User-defined ad ID or fallback to default
  const urlParams = new URLSearchParams(window.location.search);
  const selectedAdId = urlParams.get('ad') || global.defaultAdId;

  // Find the selected ad block or fallback to the first ad
  const selectedAd = ads.find(ad => ad.id === selectedAdId) || ads[0];

  // Add SEO meta tags
  const { seo } = global;
  const metaTags = [
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords },
    { property: 'og:title', content: seo.og.title },
    { property: 'og:description', content: seo.og.description },
    { property: 'og:image', content: seo.og.image },
    { property: 'og:url', content: seo.og.url },
    { name: 'twitter:card', content: seo.twitter.card },
    { name: 'twitter:title', content: seo.twitter.title },
    { name: 'twitter:description', content: seo.twitter.description },
    { name: 'twitter:image', content: seo.twitter.image }
  ];

  metaTags.forEach(tag => {
    const metaTag = document.createElement('meta');
    Object.keys(tag).forEach(key => {
      metaTag.setAttribute(key, tag[key]);
    });
    document.head.appendChild(metaTag);
  });

  // Create the ad container
  const adContainer = document.createElement('div');
  adContainer.className = 'ad-container-modern';
  document.body.appendChild(adContainer);

  // Render the selected ad block dynamically
  adContainer.innerHTML = `
    <h1>${selectedAd.title}</h1>
    <p>${selectedAd.description}</p>
    <ul class="features-list">
      ${selectedAd.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <div class="image-gallery-modern">
      ${selectedAd.images
        .map(img => `<img src="https://likhonsheikhcodes.github.io/ads/images/${img}" alt="${img}" class="gallery-image-modern">`)
        .join('')}
    </div>
    <a href="${selectedAd.cta.url}" class="cta-button-modern" target="_blank">${selectedAd.cta.text}</a>
  `;

  // Popup logic
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'popup-modern';
    popup.innerHTML = `
      <div class="popup-content-modern">
        <span class="popup-close-modern">&times;</span>
        <h2>${selectedAd.popup.title}</h2>
        <p>${selectedAd.popup.description}</p>
        <a href="${selectedAd.popup.ctaUrl}" class="popup-btn-modern" target="_blank">${selectedAd.popup.ctaText}</a>
      </div>
    `;
    document.body.appendChild(popup);

    document.querySelector('.popup-close-modern').addEventListener('click', () => {
      popup.style.display = 'none';
    });
  }, 3000); // Show popup after 3 seconds

  // Responsive adjustments
  const adjustForMobile = () => {
    if (window.innerWidth < 768) {
      adContainer.style.padding = '20px';
      adContainer.style.fontSize = '14px';
    }
  };
  window.addEventListener('resize', adjustForMobile);
  adjustForMobile();

  // Dark mode toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙 Toggle Dark Mode';
  darkModeToggle.className = 'dark-mode-toggle-modern';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-modern');
  });
})();
