var x = document.getElementById("dial");

var positions = [];
var speeds = [];

Number.prototype.toRad = function () {
  return this * Math.PI / 180;
};


function getDistance(p1, p0) {

  var lat1 = p1.coords.latitude, lng1 = p1.coords.longitude, lat2 = p0.coords.latitude, lng2 = p0.coords.longitude;

  var R = 6371; // km
  //has a problem with the .toRad() method below.
  var x1 = lat2 - lat1;
  var dLat = x1.toRad();
  var x2 = lng2 - lng1;
  var dLon = x2.toRad();
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "X";
  }
}

function showPosition(position) {
  positions.push(position);


  console.log(positions);


  if (positions.length > 1) {
    let p1 = positions[positions.length - 1];
    let p0 = positions[positions.length - 2];

    let t1 = p1.timestamp;
    let t0 = p0.timestamp;

    let dt = (t1 - t0) / 1000000;
    let dd = getDistance(p1, p0);

    let speed = (dd / dt) * 3600;

    speeds.push(speed);
    console.log(speeds);
    x.innerHTML = speed;
  }
}


getLocation();