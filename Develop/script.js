// global variable linked to time keeping api
var now = dayjs();

// this functions monitors the date an appends it to the html
$(document).ready(function() {

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
      }else if(idSlot == presentHour){
          $(this).css('background-color','#ff6961');
      // if the time slot does not fullfil these conditional it will remain white
      }else{
          $(this).css('background-color','white');
      }
  });

  // This is the local storage function 
  // this executes when the DOM is loaded
  $(document).ready(function() {
    // This retrieves the saved textarea content from local storage
    var savedInput = JSON.parse(localStorage.getItem('descriptionContent'));
  
    // this conditional checks if there is any saved content 
    if (savedInput) {
      // Loop through each time block and finds the text content respective to its id
      $('.time-block').each(function() {
        var id = $(this).attr('id');
        var textareaContent = savedInput[id];
  
        // this updates the value of the text area 
        $(this).find('.description').val(textareaContent);
      });
    }
  
    // this listens for the saveBtn click
    $('.saveBtn').on('click', function() {
      // this variable stores id from parent element, time-block
      var id = $(this).parent().attr('id');

      // this variable stores the textarea's input value, through selecting the child element's class, .description
      var textareaContent = $(this).siblings('.description').val();
  
      // this retrieves the object saved in local storage otherwise it ceates an empty array 
      var storedContent = JSON.parse(localStorage.getItem('descriptionContent')) || {};
      // this updates the stored content with the new content respective to its id
      storedContent[id] = textareaContent;
  
      // This saves the new updated content back to local storage as JSON string
      localStorage.setItem('descriptionContent', JSON.stringify(storedContent));
    });
  });
