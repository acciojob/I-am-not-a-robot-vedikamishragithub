function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleImages() {
  const container = document.querySelector('.container');
  const images = Array.from(container.querySelectorAll('img'));

  const shuffled = shuffleArray(images);

  // Append shuffled images to the container
  shuffled.forEach(img => container.appendChild(img));

  // Select a random image to repeat
  const randomIndex = Math.floor(Math.random() * shuffled.length);
  const randomImage = shuffled[randomIndex];

 // Clone the image
	  const clone = randomImage.cloneNode(true);
	clone.src = randomImage.src;
  const img6 = randomImage.cloneNode(true);  // deep clone
  container.appendChild(img6);
}

