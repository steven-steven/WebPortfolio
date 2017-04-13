/*$(document).ready(function () {

    refreshClickListeners();

    //Does unique code when we add and remove programs to change the apperance of the page.
    //
    removeUniqueElements = function (key) {

    }
    addUniqueElements = function (key) {

    }
    //
});


if (storageAvailable) {
    displayStoragePrograms();
}

//****************************************************
function displayStoragePrograms() {
    
    var removeButton = '<button type="button" class="btn btn-link btn-remove" data-toggle="modal" data-target=".remove-program"><i class="material-icons">delete</i></button>';
    for (var i = 0; i < programStorage.length; i++) {

        if (programStorage.key(i).includes(programStorageVariable)) {

            var currentKey = programStorage.key(i);
            var currentProgramID = currentKey.replace(programStorageVariable, "");

            //** Display On Screen **
            var program = '<a href="' + programStorage.getItem(currentKey).split(";")[1] + '">'
            	+ programStorage.getItem(currentKey).split(";")[0] + '</a>';
            var list = "<li id=\"programList" + currentProgramID + "\"></li>"
            $('.saved-program-list').append($(list).append(removeButton, program));
        }
    }
    
}

//****************Jquery Listeners***********************
function refreshClickListeners() {
    //
    //Clear all button
    $('.clear-list .confirm').click(function () {
        // Remove the programs from the DOM.
        // Remove the programs from the storage method.
        for (var i = 0; i < savedIdList.length; i++) {
            removeLocalStorage(programStorageVariable + savedIdList[i]);
            //programStorage.removeItem(programStorageVariable + savedIdList[i]);
        }
        $('.saved-program-list').empty();
    });
    //
}
*/