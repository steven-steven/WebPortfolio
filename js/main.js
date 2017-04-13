
    var letterFilters = document.querySelectorAll(".navTabs li");

    var scroll = 0;

    // Cache selector
    var lastId,
    topMenu = $(".navTabs"),

    // All list items
    menuItems = topMenu.find("a"),

    // All Letter Anchors corresponding to menuItems
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    //We no longer use the variable because the fixed heading will change in size depending on the scroll.
    var topMenuHeight = $(".fixedHeading").outerHeight();

    
    //Animate each scrollspy clicks on the navigation
    menuItems.click(function (e) {
        
        var href = $(this).attr("href"),
          //elementToALink = document.getElementById("A").getBoundingClientRect().top + window.scrollY,
          offsetTop = href === "#" ? 0 : document.getElementById(href.split('#')[1]).getBoundingClientRect().top - topMenuHeight + window.scrollY+1;         
        //console.log(offsetTop);
        //console.log(href);
        $('html, body').stop().animate({ 
            scrollTop: Math.round(offsetTop)
        }, 300);
        
        e.preventDefault();
    });



    function setupScrollSpy()
    {
        // Set cur as array of letter IDs that the scroll has passed
        var cur = scrollItems.map(function () {
            //var elementToALink = document.getElementById("A").getBoundingClientRect().top + window.scrollY;
            //console.log(this);
            //console.log("offset from "+ (parseInt($(this).offset().top)));
            if ($(this)[0].getBoundingClientRect().top - topMenuHeight - 1 < 0) {
                //console.log($(this).offset().top);
                //console.log( $("#fixedContentBlock").outerHeight());
                //console.log($(this).offset().top);
                //console.log(this);
                return this;
            }

        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        
        if (lastId !== id) {
            console.log(id);

            lastId = id;
            // Set/remove active class
            menuItems
              .parent().removeClass("active")
              .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    }

    setupScrollSpy();
    $(window).scroll(function() {
        setupScrollSpy();
    })
