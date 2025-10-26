const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const container = document.getElementById("cardContainer");

let currentStep = 0;

function showNextCard() {
  container.style.opacity = "1";
  if (currentStep < cards.length) {
    cards[currentStep].classList.add("visible");
    currentStep++;
    nextBtn.textContent = `Siguiente Paso (${currentStep}/${cards.length})`;
  }
  if (currentStep === cards.length) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.6";
  }
}

function restart() {
  cards.forEach(card => card.classList.remove("visible"));
  currentStep = 0;
  nextBtn.disabled = false;
  nextBtn.style.opacity = "1";
  nextBtn.textContent = `Siguiente Paso (0/${cards.length})`;
}

nextBtn.addEventListener("click", showNextCard);
restartBtn.addEventListener("click", restart);