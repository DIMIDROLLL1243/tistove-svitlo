// Масив цитат
const quotes = [
  '“Лаваш у руці — щастя в душі.”',
  '“Піклуйся про лаваш — і лаваш подбає про тебе.”',
  '“Сльоза падає в лаваш — і він приймає її як соус.”',
  '“І побачив він, що це смачно. І сказав: нехай буде ще.”',
];

// Додавання події на кнопку для генерації цитати
document.getElementById('quoteButton').addEventListener('click', function() {
  // Вибір випадкової цитати з масиву
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Виведення цитати на сторінку
  document.getElementById('quoteDisplay').textContent = randomQuote;
});

// Подія для кнопки перегляду Маніфесту
document.getElementById('viewManifestBtn').addEventListener('click', function() {
  document.getElementById('manifestModal').style.display = "block";
});

// Закриття модального вікна
document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('manifestModal').style.display = "none";
});

// Закриття модального вікна при натисканні на фон
window.onclick = function(event) {
  if (event.target == document.getElementById('manifestModal')) {
    document.getElementById('manifestModal').style.display = "none";
  }
};
