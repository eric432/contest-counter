$(function() {

  // Add commas to number
  function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  // Display the count
  var view = {
    displayCount: function() {
      jQuery.get('counter.txt', function(data) {
        var currentCount = numberWithCommas(data);
        $('#counter').html(currentCount);
      });
    }
  };
  view.displayCount();

  // Handler
  $('.count-trigger').click(function() {
    var data = $('#counter').text();
    $.ajax({
      url: 'counter.php',
      type: 'POST',
      data: {
        data: data
      },
      success: function() {
        view.displayCount();
      }
    });
  });

});
