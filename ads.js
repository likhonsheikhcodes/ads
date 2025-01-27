// ==============================
// Flash USDT Sender - ads.js
// ==============================
// Repository URL: https://likhonsheikhcodes.github.io/ads/ads.js
// Purpose: This script dynamically generates an interactive ad for the Flash USDT Sender platform.
// It includes features like smooth animations, dynamic content, SEO optimizations, special offers,
// dynamic popup, and responsive layout adjustments. It showcases USDT transfer services with advanced UI elements.
// Author: Likhon Sheikh
// Contact: hello@likhonsheikh.com
// ==============================

(async () => {
  // Configuration - Separate from main logic for better maintainability
  const config = {
    jsonUrl: 'https://likhonsheikhcodes.github.io/ads/ads.json',
    adParam: 'ad',
    popupDelay: 3000, // milliseconds
    mobileBreakpoint: 768,
    defaultStyles: {
      padding: '20px',
      fontSize: '16px' // Default font size
    }
  };

  try {
    // Fetch data
    const response = await fetch(config.jsonUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${response.status}`);
    const data = await response.json();
    const { global, ads } = data;

    // Get ad ID from URL parameters or use default
    const urlParams = new URLSearchParams(window.location.search);
    const selectedAdId = urlParams.get(config.adParam) || global.defaultAdId;

    // Find the selected ad or fallback to the first one. Improved error handling.
    let selectedAd = ads.find(ad => ad.id === selectedAdId);
    if (!selectedAd) {
      console.error("Selected ad not found, using the first ad as a fallback.");
      if (ads.length > 0) {
        selectedAd = ads[0];
      } else {
        throw new Error("No ads found in the JSON data.");
      }
    }

    // Helper function to create meta tags
    const createMetaTag = (tag) => {
      const metaTag = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => metaTag.setAttribute(key, value));
      document.head.appendChild(metaTag);
    };

    // Add SEO meta tags using helper function
    Object.values(global.seo).forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        createMetaTag({ ...value, name: key });
      });
    });

    // Render the ad
    const adContainer = createAdElement(selectedAd);
    document.body.appendChild(adContainer);

    // Show popup after a delay
    setTimeout(() => {
      const popup = createPopupElement(selectedAd);
      document.body.appendChild(popup);
      // Attach event listener to close button
      popup.querySelector('.popup-close-modern')
        .addEventListener('click', () => popup.remove());
    }, config.popupDelay);

    // Responsive adjustments
    const adjustForMobile = () => {
      adContainer.style.cssText = window.innerWidth < config.mobileBreakpoint
        ? `padding: ${config.defaultStyles.padding}; font-size: ${config.defaultStyles.fontSize};`
        : ''; // Reset styles on larger screens
    };
    window.addEventListener('resize', adjustForMobile);
    adjustForMobile();

    // Dark mode toggle (simplified)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Toggle Dark Mode';
    darkModeToggle.className = 'dark-mode-toggle-modern';
    darkModeToggle.addEventListener('click', () => document.body.classList.toggle('dark-mode-modern'));
    document.body.appendChild(darkModeToggle);

  } catch (error) {
    console.error('An error occurred:', error);
    // Consider adding a user-friendly error message to the page.
  }
})();

// Helper functions for cleaner code
const createAdElement = (ad) => {
  const container = document.createElement('div');
  container.className = 'ad-container-modern';
  container.innerHTML = `
    <h1>${ad.title}</h1>
    <p>${ad.description}</p>
    <ul class="features-list">${ad.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
    <div class="image-gallery-modern">${ad.images.map(img => `<img src="https://likhonsheikhcodes.github.io/ads/images/${img}" alt="${img}" class="gallery-image-modern">`).join('')}</div>
    <a href="${ad.cta.url}" class="cta-button-modern" target="_blank">${ad.cta.text}</a>
  `;
  return container;
};

const createPopupElement = (ad) => {
  const popup = document.createElement('div');
  popup.className = 'popup-modern';
  popup.innerHTML = `
    <div class="popup-content-modern">
      <span class="popup-close-modern">&times;</span>
      <h2>${ad.popup.title}</h2>
      <p>${ad.popup.description}</p>
      <a href="${ad.popup.ctaUrl}" class="popup-btn-modern" target="_blank">${ad.popup.ctaText}</a>
    </div>
  `;
  return popup;
};
