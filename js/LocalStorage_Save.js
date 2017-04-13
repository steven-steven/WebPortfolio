/*****************************************************************************/
/********************************* VARIABLES *********************************/
/*****************************************************************************/

//Cached jquery selectors
var jqcheckBoxDOM = $(".skillTypes");
var jqDocument = $(document);
var jqWindow = $(window);

/*****************************************************************************/
/********************************* LISTENERS *********************************/
/*****************************************************************************/

jqDocument.ready(function () {

    addUniqueElements = function (key) { var uniqueID = key.replace(programStorageVariable, ""); modifyButtonAddToSave($("#" + uniqueID)); }
    removeUniqueElements = function (key) { var uniqueID = key.replace(programStorageVariable, ""); modifyButtonRemoveFromSave($("#" + uniqueID)); }

    //Make sure only the correct checkbox are checked on load
    if (storageAvailable) {
        verifyCheckBoxes();
    }
});

jqcheckBoxDOM.click(function () {
    
    var uniqueID = this.id;
    console.log($(this).hasClass("active"));
    console.log($(this));
    /*
    if (jqcheckBoxDOM.hasClass("FilterAll")) {
        $($($(this)[0].parentNode).find('.skillTypes')).each(function () {
            if ($(this).hasClass("active")) {
                removeLocalStorage(programStorageVariable + uniqueID);
            }
        });
    }*/

    if (!this.classList.contains("active")) {
        
        if (this.classList.contains("FilterAll")) {
            console.log("filer all");
            $($($(this)[0].parentNode).find('.skillTypes')).each(function () {
                console.log(this);
                if (this.classList.contains("active")) {
                    console.log("remove")
                    removeLocalStorage(programStorageVariable + this.id);
                }
            });
        } else {
            var allButton = $($(this)[0].parentNode).find('.FilterAll')[0]
            if (allButton.classList.contains("active")) {
                console.log("remove")
                removeLocalStorage(programStorageVariable + allButton.id);
            }
        }
        console.log("added")
        tryAddProgram(uniqueID);
    }
    else if (this.classList.contains("active")) {
        removeLocalStorage(programStorageVariable + uniqueID);
        console.log("now removing")
    }
});

/*****************************************************************************/
/********************************* FUNCTIONS *********************************/
/*****************************************************************************/

//Debounce to only run functions after a period of inactivity ('delay' milliseconds since the function was last called)
function debounce(fn, delay) {
    var debounceTimer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

function verifyCheckBoxes() {
    jqcheckBoxDOM.each(function( index ) {
        uniqueID = this.id;
        if (!savedIdList.includes(uniqueID)) removeLocalStorage(programStorageVariable + uniqueID);
        if (savedIdList.includes(uniqueID)) addUniqueElements(uniqueID);
    });
}

//Custom code that changes visuals on program add
//Changes button properties
function modifyButtonAddToSave(modifyingButton) {

    modifyingButton.addClass("active");
    modifyingButton.find("i")[0].innerHTML = "check_box";
}
function modifyButtonRemoveFromSave(modifyingButton) {
    console.log(modifyingButton);
    modifyingButton.removeClass("active");
    modifyingButton.find("i")[0].innerHTML = "check_box_outline_blank";
}

function tryAddProgram(uniqueID) {
    var key = programStorageVariable + uniqueID;
    var value = " ";
    addLocalStorage(key, value, uniqueID);
}
