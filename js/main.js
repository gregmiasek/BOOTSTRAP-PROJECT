$('a[href*="http"]').click(function (fading) {
    fading.preventDefault();
    console.log('test');


    var url = $(this).attr('href');
    console.log(url);

    $('body').fadeOut(5000, function () {
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