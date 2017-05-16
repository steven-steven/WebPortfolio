// external js: masonry.pkgd.js

function refreshMansory(){
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 343
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
}

displayMansoryProjects();
function displayMansoryProjects() {
    var projectCount = 0;
    for (var j = 0; j < projectJson.length; j++) {
        var projectObj = projectJson[j];
        if (projectObj["skills"].includes("chosen")) {
            projectCount++;

            var projectName = projectObj["projectName"];
            var projectCaption = projectObj["shortDescription"];
            var projectDesc = projectObj["longDescription"];
            var projectImg = projectObj["imgSrc"];
            var skills = projectObj["skills"].toString().replace(",",", ");

            var htmlString = '<div class="grid-item grid-item--height4">';
            htmlString+= '<div class="accordionPanel" href="#project'+projectCount+'" data-toggle="collapse">'
            htmlString+= '<div class="innerPanel">&nbsp;<div class="projectImage"><img src="'+ projectImg +'"></div>'
            htmlString += '<div class="projectCaption"><b>' + projectName + '</b> - ' + projectCaption + '</div></div>';
            htmlString+= '<div class="iconWrap"><i class="material-icons">keyboard_arrow_down</i></div></div>'
            htmlString+= '<div id="project'+projectCount+'" class="accordion collapse">';
            htmlString += '<div class="hiddenAccordion">' + projectDesc;
            if (projectObj["modal"]) {
                htmlString += '</br></br><a class="modalLink" onclick="openModal(\'' + projectName + '\',\'' + projectObj["modal"] + '\')"> Show More</a></br>';
            } 
            htmlString += '</div></div></div>';
            $(".grid").append(htmlString);
            
        }
    }
    setTimeout(function () {
        refreshMansory();
    }, 200);
}

