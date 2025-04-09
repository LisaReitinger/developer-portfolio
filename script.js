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

// Smooth scroll when clicking navbar links
document.querySelectorAll('.nav-links li').forEach((link) => {
  link.addEventListener('click', () => {
    const sectionId = link.textContent.toLowerCase();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Submission Success Message
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Send the form data via Formspree
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          formMessage.classList.remove('hidden');
          formMessage.classList.add('visible');
          contactForm.reset();
        } else {
          formMessage.textContent =
            'Oops, something went wrong. Please try again.';
          formMessage.classList.remove('hidden');
          formMessage.classList.add('visible');
        }
      })
      .catch(() => {
        formMessage.textContent =
          'There was a problem. Please email me instead.';
        formMessage.classList.remove('hidden');
        formMessage.classList.add('visible');
      });
  });
}
