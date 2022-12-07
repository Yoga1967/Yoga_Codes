$('.year-number').on('click', function () {
    if ($(this).siblings(".point-line")) {
        $(".point-line").removeClass('active');
        $(this).siblings(".point-line").toggleClass("active");
        var index = $(this).parent().index();
        var index1 = index + 2;
        console.log(index);
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
