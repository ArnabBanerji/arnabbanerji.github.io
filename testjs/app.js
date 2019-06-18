$(document).ready(function () {
  $('h1').html('Arnab Banerji');
  $('h2').html('Testing search elements - Intekhab.');

  var ds = moment();
  ds.subtract(17, 'hours');
  ds.tz("America/New_York").format('en');
  var newDate = new Date(ds);
  var userHours = newDate.getHours();
  var userMinsEST = (userHours * 60) + newDate.getMinutes();

  $('h3').html(userMinsEST);


});