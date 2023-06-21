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
    var idSlot = parseInt($(this).prop('id'));
    // if the idSlot is the same as the presentHour then it will be red
    if(idSlot == presentHour) {
      $(this).css('background-color','#ff6961');
    // if the idSlot is greater than the presentHour it is a future time slot which will make it green
    } else if(idSlot > presentHour) {
      $(this).css('background-color','#77dd77');
    // otherwise if it is neither of these then it must be a past hour and will remain grey
    } else {
      $(this).css('background-color','#d3d3d3');
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
      
      // this adds text to the savedDisplay id
      var displaySave = $('#savedDisplay');
      displaySave.text("Successfully saved");

      var timeOut;

      // this hides the savedDisplay id
      function hideSave() {
        displaySave.hide();
      }
      
      // this shows the savedDisplay text for 2 seconds, clears the timeout value and then resets after 2 seconds the timeout value to hide the displaysave element
      function showSave() {
        displaySave.show();
        clearTimeout(timeOut);
        timeOut = setTimeout(hideSave, 2000);
      }
      showSave();
    });
  });

