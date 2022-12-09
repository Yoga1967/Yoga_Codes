$('.year-number').on('click', function () {
    if ($(this).siblings(".point-line")) {
        $(".point-line").removeClass('active');
        $(this).siblings(".point-line").toggleClass("active");

        var index = $(this).parent().index();
        var index1 = index + 4;
        console.log(index1);
        $(".years-image").removeClass("active");
        $(".content-second").children().eq(index1).toggleClass("active");

        $(".date").removeClass("date-active");
        $(".date").eq(index).toggleClass("date-active");
    }
});


if ($('.point-line').hasClass(".active")) {
    setTimeout(function () {
        $('#square').addClass('highlight')
    }, 6000);

    setTimeout(function () {
        $('#square').removeClass('highlight');
    }, 10000);
}

$('#dropdown').on('change', function (e) {
    $('.tab-pane').removeClass('active in')
    $('#' + $(e.currentTarget).val()).addClass("active in");
})
if ($(window).width() < 1441) {
    $('.presale-box').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        speed: 250
    });
}
$('.burger-menu-sp a').on('click', function () {
    $('.menu').removeClass('hide-menu');
    $('.menu').addClass('show-menu');
});
$('.burger-menu-sp-close a').on('click', function () {
    $('.menu').addClass('hide-menu');
    $('.menu').removeClass('show-menu');
});

$('.read-more-button').on('click', function () {

    var btnText = document.getElementById("myBtn");
    if ($('.read-more').hasClass("hide-sp-only")) {
        $('.read-more').removeClass("hide-sp-only");
        btnText.innerHTML = "Read less";
    } else {
        $('.read-more').addClass("hide-sp-only");
        btnText.innerHTML = "Read more";
    }
});