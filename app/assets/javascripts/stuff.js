$(document).ready(function() {
  $("#send_stuff").on("click", function(event) {
    $.ajax({
      data: {data: ($("#calendar").weekCalendar("serializeEvents"))},
      type: 'post',
      url: '/calendars/',
      dataType: "json",
      success: function(response) {
        console.log(response);
        // $("body").html(response);
      }
    });
  });
});
