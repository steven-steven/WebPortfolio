
var programStorageVariable = "skillType";
var storageAvailable = true;

/*****************************ADDS AND REMOVES Local Storage (Programs or Emails)************************************/
function addLocalStorage(key, value, programID) {
    programID || (programID = 0);
    

    if (storageAvailable) {
        programStorage.setItem(key, value);
    }
    try{
        addUniqueElements(programID);
    }
    catch (e) {
        console.log(e)
        var uniqueID = programID.replace(programStorageVariable, "");
        var button = $("#" + uniqueID);
        button.addClass("active");
        button.find("i")[0].innerHTML = "check_box";
    }
    
    
}

function removeLocalStorage(key) {
    if (storageAvailable) {
        programStorage.removeItem(key);
    }
    removeUniqueElements(key);
}
/************************************************************************************************/
/*
var removeUniqueElements = function (uniqueID) {
    //DO NO TOUCH THIS FUNCTION IT IS USED TO DELETE THE OTHER STUFF ON OTHER PAGES WHEN YOU DELETE A PROGRAM (I.E REMOVE CHECKBOXES ON PROGRAM FINDER --> THIS GETS SET IN THE DOCUMENT READY OF THAT SPECIFIC PAGE.)
}

var addUniqueElements = function (uniqueID) {
    //DO NO TOUCH THIS FUNCTION IT IS USED TO DELETE THE OTHER STUFF ON OTHER PAGES WHEN YOU ADD A PROGRAM (I.E REMOVE CHECKBOXES ON PROGRAM FINDER --> THIS GETS SET IN THE DOCUMENT READY OF THAT SPECIFIC PAGE.)
}
*/



/****************** UPDATE CURRENT STORAGE IDS ON LOAD **********************/
var programStorage = null;
var savedIdList = [];
var noCheckFlag = true;
try {
    
    programStorage = localStorage;
    
    for (var i = 0; i < programStorage.length; i++) {
        if (programStorage.key(i).includes(programStorageVariable)) {

            noCheckFlag = false;

            var currentKey = programStorage.key(i);
            var currentProgramID = currentKey.replace(programStorageVariable, "");

            savedIdList.push(currentProgramID);
        }
    }
    if (noCheckFlag == true) {
        var value = " ";
        addLocalStorage(programStorageVariable + "allTechnicalSkills", value, "allTechnicalSkills");
        savedIdList.push("allTechnicalSkills");
        savedIdList.push("allSoftSkills");
        savedIdList.push("allHobbies");
        savedIdList.push("allCertifications");
        console.log("yellow")
        addLocalStorage(programStorageVariable + "allSoftSkills", value, "allSoftSkills");
        addLocalStorage(programStorageVariable + "allHobbies", value, "allHobbies");
        addLocalStorage(programStorageVariable + "allCertifications", value, "allCertifications");

    }
    
}
catch (err) {
    storageAvailable = false;
}

/****************** SESSION EXPIRY CHECK **********************/
var keySessionExpiry = "sessionExpiryTime";
//30 min in seconds
var sessionTimeoutPeriod = 1800;
//Flags when items cannot be added/removed from storage
var sessionStateAvailable = true;

function checkSessionExpiry() {
    if (programStorage) {
        var currentTimeInSeconds = Math.floor(Date.now() / 1000);

        if (programStorage.hasOwnProperty(keySessionExpiry)) {
            var expiryTimeInSeconds = programStorage.getItem(keySessionExpiry);

            if (currentTimeInSeconds > expiryTimeInSeconds) {
                //Remove all programs from session
                for (var i = 0; i < savedIdList.length; i++) {
                    programStorage.removeItem(programStorageVariable + savedIdList[i]);
                }

                savedIdList = [];
            }
        }
    }

    try {
        //Update with new expiry time
        programStorage.setItem(keySessionExpiry, currentTimeInSeconds + sessionTimeoutPeriod);
    }
    catch (error) {
        storageAvailable = false;
    }
}

checkSessionExpiry();


//Will run every time a user navigates to a page on iOS
//The expiry and sync checks will run as well as the below checks on iOS
window.onpopstate = function (event) {
    if (storageAvailable) {
        checkSessionExpiry();
    }
};
/******************************************************/