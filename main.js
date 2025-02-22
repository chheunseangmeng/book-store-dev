ScrollReveal().reveal('.scroll-reveal', {
  delay: 150,
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: false
});

// // Toggle the navigation menu and the icon
// function toggleMenu() {
//     const nav = document.querySelector('nav');
//     const menuIcon = document.getElementById('menuIcon');
    
//     nav.classList.toggle('active'); 
//     menuIcon.classList.toggle('active'); 
// }


function toggleMenu() {
  const nav = document.querySelector('nav');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  // Toggle the navigation menu visibility
  nav.classList.toggle('active');
  
  // Toggle the visibility of the icons
  if (nav.classList.contains('active')) {
      hamburgerIcon.style.display = 'none';  // Hide hamburger icon
      closeIcon.style.display = 'inline';    // Show close (X) icon
  } else {
      hamburgerIcon.style.display = 'inline'; // Show hamburger icon
      closeIcon.style.display = 'none';      // Hide close (X) icon
  }
}
