// Генератор "лавашних" цитат
const quotes = [
  "Лаваш — це любов, яку ти відчуваєш кожен раз, коли відламлюєш шматочок.",
  "В кожному шматочку лавашу прихований сенс життя.",
  "Тісто — основа всього, а лаваш — його кульмінація.",
  "Якщо ти не любиш лаваш, ти не розумієш справжню духовність.",
];

document.getElementById('quoteButton').addEventListener('click', function() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quoteDisplay').textContent = randomQuote;
});

// Завантаження маніфесту у PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Маніфест Тістового Світла", 20, 30);
  doc.text("Тісто — це наш шлях. Лаваш — наша віра.", 20, 40);
  
  doc.save("manifest.pdf");
});
