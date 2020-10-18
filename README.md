# WorkDayScheduler
A simple calendar application that allows a user to save events for each hour of the day by modifying starter code.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Finished output](#finished-output)
* [Link to application](#link-to-deployed-application)

----------

## About the project
For this project, I have built a basic, single-day calendar application. Users can add tasks by hour and save them into local storage so that they do not disappear when the page is refreshed. It is powered predominantly by jQuery and uses the Moment.js library to provide the date and time.
I have also added a clear schedule button to improve the user experience so that they can clear the day completely and start again for a new day. The clear schedule button empties the values saved in local storage as well as automatically refreshing the page so the user has a clean calendar.

## Built using
* JavaScript
* jQuery
* HTML
* CSS
* Bootstrap

----------

## Functionality
* When the scheduler is opened, the current date and time is displayed at the top
* Dependent on the time, the blocks are colour-coded to indicate whether that hour has passed, is the time now, or is in the future
* Each hour block allows the user to enter text and save this information by clicking the save button at the end of the row
* This data is then saved in local storage so that when the page is refreshed it remains
* When the clear schedule button is clicked, the information is cleared from local storage and the page is refreshed to display a new, blank page

-----------
## Finished output
The screen you are first presented with, when loading the calendar.
![Daily planner homepage](https://github.com/HannahSones/WorkDayScheduler/blob/main/WorkDayScheduler(1).png)
Example with tasks added into the text areas ready to save.
![Example with tasks included](https://github.com/HannahSones/WorkDayScheduler/blob/main/WorkDayScheduler_textInput(2).png)

-------------
## Link to deployed application
https://hannahsones.github.io/WorkDayScheduler/

------------
© Hannah Sones. All rights reserved.
