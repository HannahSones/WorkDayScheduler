// Creating the variables required

const currentDate = moment().format("LL");
const currentTime = moment().format("LT");
console.log("Today's date is", currentDate);

const currentHour = moment().format("H");
console.log("The hour is", currentHour);

const scheduleItems = [];

// Functions required


// Changing the colours of the time blocks depending on past, present and future
function establishTimeBlockColours() {
    $(".timeBlock").each(function () {
        const $thisBlock = $(this);
        const thisBlockHour = parseInt($thisBlock.attr("data-hour"));

        if (thisBlockHour == currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHour < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHour > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}


// Set up the array of objects first time on load if we don't have anything saved in local storage
function initialSchedule() {
    $(".timeBlock").each(function () {
        const $thisBlock = $(this);
        const thisBlockHour = parseInt($thisBlock.attr("data-hour"));

        const scheduleObj = {
            hour: thisBlockHour,
            task: "",
        }
        // Add this schedule item into the array
        scheduleItems.push(scheduleObj);
    });

    // Save the object info to local storage by stringifying it first
    localStorage.setItem("Scheduled task", JSON.stringify(scheduleItems));
    console.log(scheduleItems);
};


// Create save button here to add input data into local storage

$(".btn-secondary").click(function saveTasks() {
    console.log("Save button pressed")
    // $.each(scheduleObj, function(thisBlockHour, task) {

});


// Clears all text area inputs
$("#clearSchedule").on("click", function () {
    $(":text").empty();
    console.log("Clear data button pressed")
    window.location.reload
});



// Document ready when the page loads
$(document).ready(function () {


    // Setting the current date at the top of the planner
    $("#currentDay").text(currentDate);
    $("#currentTime").text(currentTime);

    // Set the colours based on the time
    establishTimeBlockColours();
    initialSchedule();

    // recall information from local storage if there is any

});






// psuedocode: the process

// 1. Add date and time to top of calendar -
// 2. Grey out the hours that have passed -
// 3. Show future hours in a different colour -
// 4. Highlight current hour to indicate present - BEN TO HELP FORMAT
// 5. Make save button add any text into local storage that stays there when the page is refreshed
// 6. On loading, make the page pull schedule notes from local storage
// 7. Make clear schedule button empty all data