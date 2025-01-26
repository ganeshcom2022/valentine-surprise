// Function to check login credentials
function checkAccess() {
  const nameInput = document.getElementById("name-input").value.trim();
  const passwordInput = document.getElementById("password-input").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (nameInput.toLowerCase() === "dikshya pandey" && passwordInput === "2025") {
    // Hide the access page and show the valentine page
    document.getElementById("access-page").classList.add("hidden");
    document.getElementById("valentine-page").classList.remove("hidden");
  } else {
    // Show an error message
    errorMessage.textContent = "Oops! This surprise isn’t for you.";
    errorMessage.classList.add("show");
  }
}

// Function to move to the next page
function nextPage(pageId) {
  // Hide all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.add("hidden"));

  // Show the selected page
  document.getElementById(pageId).classList.remove("hidden");
}

// Countdown functionality
function startCountdown() {
  const freeDayInput = document.getElementById("free-day-input").value;
  const countdownContainer = document.getElementById("countdown");

  if (!freeDayInput) {
    alert("Please select a date!");
    return;
  }

  // Parse the selected date
  const freeDate = new Date(freeDayInput);
  const now = new Date();

  // If the selected date is in the past, show an error
  if (freeDate < now) {
    alert("Please select a future date!");
    return;
  }

  // Show the countdown page
  nextPage("countdown-page");

  // Start the countdown
  const interval = setInterval(() => {
    const now = new Date();
    const distance = freeDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownContainer.textContent = "It's time!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000)) / 1000);

      countdownContainer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}
