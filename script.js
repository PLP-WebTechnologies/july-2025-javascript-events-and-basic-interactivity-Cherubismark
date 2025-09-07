// Part 1: Event Handling
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button was clicked!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", function() {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
});

// Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  // Name validation
  if (name === "") {
    message += "Name is required. ";
  }

  // Email validation with regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message += "Enter a valid email. ";
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    message += "Password must be at least 6 characters. ";
  }

  // Show result
  let formMessage = document.getElementById("formMessage");
  if (message === "") {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = message;
    formMessage.style.color = "red";
  }
});
