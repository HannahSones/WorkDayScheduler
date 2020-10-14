// Creating the variables required

const currentDate = moment().format("LL");
console.log("Today's date is", currentDate);

const currentHour = moment().format("H");
console.log("The hour is", currentHour);


// Functions required


// Changing the colours of the time blocks depending on past, present and future
    function establishTimeBlocks(){
        $(".timeBlock").each(function(){
          const $thisBlock = $(this);
          const thisBlockHr = parseInt($thisBlock.attr("data-hour"));
    
          if (thisBlockHr === currentHour) {
            $thisBlock.addClass("present").removeClass("past future");
          }
          if (thisBlockHr < currentHour) {
            $thisBlock.addClass("past").removeClass("present future");
          }
          if (thisBlockHr > currentHour) {
            $thisBlock.addClass("future").removeClass("past present");
          }
        });
    }



// Clears all text area inputs
$("#clearSchedule").on("click", function(){
    $(":text").empty();
  });



// Document ready when the page loads
$(document).ready(function() {


    // Setting the current date at the top of the planner
        $("#currentDay").text(currentDate);

    // Set the colours based on the time
        establishTimeBlocks();

    // recall information from local storage if there is any

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