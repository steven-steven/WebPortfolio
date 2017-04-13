// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 320
});
$(".accordionPanel").on('click', function () {
    if (!$(this).siblings('.accordion')[0].classList.contains('collapse')) {
        return;   
    }
   
    $this = $(this);
    setTimeout(function () {
        $this.parent().toggleClass("gridActive");
        // trigger layout after item size changes
        $grid.masonry('layout');

        var $arrow = $this.find("i")[0];
        if ($arrow.innerHTML == "keyboard_arrow_down") {
            $arrow.innerHTML = "keyboard_arrow_up";
        } else {
            $arrow.innerHTML = "keyboard_arrow_down";
        }

    }, 200);
    
    
});