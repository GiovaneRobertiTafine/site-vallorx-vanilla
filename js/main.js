//Change navigation style on scroll
let nav = document.querySelector('.nav-container');
let time = 0;

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

    // Box Time
    if (screen.width > 970) {
        $('.schedule').css('width', '110px');
        $('.schedule').css('opacity', '1');
    } else if (time === 0) {
        $('.schedule').css('width', '0px');
        $('.schedule').css('opacity', '0');
    }
});

window.addEventListener('click', (event) => {
    if (event.path.indexOf(document.querySelector('.box-time')) < 0 && screen.width < 970) {
        console.log(event.path.indexOf(document.querySelector('.box-time')));
        $('.schedule').css('width', '0px');
        $('.schedule').css('opacity', '0');
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

var horas = setInterval(() => {
    moment.locale('pt');
    $('#new-york').text(moment().subtract('01:00:00').format('LT'));
    $('#pequim').text(moment().add('11:00:00').format('LT'));
    $('#londres').text(moment().add('04:00:00').format('LT'));
}, 1000);

function openNav() {
    if ($('.schedule').width() === 0) {
        time = 1;
        $('.schedule').css('width', '110px');
        $('.schedule').css('opacity', '1');
    } else {
        time = 0;
        $('.schedule').css('width', '0px');
        $('.schedule').css('opacity', '0');
    }
}
