const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);

  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

const form = document.getElementById('feedbackForm');
const testimonialsSection = document.querySelector('.testimonials');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = form.querySelector('input[type="text"]').value;
  const messageInput = form.querySelector('textarea').value;

  const testimonial = document.createElement('div');
  testimonial.classList.add('testimonial');
  testimonial.innerHTML = `
    <p class="content">${messageInput}</p>
    <p class="author">${nameInput}</p>
  `;
  testimonialsSection.appendChild(testimonial);
  form.reset();
});



  
