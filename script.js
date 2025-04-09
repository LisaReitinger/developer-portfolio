document.addEventListener('DOMContentLoaded', () => {
  // NAvbar Toogle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('li').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Intro Screen Logic
  const enterBtn = document.getElementById('enterBtn');
  const introScreen = document.getElementById('intro');
  const siteContent = document.getElementById('site-content');

  // Hide main content initially
  siteContent.classList.add('hidden');

  enterBtn.addEventListener('click', () => {
    // Step 1: Hide heading and button immediately
    introScreen.classList.add('fade-elements');

    // Step 2: Trigger laptop zoom after slight delay
    setTimeout(() => {
      introScreen.classList.add('zooming');
    }, 100); // smooth transition

    // Step 3: After zoom, show site
    setTimeout(() => {
      introScreen.style.display = 'none';
      siteContent.classList.remove('hidden');
      siteContent.classList.add('visible');
    }, 1000); // match zoom duration in CSS
  });
});
