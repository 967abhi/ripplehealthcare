let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// ======
document.getElementById('openPdfButton').addEventListener('click', function() {
  // Replace 'your-pdf-file.pdf' with the path to your PDF file
  var pdfUrl = './yourpdf.pdf';

  // Open the PDF in a new window or tab
  window.open(pdfUrl, '_blank');
});
// ===========================================
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  let currentCardIndex = 0;

  function showCard(index) {
      cards.forEach((card, i) => {
          if (i === index) {
              card.classList.add("active");
          } else {
              card.classList.remove("active");
          }
      });
  }

  function nextCard() {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      showCard(currentCardIndex);
  }

  // Auto-slide the carousel every 3 seconds
  setInterval(nextCard, 4000);
  
  // Initial display
  showCard(currentCardIndex);
});