document.addEventListener("DOMContentLoaded", () => {
  // This event listener ensures the code inside runs after the entire HTML document is fully loaded and parsed.

  // Smooth Scroll functionality:
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Selects all anchor (<a>) elements whose `href` attribute starts with "#" (internal links).
    anchor.addEventListener("click", function (e) {
      // Adds a click event listener to each of the selected anchor elements.
      e.preventDefault();
      // Prevents the default action of the link click, which would be to jump immediately to the target.
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        // Selects the element in the DOM that matches the `href` attribute of the clicked link (e.g., '#about').
        behavior: "smooth"
        // Specifies that the scrolling to the target element should be smooth.
      });
    });
  });

  // Typewriter Effect functionality:
  const textToType = "A computer science engineering student who just started her Cybersecurity journey, passionate about tech, coding, and languages...";
  // Defines the string of text that will be displayed by the typewriter effect.
  const target = document.getElementById("typewriter-text");
  // Gets a reference to the HTML element where the typewriter effect will be applied (the <p> with the ID "typewriter-text").

  let i = 0;
  // Initializes a counter variable `i` to 0, which will be used to track the current character being typed.

  function typeWriter() {
    // Defines a function named `typeWriter` that will handle the typing animation.
    if (i < textToType.length) {
      // Checks if the current index `i` is less than the total length of the `textToType`.
      target.textContent += textToType.charAt(i);
      // Appends the character at the current index `i` from `textToType` to the `textContent` of the `target` element.
      i++;
      // Increments the index `i` to move to the next character.
      setTimeout(typeWriter, 40); // speed in ms
      // Calls the `typeWriter` function again after a delay of 40 milliseconds, creating the typing effect.
    }
  }

  typeWriter(); // Start typing
  // Immediately calls the `typeWriter` function when the script runs (after the DOM is loaded), to start the typing animation.
});


document.addEventListener("DOMContentLoaded", () => {
  // This event listener ensures the code inside runs after the entire HTML document is fully loaded and parsed.

  // Update footer year functionality:
  const yearSpan = document.getElementById("year");
  // Gets a reference to the HTML element with the ID "year" (presumably a <span> in your footer).
  const currentYear = new Date().getFullYear();
  // Creates a new Date object to get the current date from the user's device clock and then extracts the full year from it.
  yearSpan.textContent = currentYear;
  // Sets the `textContent` of the `yearSpan` element to the value of the `currentYear`, updating the year displayed in the footer.
});


document.addEventListener("DOMContentLoaded", () => {
  // This event listener ensures the code inside runs after the entire HTML document is fully loaded and parsed.

  // "Scroll to Top" button functionality:
  const scrollBtn = document.getElementById("scrollToTopBtn");
  // Gets a reference to the HTML element with the ID "scrollToTopBtn" (the button that will scroll the user to the top).

  window.addEventListener("scroll", () => {
    // Adds a scroll event listener to the entire window. This function will execute whenever the user scrolls.
    if (window.scrollY > 300) {
      // Checks if the vertical scroll position (how far down the user has scrolled) is greater than 300 pixels.
      scrollBtn.classList.remove("opacity-0", "invisible");
      // If the scroll position is greater than 300px, it removes the Tailwind CSS classes "opacity-0" and "invisible", making the button visible.
    } else {
      // If the scroll position is 300px or less.
      scrollBtn.classList.add("opacity-0", "invisible");
      // It adds back the Tailwind CSS classes "opacity-0" and "invisible", making the button hidden.
    }
  });

  scrollBtn.addEventListener("click", () => {
    // Adds a click event listener to the "scrollToTopBtn". This function will execute when the button is clicked.
    window.scrollTo({
      // Scrolls the window to a specific position.
      top: 0,
      // Sets the vertical scroll position to the very top of the page (0 pixels).
      behavior: "smooth"
      // Specifies that the scrolling should be animated and smooth.
    });
  });
});

