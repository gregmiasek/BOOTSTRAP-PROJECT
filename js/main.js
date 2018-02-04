$('a[href*="http"]').click(function (fading) {
    fading.preventDefault();
    console.log('test');


    var url = $(this).attr('href');
    console.log(url);

    $('body').fadeOut(2000, function () {
        window.location.href = url;
    });



});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 70) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll');
    }

    var progress1 = $(window).scrollTop() * 100;
    var cialo = $('body').height();
    var okno = $(window).height();
    var progress2 = cialo - okno;
    var proc = progress1 / progress2;

    $(".progressbar").css("width", proc + "%");

    console.log(proc);
});

$('#submit').click(function (getinfo) {
    getinfo.preventDefault();

    var formData = []

    var name = $('#name').val();
    var mail = $('#mail').val();
    var tel = $('#tel').val();
    var message = $('#mess').val();

    formData.push('imię: ' + name);
    formData.push('email: ' + mail);
    formData.push('telefon: ' + tel);
    formData.push('treść wiadomości: ' + message);
    console.log(message);

    console.log(formData)

    var formdane = JSON.stringify(formData);

    console.log(formdane);

})

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});