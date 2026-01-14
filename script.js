/* =================================
   GLOBAL SCRIPT — CLEAN & FINAL
================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     PAGE READY (NO FLASH)
  ================================ */
  document.body.classList.add("page-ready");


  /* ================================
     MOBILE MENU
  ================================ */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }


  /* ================================
     FOOTER YEAR
  ================================ */
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();


  /* ================================
     TESTIMONIAL SLIDER
  ================================ */
  const testimonials = document.querySelectorAll(".testimonial");
  let t = 0;

  if (testimonials.length > 0) {
    testimonials[0].classList.add("active");
    setInterval(() => {
      testimonials[t].classList.remove("active");
      t = (t + 1) % testimonials.length;
      testimonials[t].classList.add("active");
    }, 4500);
  }


  /* ================================
     SCROLL REVEAL
  ================================ */
  const items = document.querySelectorAll(".fade-in");
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  items.forEach(el => reveal.observe(el));

