// Creating the variables required

const currentDate = moment().format("LL");
const currentTime = moment().format("LT");
console.log("Today's date is", currentDate);

const currentHour = moment().format("H");
console.log("The hour is", currentHour);


// Functions required

// Changing the colours of the time blocks depending on past, present and future
function establishTimeBlockColours() {
    $(".timeBlock").each(function () {
        const thisBlock = $(this);
        const thisBlockHour = parseInt(thisBlock.attr("data-hour"));
        const thisTextArea = thisBlock.find("textarea");

        if (thisBlockHour == currentHour) {
            thisTextArea.addClass("present").removeClass("past future");
        }
        if (thisBlockHour < currentHour) {
            thisTextArea.addClass("past").removeClass("present future");
        }
        if (thisBlockHour > currentHour) {
            thisTextArea.addClass("future").removeClass("past present");
        }
    });
}


// Assigning values to the text areas based on data saved in local storage
function initialSchedule() {
    $(".timeBlock").each(function () {
        const thisBlock = $(this);
        const taskKey = parseInt(thisBlock.attr("data-hour"));
        const thisTextArea = thisBlock.find("textarea");

        const storedValue = localStorage.getItem(taskKey)
        console.log("Stored tasks", storedValue);

        if (storedValue) {
            thisTextArea.val(storedValue);
        }

    });

};


// Save button to add data into local storage

$(".btn-secondary").click(function saveTasks() {
    console.log("Save button pressed");
    const btnClicked = $(this);
    const rowClicked = btnClicked.parent();

    const scheduledTask = rowClicked.find("textarea").val();
    const taskKey = rowClicked.attr("data-hour");

    localStorage.setItem(taskKey, scheduledTask);

});


// Clear button to delete all information off the page and out of local storage

$("#clearSchedule").on("click", function () {
    console.log("Clear data button pressed")
    window.localStorage.clear();
    window.location.reload();
});


// Document ready when the page loads

$(document).ready(function () {


    // Setting the current date at the top of the planner
    $("#currentDay").text(currentDate);
    $("#currentTime").text(currentTime);

    // Set the colours based on the time and recall saved tasks from local storage if there is any
    establishTimeBlockColours();
    initialSchedule();

});