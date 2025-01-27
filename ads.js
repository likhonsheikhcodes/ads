document.addEventListener("DOMContentLoaded", function() {
  // Data for images & content
  const imagesData = [
    { src: 'images/1.jpg', alt: 'Flash USDT Sender', title: 'Speedy USDT Transfers' },
    { src: 'images/IMG_0270.png', alt: 'No Fees', title: 'No Hidden Fees' },
    { src: 'images/IMG_0271.png', alt: 'Low Cost', title: 'Low Cost, High Speed' },
    { src: 'images/IMG_0280.png', alt: 'Global Support', title: 'Cross-Chain Support' },
    { src: 'images/IMG_0293.jpeg', alt: 'Secure Transfers', title: 'Secure Blockchain Transactions' },
    { src: 'images/IMG_0315.png', alt: 'Easy Access', title: 'Easy to Use, Fast to Send' }
  ];

  // Create the content dynamically
  const adContainer = document.createElement('div');
  adContainer.className = 'ad-container';

  const title = document.createElement('h1');
  title.innerText = "🚀 Flash USDT Sender is Here!";
  adContainer.appendChild(title);

  const description = document.createElement('p');
  description.innerHTML = `
    Experience lightning-fast, secure, and seamless USDT transfers with our platform. Instant transactions, low fees, and cross-chain support. 
    Get started today and send USDT with ease!
  `;
  adContainer.appendChild(description);

  // Features
  const featuresList = [
    '⚡ Instant Transfers', '🔗 TRC20 & ERC20 Support', '🌐 Web App Accessibility', 
    '🔒 100% Secure', '📱 Easy-to-Use Mobile App', '🚀 Instant Navigation'
  ];

  const ul = document.createElement('ul');
  featuresList.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    ul.appendChild(li);
  });
  adContainer.appendChild(ul);

  // Image Gallery
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

  // CTA Button
  const button = document.createElement('a');
  button.textContent = 'Get Started Now!';
  button.className = 'button';
  button.href = 'https://flashusdtsender.xyz/access';
  button.target = '_blank';
  adContainer.appendChild(button);

  // Append the ad container to the body
  document.body.appendChild(adContainer);

  // Animate the ad container to appear smoothly
  setTimeout(() => {
    adContainer.style.transform = "scale(1)";
    adContainer.style.opacity = "1";
  }, 100);

  // Popup with Special Offer
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <div class="popup-content">
        <span class="popup-close">&times;</span>
        <h2>Exclusive Offer: 85% Off</h2>
        <p>Get early access to Flash USDT Sender and enjoy a special discount today!</p>
        <a href="https://flashusdtsender.xyz/access" target="_blank">Claim Your Offer Now</a>
      </div>
    `;
    document.body.appendChild(popup);

    const closePopup = popup.querySelector('.popup-close');
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    popup.style.display = 'flex';
  }, 3000); // 3 seconds after loading

  // Smooth transition for the popup
  popup.style.transition = 'opacity 0.3s ease-in-out';
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.opacity = '1';
  }, 3100); // Start transition after popup is added
});
