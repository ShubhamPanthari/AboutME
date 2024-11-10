const navLinks = document.querySelectorAll('.sidenavlink');
const sections = document.querySelectorAll('.bod');

navLinks[0].classList.add('active');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    navLinks.forEach((otherLink) => otherLink.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((otherLink) => otherLink.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});