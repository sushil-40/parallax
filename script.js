document.addEventListener("DOMContentLoaded", function () {
  // Function to apply parallax effect
  function applyParallax() {
    if (window.innerWidth <= 768) {
      const parallaxElements = document.querySelectorAll(
        ".img1, .img2, .img3, .img4"
      );
      window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;
        parallaxElements.forEach((el) => {
          const speed = 0.5; // Adjust the speed here
          el.style.backgroundPositionY = `${scrollPos * speed}px`;
        });
      });
    }
  }

  applyParallax(); // Initialize the parallax effect
});
