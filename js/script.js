document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "Світло Лаваша пробачає тих, хто впав у крихти сумнівів.",
    "Не кидай лаваш на підлогу – він тримає тепло твоєї душі.",
    "Справжня мудрість — у м’якоті, а не в хрусті.",
    "Хто ділить лаваш — той множить добро."
  ];

  const quoteBtn = document.getElementById("quoteButton");
  const quoteDisplay = document.getElementById("quoteDisplay");

  quoteBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = randomQuote;
  });

  const viewManifestBtn = document.getElementById("viewManifestBtn");
  const manifestModal = document.getElementById("manifestModal");
  const closeModalButton = document.getElementById("closeModalButton");

  viewManifestBtn.addEventListener("click", () => {
    manifestModal.style.display = "block";
  });

  closeModalButton.addEventListener("click", () => {
    manifestModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === manifestModal) {
      manifestModal.style.display = "none";
    }
  });

  // Функція для переміщення модального вікна
  let isDragging = false;
  let offsetX, offsetY;

  manifestModal.addEventListener("mousedown", function(e) {
    isDragging = true;
    offsetX = e.clientX - manifestModal.getBoundingClientRect().left;
    offsetY = e.clientY - manifestModal.getBoundingClientRect().top;
  });

  window.addEventListener("mousemove", function(e) {
    if (isDragging) {
      manifestModal.style.left = e.clientX - offsetX + "px";
      manifestModal.style.top = e.clientY - offsetY + "px";
    }
  });

  window.addEventListener("mouseup", function() {
    isDragging = false;
  });
});
