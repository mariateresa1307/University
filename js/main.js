document.addEventListener('DOMContentLoaded', function() {
    const mainNavbar = document.getElementById('main-navbar');
    const heroSection = document.getElementById('hero-section');
    
    // Verifica que ambos elementos existen antes de continuar
    if (mainNavbar && heroSection) {
        window.addEventListener('scroll', () => {
            // El umbral de scroll se establece en la altura de la primera sección
            // Se le resta un pequeño valor para que el cambio sea más notorio
            const scrollThreshold = heroSection.offsetHeight - 50; 
            
            if (window.scrollY > scrollThreshold) {
                mainNavbar.classList.add('scrolled');
            } else {
                mainNavbar.classList.remove('scrolled');
            }
        });
    }

    // Código para el scroll suave a las secciones (puedes dejar el tuyo)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});