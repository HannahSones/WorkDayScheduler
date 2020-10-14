// Variables required

const currentDate = moment().format("LL");
console.log("Today's date is", currentDate);

// when the page loads
$(document).ready(function() {


    $("#currentDay").text(currentDate);







// Clears all text input
$("#clearSchedule").on("click", function(){
    $("").empty();
  });
});


// psuedocode: the process

// 1. Grey out the hours that have passed
// 2. Show future hours in a different colour
// 3. Highlight current hour to indicate present
// 4. Make save function save notes in local storage that stays there when the page is refreshed
// 5. Make previous button link to previous date
// 6. Make next button link to next date
// 7. Make today go back to todays date
// 8. Make clear schedule button empty all data