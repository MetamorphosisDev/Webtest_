const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
        perspective(1000px)
        rotateX(${-(y - rect.height / 2) / 15}deg)
        rotateY(${(x - rect.width / 2) / 15}deg)
        translateY(-10px)
      `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
});

const scrollNotice = document.getElementById("scrollNotice");

function showNotification() {
  scrollNotice.classList.add("show");
  setTimeout(() => {
    scrollNotice.classList.remove("show");
  }, 5000);
}

setInterval(() => {
  if (window.scrollY < 100) {
    showNotification();
  }
}, 6900);
