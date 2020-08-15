//Change navigation style on scroll
let nav = document.querySelector('.nav-container');
let time = 0;

window.addEventListener('scroll', (event) => {

    if (screen.width > 768) {
        if (window.scrollY >= 44) {
            nav.classList.add('scroll');
            $('.nav-logo img').css('width', '100px');
        } else {
            nav.classList.remove('scroll');
            $('.nav-logo img').css('width', '200px');
        }
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
    var data = new Date()

    data.toLocaleTimeString('pt-br')

    if (screen.width < 768) {
        nav.classList.add('scroll');
    } else {
        if (window.scrollY >= 44) {
            $('.nav-logo img').css('width', '100px');
        } else {
            $('.nav-logo img').css('width', '200px');
        }
    }

    $('.dropdown').hover(
        function () {
            screen.width > 768 && $('#sub-menu').slideDown('medium');
        },
        function () {
            screen.width > 768 && $('#sub-menu').slideUp('medium');
        }
    );

    // Enviar email
    $('#btn').click( function(){
        /* Coletando dados */
        
        if($('#nome').val().trim() === '' || $('#nome').val().trim().length < 5) {
            $('#nome').focus()
            return
        } 
        var patt1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if($('#email').val().trim() === '' || !($('#email').val().trim().match(patt1))) {
            $('#email').focus()
            return
        } 
        if($('#assunto').val().trim() === '' || $('#assunto').val().trim().length < 5) {
            $('#assunto').focus()
            return
        } 
        if($('#mensagem').val().trim() === '' || $('#mensagem').val().trim().length < 10) {
            $('#mensagem').focus()
            return
        } 

        var urlData = $('#formExemplo').serialize();

        $.ajax({
            type : 'POST',
            url  : './js/email.php',
            data : urlData,
            dataType: 'json',
            success: (result) => {
                if (result.status === '200') {
                    $('#resposta-email').html(result.mensagem).show()
                    setTimeout(() => {
                        $('#resposta-email').hide()
                    }, 3000)
                } else if (result.status === '400') {
                    $('#resposta-email').html(result.mensagem).css('color', 'red').show()
                    setTimeout(() => {
                        $('#resposta-email').hide()
                    }, 3000)
                } 
            },
            error: (result) => {
                $('#resposta-email').html('Infelizmente houve um erro ao enviar sua mensagem!').css('color', 'red').show()
                setTimeout(() => {
                    $('#resposta-email').hide()
                }, 3000)

            },
            beforeSend: () => { /* antes de enviar */
                $('#loading').fadeIn('fast'); /* mostra o loading */
            },
            complete: () => { /* completo */
                $('#loading').fadeOut('fast'); /* esconde o loading */
            }
            
        });
        
        temp = null;

        return false;

    });

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

bootstrapValidate('#nome', 'min:5: Mínimo 5 caracteres!');
bootstrapValidate('#email', 'email: Insira um email válido!');
bootstrapValidate('#assunto', 'min:5: Mínimo 5 caracteres!');
bootstrapValidate('#mensagem', 'min:10: Mínimo 10 caracteres!');


