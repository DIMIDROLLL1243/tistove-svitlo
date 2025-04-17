document.getElementById('quoteButton').addEventListener('click', function() {
  const quotes = [
    '“Лаваш у руці — щастя в душі.”',
    '“Піклуйся про лаваш — і лаваш подбає про тебе.”',
    '“Сльоза падає в лаваш — і він приймає її як соус.”',
    '“І побачив він, що це смачно. І сказав: нехай буде ще.”',
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteDisplay').textContent = randomQuote;
});

document.getElementById('viewManifestBtn').addEventListener('click', function() {
  document.getElementById('manifestModal').style.display = "block";
});

document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('manifestModal').style.display = "none";
});

window.onclick = function(event) {
  if (event.target == document.getElementById('manifestModal')) {
    document.getElementById('manifestModal').style.display = "none";
  }
};
