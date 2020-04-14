var mymap = L.map("mapid").setView([14.9884, 78.3913], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2F0aXNoYm9uYW0iLCJhIjoiY2s4OGJ0MmtiMDBhdTNmcnhkM2cwd243ayJ9.nsx976AnilU_-kheq-Mj8g"
  }
).addTo(mymap);

var circle = L.circle([14.9884, 78.3913], {
  color: "green",
  fillColor: "green",
  fillOpacity: 1,
  radius: 250
}).addTo(mymap);
var table = document.querySelector(".table");
circle.bindPopup(table);
