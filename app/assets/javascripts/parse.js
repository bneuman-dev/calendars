$(document).ready( function() {
});

function parse() {
   var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var events_input = JSON.parse($("#nee").html());
  for(var i = 0; i < events_input.length; i++) {
    events_input[i].free = true;
  }

  var eventData = {
    options: {
        timeslotsPerHour: 3,
        timeslotHeight: 30,
        defaultFreeBusy: {free: false}
      },

    events : [
        {'id':1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 00), 'title': 'Lunch with Sarah'}
      ],
    
    freebusys: events_input
  };

  return eventData;
}

function parse_calendar(){
  make_calendar(parse());
}