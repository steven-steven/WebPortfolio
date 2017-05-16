$(".toggleLife").click(function () {


    var selector = $(this).data("target");

    if (!$(selector).hasClass('active')) {

        $(".toggleLife").each(function (index) {
            var selector = $(this).data("target");
            $(selector).removeClass('active');
            $(selector).css("width", 0 + "px");
        });
        $(selector).addClass('active');

        $(this).toggleClass('active');
        var width = $(window).width() - $(".toggleLife").width()*2;
        $(selector).css("width", width + "px");
        //setTimeout(function () {

        //}, 3000);
        $('.lifeWindow').animate({ scrollLeft: $(this).prev().offset().left }, 800);
        console.log($(this).offset().left)

        
    } else {
        $(selector).removeClass('active');
        $(this).toggleClass('active');
        $(selector).css("width", 0 + "px");
    }

    var thisButton = $(this)

});

resizeLifeWindow();
/*
window.onresize = function (event) {
    resizeLifeWindow();
    console.log("res")
};*/

function resizeLifeWindow() {
    vph = $(window).height();
    $(".lifeWindow").css({ "height": vph + "px" });
}