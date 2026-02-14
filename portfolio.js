

// =============================
// Smooth Scroll
// =============================
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// =============================
// Scroll Reveal Animation
// =============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// =============================
// Skills Animation (Bar Fill Effect)
// =============================
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const skillBoxes = document.querySelectorAll(".skill");

  const sectionTop = skillsSection.offsetTop - 300;

  if (window.scrollY > sectionTop) {
    skillBoxes.forEach((skill, index) => {
      skill.style.transform = "scale(1.05)";
      skill.style.transition = "0.4s ease";
    });
  }
});

// =============================
// Projects Hover Lift
// =============================
document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// =============================
// Contact Form Alert
// =============================
const form = document.querySelector("#contact form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    form.reset();
  });
}


