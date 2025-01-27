// ==============================
// Flash USDT Sender - crawl.js
// ==============================
// Repository URL: https://github.com/likhonsheikh/flash-usdt-sender
// Purpose: This script dynamically generates SEO-friendly pages and handles automatic ad integration for Flash USDT Sender V2.2 platform.
// Author: Likhon Sheikh
// Contact: hello@likhonsheikh.com
// ==============================

(async () => {
  const basePath = '/projects/flash-usdt-sender-v2-2/'; // Base path for pages
  const contentFolder = 'images/'; // Folder for image assets

  // Configuration for the ad and SEO
  const config = {
    jsonUrl: 'https://likhonsheikhcodes.github.io/ads/ads.json',
    popupDelay: 3000, // milliseconds delay for popup
    defaultStyles: {
      padding: '20px',
      fontSize: '16px', // Default font size for ads
    },
  };

  try {
    // Fetch ad data from ads.json
    const response = await fetch(config.jsonUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${response.status}`);
    const data = await response.json();
    const { global, ads } = data;

    // Function to create SEO meta tags
    const createMetaTag = (tag) => {
      const metaTag = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => metaTag.setAttribute(key, value));
      document.head.appendChild(metaTag);
    };

    // Generate meta tags dynamically
    Object.values(global.seo).forEach(item => {
      Object.entries(item).forEach(([key, value]) => {
        createMetaTag({ ...value, name: key });
      });
    });

    // Function to generate a page dynamically
    const generateProjectPage = (pagePath) => {
      const title = `Flash USDT Sender V2.2 - ${pagePath}`;
      const description = `Learn how to use Flash USDT Sender V2.2 and its features for fast USDT transfers. Explore secure and easy transfer tools.`;
      const keywords = "USDT Transfer, Flash USDT Sender, Crypto Tools";

      // Create meta tags for SEO
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": `${basePath}${pagePath}`,
        "publisher": {
          "@type": "Organization",
          "name": "Flash USDT Sender",
          "logo": "https://flashusdtsender.xyz/images/logo.png",
        },
      };

      // Add JSON-LD schema
      const ldJsonScript = document.createElement('script');
      ldJsonScript.type = 'application/ld+json';
      ldJsonScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ldJsonScript);

      // Add dynamic content to page
      document.getElementById('main-content').innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="project-gallery">
          <img src="${basePath}${contentFolder}/image1.jpg" alt="Project Image 1">
          <img src="${basePath}${contentFolder}/image2.jpg" alt="Project Image 2">
        </div>
      `;

      // Integrate ad functionality using ads.js
      integrateAds(ads[0]);

    };

    // Integrate ads dynamically based on selection
    const integrateAds = (selectedAd) => {
      const adContainer = createAdElement(selectedAd);
      document.body.appendChild(adContainer);

      // Show popup ad after delay
      setTimeout(() => {
        const popup = createPopupElement(selectedAd);
        document.body.appendChild(popup);
        popup.querySelector('.popup-close-modern')
          .addEventListener('click', () => popup.remove());
      }, config.popupDelay);
    };

    // Helper function to create ad element
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

    // Helper function to create popup element for ads
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

    // Dynamically generate pages
    const pages = ['page1', 'page2', 'page3']; // Example pages, can dynamically fetch folders
    pages.forEach(page => generateProjectPage(page));

  } catch (error) {
    console.error('Error occurred:', error);
    // Display a friendly error message
  }
})();
