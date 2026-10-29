/*
  CJ ASSOCIATES WEBSITE SETUP
  1. Replace the email address below with the email you want to receive enquiries at.
  2. Replace the sample project concept illustrations with your own authorised project images when ready.
  3. To add a WhatsApp button, add your phone number in international format (India = 91 followed by the number) and update the contact section.
*/
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
    status.textContent = "Before using this form, open script.js and replace YOUR_EMAIL@example.com with your real business email address.";
    return;
  }

  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const service = data.get("service");
  const message = data.get("message");
  const subject = encodeURIComponent("Website enquiry — " + service);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\nService: " + service + "\n\nProject details:\n" + message
  );
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  status.textContent = "Your email app should open with the enquiry drafted. Please send it from your email app.";
});
