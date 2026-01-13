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


  /* ================================
     LIVESTREAM COUNTDOWN (WORKING)
     Sunday 21 Dec 2025 — 10:30 AM
  ================================ */
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const titleEl = document.getElementById("countdownTitle");

  if (daysEl && hoursEl && minutesEl && secondsEl) {

    const nextService = new Date(2025, 11, 21, 10, 30, 0).getTime();

    function updateCountdown() {
      const now = Date.now();
      const diff = nextService - now;

      if (diff <= 0) {
        if (titleEl) titleEl.textContent = "We Are Live Now!";
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      daysEl.textContent = Math.floor(diff / (1000*60*60*24));
      hoursEl.textContent = Math.floor((diff / (1000*60*60)) % 24);
      minutesEl.textContent = Math.floor((diff / (1000*60)) % 60);
      secondsEl.textContent = Math.floor((diff / 1000) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

});
/* ================================
   LIVESTREAM STATUS SWITCH
================================ */
const now = Date.now();
const serviceStart = new Date(2025, 11, 21, 10, 30, 0).getTime();
const serviceEnd = serviceStart + (2 * 60 * 60 * 1000); // 2 hours

const countdownBox = document.getElementById("countdownBox");
const titleEl = document.getElementById("countdownTitle");
const ytFrame = document.getElementById("ytLive");

if (now >= serviceStart && now <= serviceEnd) {
  // LIVE
  if (countdownBox) countdownBox.style.display = "none";
  if (titleEl) titleEl.textContent = "🔴 We Are Live Now!";
}

if (now > serviceEnd) {
  // AFTER SERVICE
  if (countdownBox) countdownBox.style.display = "none";
  if (titleEl) titleEl.textContent = "Service has ended — Watch the replay";

  if (ytFrame) {
    ytFrame.src = "https://www.youtube.com/embed/AEmIUpETbek";
  }
}
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const yt = document.getElementById("ytLive");
  const liveBox = document.getElementById("liveWrapper");
  const offlineBox = document.getElementById("offlineBox");
  const status = document.getElementById("liveStatus");

  if (!yt) return;

  setTimeout(() => {
    const isLive = yt.offsetHeight > 100;

    if (isLive) {
      // LIVE
      offlineBox.style.display = "none";
      liveBox.style.display = "block";
      status.classList.remove("offline");
      status.classList.add("live");
      status.querySelector(".label").textContent = "LIVE NOW";
    } else {
      // OFFLINE
      liveBox.style.display = "none";
      offlineBox.style.display = "block";
      status.classList.remove("live");
      status.classList.add("offline");
      status.querySelector(".label").textContent = "OFFLINE";
    }
  }, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("ytLive");
  const liveStatus = document.getElementById("liveStatus");
  const liveLabel = liveStatus.querySelector(".label");
  const liveDot = liveStatus.querySelector(".dot");

  const offlineBox = document.getElementById("offlineBox");
  const liveBtn = document.getElementById("liveActionBtn");

  let confirmed = false;

  function setLive() {
    confirmed = true;
    liveStatus.classList.add("live");
    liveLabel.textContent = "LIVE now";
    liveDot.style.background = "#ff1a1a";

    offlineBox.style.display = "none";
    iframe.style.display = "block";

    liveBtn.textContent = "Go to Livestream";
    liveBtn.href = "https://www.youtube.com/@ngc254/live";
  }

  function setOffline() {
    if (confirmed) return;

    liveStatus.classList.remove("live");
    liveLabel.textContent = "Offline";
    liveDot.style.background = "gray";

    iframe.style.display = "none";
    offlineBox.style.display = "block";

    liveBtn.textContent = "Go to YouTube Channel";
    liveBtn.href = "https://www.youtube.com/@ngc254";
  }

  // If iframe loads properly → assume LIVE
  iframe.addEventListener("load", () => {
    setTimeout(setLive, 1500);
  });

  // Fallback: if nothing loads → offline
  setTimeout(setOffline, 4000);
});
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("ytLive");
  const status = document.getElementById("liveStatus");
  const offlineBtn = document.getElementById("offlineBtn");
  const liveBtn = document.getElementById("liveBtn");

  // Start hidden to avoid flicker
  iframe.style.visibility = "hidden";

  setTimeout(() => {
    // If iframe has rendered properly → LIVE
    if (iframe.offsetHeight > 100) {
      status.classList.remove("offline");
      status.classList.add("live");
      status.querySelector(".label").textContent = "LIVE NOW";

      offlineBtn.style.display = "none";
      liveBtn.style.display = "inline-block";
    }

    // Reveal iframe after decision
    iframe.style.visibility = "visible";
  }, 3500); // wait for YouTube to fully respond
});
