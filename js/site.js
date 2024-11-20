document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
    
    if (!isClickInside && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
  
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        formResponse.textContent = "All fields are required!";
        formResponse.style.color = 'red';
        formResponse.style.opacity = 1;
        return;
      }
      
      formResponse.textContent = `Thank you, ${name}! You have joined our mailing list.`;
      formResponse.style.color = 'green';
      formResponse.style.opacity = 1;
      
      contactForm.reset();
    });
  }  
});


