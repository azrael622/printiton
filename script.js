const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navibar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('.services-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('clicked');
  });
});