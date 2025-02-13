document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-nav-link');
            
            pages.forEach(page => {
                page.classList.remove('active');
                if(page.getAttribute('data-page') === targetPage) {
                    page.classList.add('active');
                }
            });
        });
    });
});