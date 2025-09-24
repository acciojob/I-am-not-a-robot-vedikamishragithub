function shuffleImages() {
  const container = document.querySelector('.container');
  const images = Array.from(container.querySelectorAll('img'));
  const img6 = document.querySelector('.img6');

  // Preserve img6's original source
  const originalSrc = img6.src;

  // Shuffle all images except img6
  const otherImages = images.filter(img => img !== img6);
  const shuffled = shuffleArray(otherImages);

  // Clear the container by removing child elements individually
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Append shuffled images to the container
  shuffled.forEach(img => container.appendChild(img));

  // Select a random image to repeat on img6
  const randomIndex = Math.floor(Math.random() * shuffled.length);
  const randomImage = shuffled[randomIndex];

  // Set img6's source to the randomly chosen image
  img6.src = randomImage.src;

  // Append img6 at the desired position (e.g., index 5)
  if (container.children.length >= 5) {
    container.insertBefore(img6, container.children[5]);
  } else {
    container.appendChild(img6);
  }
}
