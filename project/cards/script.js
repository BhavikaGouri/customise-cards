const form = document.getElementById('cardForm');
const preview = document.getElementById('cardPreview');
const cardOccasion = document.getElementById('cardOccasion');
const cardNames = document.getElementById('cardNames');
const cardDate = document.getElementById('cardDate');
const cardMessage = document.getElementById('cardMessage');
const cardImage = document.getElementById('cardImage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form reload

  // Get input values
  const occasion = document.getElementById('occasion').value;
  const names = document.getElementById('names').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;
  const imageInput = document.getElementById('imageUpload').files[0];

  // Fill in the preview card
  cardOccasion.textContent = occasion;
  cardNames.textContent = names;
  cardDate.textContent = new Date(date).toDateString();
  cardMessage.textContent = message;

  // If image uploaded
  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      cardImage.src = e.target.result;
      cardImage.classList.remove('hidden');
    }
    reader.readAsDataURL(imageInput);
  } else {
    cardImage.classList.add('hidden');
  }

  preview.classList.remove('hidden');
});
