// ad.js

document.addEventListener("DOMContentLoaded", function() {
  const imageGallery = [
    { src: 'images/1.jpg', alt: 'Image 1', title: 'Flash USDT Sender' },
    { src: 'images/IMG_0270.png', alt: 'Image 2', title: 'Secure USDT Transfer' },
    { src: 'images/IMG_0271.png', alt: 'Image 3', title: 'Performance Optimized' },
    { src: 'images/IMG_0280.png', alt: 'Image 4', title: 'Fast & Lightweight' },
    { src: 'images/IMG_0293.jpeg', alt: 'Image 5', title: 'User-Friendly Interface' },
    { src: 'images/IMG_0315.png', alt: 'Image 6', title: 'Instant Navigation' }
  ];

  const adContainer = document.createElement('div');
  adContainer.className = 'ad-container';

  const title = document.createElement('h1');
  title.innerText = "🚀 We're Live! Flash USDT Sender is here!";
  adContainer.appendChild(title);

  const adDescription = document.createElement('p');
  adDescription.innerHTML = `
    Fast, secure, and optimized for perfection:
    <br><b>⚡ Performance:</b> 98/100
    <br><b>⭐️ Accessibility:</b> 100/100
    <br><b>✅ Best Practices:</b> 96/100
    <br><b>🐱 SEO:</b> 100/100
    <br><a href="https://flashusdtsender.xyz/access" target="_blank">Start sending now!</a>
  `;
  adContainer.appendChild(adDescription);

  const featuresList = document.createElement('ul');
  const features = [
    '⚡ Instant Transfers',
    '🔗 TRC20, ERC20 Support',
    '🚀 Flash USDT Software - APK Live Now!',
    '🌐 Instant Navigation',
    '⚡ Fast & Lightweight',
    '🎨 Modern, User-Friendly Design',
    '🔒 100% Secure',
    '🔜 24/7 Support'
  ];
  features.forEach(feature => {
    const listItem = document.createElement('li');
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });
  adContainer.appendChild(featuresList);

  const gallerySection = document.createElement('div');
  gallerySection.className = 'image-gallery';

  imageGallery.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgElement.alt = img.alt;
    imgElement.title = img.title;
    imgElement.className = 'gallery-image';
    gallerySection.appendChild(imgElement);
  });
  adContainer.appendChild(gallerySection);

  // Add an automated popup after 2 seconds
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
        <span class="popup-close">&times;</span>
        <h2>🚨 Special Offer! 🚨</h2>
        <p>Get 85% off on the store and exclusive access to our app! 🎉</p>
        <a href="https://flashusdtsender.xyz/access" target="_blank">Claim Offer Now</a>
      </div>
    `;
    document.body.appendChild(popup);

    const closePopup = popup.querySelector('.popup-close');
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    popup.style.display = 'block';
  }, 2000); // Wait 2 seconds before showing the popup

  // Append the ad container to the page
  document.body.appendChild(adContainer);
});
