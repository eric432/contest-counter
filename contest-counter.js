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

      $('#counter').load("counter.txt", function(data, statusTxt, xhr) {
        if (statusTxt == "success")
          var currentCount = numberWithCommas(data);
        $('#counter').html(currentCount);
        if (statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
      );

    }
  };
  view.displayCount();

  // Handler
  $('.count-trigger').click(function() {
    var data = $('#counter').text();
    $.ajax({
      url: 'counter.php',
      type: 'POST',
      cache: false,
      data: {
        data: data
      },
      success: function() {
        view.displayCount();
      }
    });
  });

});
