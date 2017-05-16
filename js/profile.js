//Onload or onresize
var hoverButtonFirstTranslate = $("#profile").width() - $(".hoverButton").offset().left - $(".hoverButton").width();
var hoverButtonSecondTranslate = -$(".hoverButton").offset().left + $(".introBlock").offset().left;
var hoverButtonBackTranslate = $(".hoverButton").offset().left - $(".introBlock").offset().left;
console.log($(".introWrap").offset().left);

$("[data-toggle='toggle']").click(function () {
    var thisButton = $(this)
    animateCircle(thisButton);
});

function animateCircle(thisButton){
    var selector = thisButton.data("target");
    $(selector).toggleClass('active');

    parent = document.getElementsByClassName('parent');
    children = document.getElementById('children');

    if ($(selector).hasClass('active')) {
        thisButton[0].style.webkitTransform = "translateX(" + hoverButtonFirstTranslate + "px)";
        setTimeout(function () {
            thisButton.toggleClass('active');

            if ($(".animationWrap.active .hoverButton").length) {
                console.log($(thisButton[0]));
                //thisButton.find(".hoverButton")[0].style.webkitTransform = "translateX(" + hoverButtonSecondTranslate + "px)";
                thisButton[0].style.webkitTransform = "translateX(" + hoverButtonSecondTranslate + "px)";
            }

            var width = $(".introBlock").width() - $(".hoverButton").width() - 10
            $(selector).css("width", width + "px");

        }, 500);
        //this.style.webkitTransform = "translateX(" + 0 + "px)";
        return;
    }

    thisButton.toggleClass('active');
    console.log(hoverButtonBackTranslate);
    thisButton[0].style.webkitTransform = "translateX(" + 0 + ")";
    $(selector).css("width", 0 + "px");
}

function resizeProfile(event) {
    $(".animationWrap").each(function (index) {
        var thisButton = $(this)
        console.log(thisButton)
        if (thisButton.hasClass("active")) {
            animateCircle(thisButton);
        }
    });
    //Onload or onresize
    setTimeout(function () {
        hoverButtonFirstTranslate = $("#profile").width() - $(".hoverButton").offset().left - $(".hoverButton").width();
        hoverButtonSecondTranslate = -$(".hoverButton").offset().left + $(".introBlock").offset().left;
        hoverButtonBackTranslate = $(".hoverButton").offset().left - $(".introBlock").offset().left;
        console.log("Hover "+hoverButtonFirstTranslate);
    }, 500);
};

