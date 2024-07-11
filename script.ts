const contactForm = document.getElementById('contact-form') as HTMLFormElement;

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    console.log('Form submitted:', { name, email, message });

    alert('Thank you for your message!');

    contactForm.reset();
});
