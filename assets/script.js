document.addEventListener('DOMContentLoaded', () => {
  // Navbar Toogle
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

  // Intro Screen Behavior
  const enterBtn = document.getElementById('enterBtn');
  const introScreen = document.getElementById('intro');
  const siteContent = document.getElementById('site-content');
  const mainHeader = document.getElementById('main-header');

  siteContent.classList.add('hidden');

  enterBtn.addEventListener('click', () => {
    // Fade out elements
    introScreen.classList.add('fade-elements');

    // Zoom animation
    setTimeout(() => {
      introScreen.classList.add('zooming');
    }, 100);

    // Remove intro and show main site
    setTimeout(() => {
      introScreen.style.display = 'none';
      siteContent.classList.remove('hidden');
      siteContent.classList.add('visible');
      mainHeader.classList.remove('hidden');
    }, 1000);
  });

  // Smooth Scroll on one click
  document.querySelectorAll('.nav-links li').forEach((link) => {
    link.addEventListener('click', () => {
      const sectionId = link.textContent.toLowerCase();
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.querySelector('.contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

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
            formMessage.textContent = "Thank you! I'll get back to you soon 💌";
            formMessage.classList.remove('hidden');
            formMessage.classList.add('visible');
            contactForm.reset();
          } else {
            showError();
          }
        })
        .catch(() => {
          showError();
        });
    });

    function showError() {
      formMessage.textContent = 'Oops, something went wrong. Please try again.';
      formMessage.classList.remove('hidden');
      formMessage.classList.add('visible');
    }
  }

  // Typing Animation
  const words = ['Creative.', 'Curious.', 'Frontend Dev.'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typedText = document.getElementById('typed-text');

  function type() {
    const currentWord = words[wordIndex];
    const currentChars = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    typedText.textContent = currentChars;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  if (typedText) {
    type();
  }
});
