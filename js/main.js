//Change navigation style on scroll
let nav = document.querySelector('.nav-container');

window.addEventListener('scroll', (event) => {
    console.log(screen.width);

    // window.scrollY >= 44 ? nav.classList.add('scroll') : nav.classList.remove('scroll');

    if (screen.width > 768) {
        window.scrollY >= 44 ? nav.classList.add('scroll') : nav.classList.remove('scroll');
    }
});

window.addEventListener('resize', () => {
    if (screen.width <= 768) {
        nav.classList.add('scroll');
        console.log('scroll');
    } else {
        console.log('width');
        window.scrollY > 44 ? nav.classList.add('scroll') : nav.classList.remove('scroll');
    }
});

$(document).ready(function () {
    if (screen.width <= 768) {
        nav.classList.add('scroll');
    }

    $('.dropdown').hover(
        function () {
            screen.width > 768 && $('#sub-menu').slideDown('medium');
        },
        function () {
            screen.width > 768 && $('#sub-menu').slideUp('medium');
        }
    );
});

//Active navigation on scroll
window.addEventListener('scroll', (event) => {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;

    navigationLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
