var typed = new Typed("#element", {
  strings: ["Web Developer", "Computer Science Student at ULM"],
  typeSpeed: 50,
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Toggle between Languages and Frameworks
document
  .getElementById("toggleLanguages")
  .addEventListener("click", function () {
    document.getElementById("languagesGrid").style.display = "grid";
    document.getElementById("frameworksGrid").style.display = "none";
    document.getElementById("toggleLanguages").classList.add("active");
    document.getElementById("toggleFrameworks").classList.remove("active");
  });

document
  .getElementById("toggleFrameworks")
  .addEventListener("click", function () {
    document.getElementById("languagesGrid").style.display = "none";
    document.getElementById("frameworksGrid").style.display = "grid";
    document.getElementById("toggleFrameworks").classList.add("active");
    document.getElementById("toggleLanguages").classList.remove("active");
  });
