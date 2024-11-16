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
// add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // loop through each section
  sections.forEach((section, index) => {
    // get the section's offset top
    const sectionTop = section.offsetTop;

    // check if the section is in view
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
      // add a class to the section to indicate it's in view
      section.classList.add('in-view');
    } else {
      // remove the class if the section is not in view
      section.classList.remove('in-view');
    }
  });
});
// get the hamburger button and the side nav
const hamburgerButton = document.querySelector('.toggle-sidenav');
const sideNav = document.querySelector('.sidenav');

// add an event listener to the document click event
document.addEventListener('click', (event) => {
  // check if the click target is outside of the side nav and not the hamburger button
  if (!sideNav.contains(event.target) && event.target !== hamburgerButton) {
    // hide the side nav
    sideNav.classList.remove('show');
  }
});

// add an event listener to the hamburger button click event
hamburgerButton.addEventListener('click', () => {
  // toggle the side nav's visibility
  sideNav.classList.toggle('show');

  // hide the side nav again after 5 seconds
  const timeoutId = setTimeout(() => {
    sideNav.classList.remove('show');
  }, 5000); // 5000 milliseconds = 5 seconds
});
