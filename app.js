const nav = document.querySelector('#CUSTOM-main-navbar'); 
const brand = document.querySelector('.navbar-brand');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function(event) { 
    event.preventDefault();
    if (window.scrollY <= 150) { 
        nav.classList.remove('scrolled');
        brand.style.color = '#ea1c2c';
        navLinks.forEach(element => {
        element.style.color = 'black';
        });

    } else {
        nav.classList.add('scrolled');
        brand.style.color = '#fff';
        navLinks.forEach(element => {
        element.style.color = '#fff';
        });

    }
});