$('.year-number').on('click', function () {
    if ($(this).siblings(".point-line")) {
        $(".point-line").removeClass('active');
        $(this).siblings(".point-line").toggleClass("active");
        var index = $(this).parent().index();
        var index = index + 2;
        console.log(index);
        $(".years-image").removeClass("active");
        $(".content-second").children().eq(index).toggleClass("active");
    } 
});
