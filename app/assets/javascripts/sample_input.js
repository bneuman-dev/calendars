$(document).ready(function() {

})

function sample_calendar(){
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var eventData2 = {
    options: {
      timeslotsPerHour: 3,
      timeslotHeight: 30,
      defaultFreeBusy: {free: false}
    },

   events : [
      {'id':1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 00), 'title': 'Lunch with Sarah'}
    ],
    freebusys: [
    {'start': new Date(year, month, day, 8), 'end': new Date(year, month, day+0, 14), 'free': true}
    ]
  };

  make_calendar(eventData2);
}