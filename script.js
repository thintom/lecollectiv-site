document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll('.carousel-image');  // Correct class selector
  let current = 0;

  items[current].classList.add('active'); // Start by showing first image

  setInterval(() => {
    // Remove active from current
    items[current].classList.remove('active');

    // Update current index
    current = (current + 1) % items.length;

    // Add active to new current
    items[current].classList.add('active');
  }, 5000); // change every 3 seconds
});




