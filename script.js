const container = document.getElementById('container');
const reset = document.getElementById('reset');
const verify = document.getElementById('verify');
const message = document.getElementById('message');

let clickCount = 0;
let firstClickedSrc = null;
let secondClickedSrc = null;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleImages() {
  const images = Array.from(container.querySelectorAll('img'));
  const shuffled = shuffleArray(images);

  shuffled.forEach(img => container.appendChild(img));

  const randomIndex = Math.floor(Math.random() * shuffled.length);
  const randomImage = shuffled[randomIndex];

  const clone = randomImage.cloneNode(true);
  clone.src = randomImage.src;
  const img6 = randomImage.cloneNode(true);
  container.appendChild(img6);
}

shuffleImages();

function handleImageClick(event) {
  const clicked = event.target;

  if (clicked.tagName === 'IMG') {
    clickCount++;

    if (clickCount === 1) {
      reset.style.display="block";
      firstClickedSrc = clicked.src;
      clicked.classList.add('selected');
    } else if (clickCount === 2) {
      secondClickedSrc = clicked.src;
      clicked.classList.add('selected');
      container.removeEventListener('click', handleImageClick);
      verify.style.display = "block";
    }
  }
}

container.addEventListener('click', handleImageClick);

reset.addEventListener('click', () => {
  location.reload();
});

verify.addEventListener('click', () => {
  

  
  verify.style.display = "none";
  container.addEventListener('click', handleImageClick);
  if (firstClickedSrc === secondClickedSrc) {
        message.innerText = "You are a human. Congratulations!";
        message.style.display = "block";
   } else {
        message.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
        message.style.display = "block";
    }
});

