// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// this functions monitors the date an appends it to the html
$(document).ready(function() {
  var now = dayjs();
  function timekeeping() {
    // this provides the day, month and date
    var time = now.format("dddd, MMMM D");
    $('#currentDay').text(time);
  }
    timekeeping();
  });

  // This function retrieves the current hour and compares to the id of the time slots
  $('.colorTheme').each(function(){
      var presentHour = now.format("H");
      // this stores the interger of the id being assessed
      var idSlot = parseInt($(this).prop('id'));
      // This will make all future timeslots within the the range of 6 hours have a green background color
      if(idSlot > presentHour && idSlot < presentHour + 6){
          $(this).css('background-color','#77dd77');
      // This will make all past timeslots within the the range of 6 hours have a grey background color
      }else if(idSlot < presentHour && idSlot > presentHour - 6){
          $(this).css('background-color','#d3d3d3');
      // If the currentHour matches the id's number then it is present hour and it will have a background color of red
      }else if(idSlot === presentHour){
          $(this).css('background-color','#ff6961');
      // if the time slot does not fullfil these conditional it will remain white
      }else{
          $(this).css('background-color','white');
      }
  });

$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
