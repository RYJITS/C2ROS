// Gestion du formulaire de contact
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Votre message a été envoyé !');
            form.reset();
        });
    });
})();
