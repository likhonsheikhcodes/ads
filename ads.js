// ==============================
// Flash USDT Sender - ads.js
// ==============================
// Repository URL: https://raw.githubusercontent.com/likhonsheikhcodes/ads/refs/heads/main/ads.js
// Purpose: This script dynamically generates an interactive ad for the Flash USDT Sender platform.
// It includes features like smooth animations, dynamic content, SEO optimizations, special offers,
// dynamic popup, and responsive layout adjustments. It showcases USDT transfer services with advanced UI elements.
// Author: Likhon Sheikh
// Contact: hello@likhonsheikh.com
// ==============================

(function() {
  // Auto Add SEO Meta Tags (Open Graph, Twitter Cards, and more)
  const head = document.head;

  // SEO Meta Tags
  const metaTags = [
    { name: 'description', content: 'Send USDT instantly and securely with Flash USDT Sender. No fees, fast transactions, and cross-chain support.' },
    { name: 'keywords', content: 'USDT, transfer, cryptocurrency, cross-chain, blockchain, TRC20, ERC20, secure transfers' },
    { property: 'og:title', content: 'Flash USDT Sender: Fast & Secure Transfers' },
    { property: 'og:description', content: 'Experience seamless USDT transfers with Flash USDT Sender. Secure, fast, and no hidden fees.' },
    { property: 'og:image', content: 'https://flashusdtsender.xyz/assets/images/og-image.png' },
    { property: 'og:url', content: 'https://flashusdtsender.xyz' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Flash USDT Sender: Fast & Secure Transfers' },
    { name: 'twitter:description', content: 'Send USDT seamlessly and securely with Flash USDT Sender. No fees, fast transfers, and cross-chain support.' },
    { name: 'twitter:image', content: 'https://flashusdtsender.xyz/assets/images/og-image.png' },
  ];

  // Add meta tags dynamically
  metaTags.forEach(tag => {
    const metaTag = document.createElement('meta');
    for (const key in tag) {
      metaTag.setAttribute(key, tag[key]);
    }
    head.appendChild(metaTag);
  });

  // Dynamic Backlink Generation - Automatically generate a link to encourage users to share
  const backlinkSection = document.createElement('div');
  backlinkSection.className = 'backlink-section';
  backlinkSection.innerHTML = `
    <p>🚀 Spread the word about Flash USDT Sender and get early access to exclusive offers! Share on:</p>
    <a href="https://twitter.com/share?url=https://flashusdtsender.xyz&text=Check%20out%20Flash%20USDT%20Sender%20-%20Fast%20and%20secure%20USDT%20transfers%20platform!" target="_blank">Twitter</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://flashusdtsender.xyz" target="_blank">Facebook</a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://flashusdtsender.xyz" target="_blank">LinkedIn</a>
  `;
  document.body.appendChild(backlinkSection);

  // Data for images & content
  const imagesData = [
    { src: 'images/IMG_0320.jpeg', alt: 'Flash USDT Sender', title: 'Speedy USDT Transfers' },
    { src: 'images/IMG_0270.png', alt: 'No Fees', title: 'No Hidden Fees' },
    { src: 'images/IMG_0271.png', alt: 'Low Cost', title: 'Low Cost, High Speed' },
    { src: 'images/IMG_0280.png', alt: 'Global Support', title: 'Cross-Chain Support' },
    { src: 'images/IMG_0293.jpeg', alt: 'Secure Transfers', title: 'Secure Blockchain Transactions' },
    { src: 'images/IMG_0315.png', alt: 'Easy Access', title: 'Easy to Use, Fast to Send' }
  ];

  // Create the ad container and apply smooth animation for entry
  const adContainer = document.createElement('div');
  adContainer.className = 'ad-container';
  adContainer.style.opacity = '0';
  adContainer.style.transform = 'scale(0.95)';
  document.body.appendChild(adContainer);

  // Add a title and description dynamically
  const title = document.createElement('h1');
  title.innerText = "🚀 Flash USDT Sender is Here!";
  adContainer.appendChild(title);

  const description = document.createElement('p');
  description.innerHTML = `
    Experience lightning-fast, secure, and seamless USDT transfers with our platform. 
    Instant transactions, low fees, and cross-chain support. Get started today and send USDT with ease!
  `;
  adContainer.appendChild(description);

  // Add key features dynamically
  const featuresList = [
    '⚡ Instant Transfers', '🔗 TRC20 & ERC20 Support', '🌐 Web App Accessibility', 
    '🔒 100% Secure', '📱 Easy-to-Use Mobile App', '🚀 Instant Navigation'
  ];

  const ul = document.createElement('ul');
  ul.className = 'features-list';
  featuresList.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    li.className = 'feature-item';
    ul.appendChild(li);
  });
  adContainer.appendChild(ul);

  // Create a dynamic image gallery
  const gallerySection = document.createElement('div');
  gallerySection.className = 'image-gallery';
  imagesData.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.title = image.title;
    imgElement.className = 'gallery-image';
    gallerySection.appendChild(imgElement);
  });
  adContainer.appendChild(gallerySection);

  // Create a dynamic Call-To-Action button
  const button = document.createElement('a');
  button.textContent = 'Get Started Now!';
  button.className = 'button';
  button.href = 'https://flashusdtsender.xyz/access';
  button.target = '_blank';
  adContainer.appendChild(button);

  // Apply smooth transition for the ad container
  setTimeout(() => {
    adContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    adContainer.style.opacity = '1';
    adContainer.style.transform = 'scale(1)';
  }, 100);

  // Create a popup with a special offer and smooth transition
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
        <span class="popup-close">&times;</span>
        <h2>Exclusive Offer: 85% Off</h2>
        <p>Get early access to Flash USDT Sender and enjoy a special discount today!</p>
        <a href="https://flashusdtsender.xyz/access" target="_blank" class="popup-btn">Claim Your Offer Now</a>
      </div>
    `;
    document.body.appendChild(popup);

    const closePopup = popup.querySelector('.popup-close');
    closePopup.addEventListener('click', () => {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 300); // Match the transition duration
    });

    popup.style.display = 'flex';
    popup.style.transition = 'opacity 0.5s ease-in-out';
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.style.opacity = '1';
    }, 100); // Start popup transition after a slight delay
  }, 3000); // Show the popup after 3 seconds

  // Dynamic responsive layout and animation triggers for the popup
  const adjustLayoutForMobile = () => {
    if (window.innerWidth < 768) {
      adContainer.style.fontSize = '16px';
      adContainer.style.padding = '15px';
      button.style.padding = '10px 20px';
      gallerySection.style.flexDirection = 'column';
      gallerySection.style.alignItems = 'center';
      gallerySection.style.justifyContent = 'center';
      gallerySection.style.width = '100%';
      gallerySection.style.overflowX = 'hidden';
      gallerySection.style.maxHeight = '500px';
      gallerySection.style.overflowY = 'auto';
    } else {
      adContainer.style.fontSize = '18px';
      adContainer.style.padding = '20px';
      button.style.padding = '12px 24px';
      gallerySection.style.flexDirection = 'row';
      gallerySection.style.width = 'auto';
      gallerySection.style.maxHeight = 'none';
      gallerySection.style.overflowX = 'auto';
      gallerySection.style.overflowY = 'hidden';
    }
  };

  window.addEventListener('resize', adjustLayoutForMobile);
  adjustLayoutForMobile();

  // Function for smooth popup fade in and out
  const smoothPopupTransition = () => {
    const popup = document.querySelector('.popup');
    popup.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
      popup.style.opacity = '1';
    }, 100);
  };

  // Trigger smooth transition for popup
  smoothPopupTransition();

  // Apply CSS animations for images
  const applyImageAnimations = () => {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = '1';
      }, 100 * index + 500);
    });
  };

  applyImageAnimations();
})();
