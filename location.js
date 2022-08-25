
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
    attribution: osmAttrib,
    detectRetina: true
});



var map = new L.Map('map', {
    tap: false, // ref https://github.com/Leaflet/Leaflet/issues/7255
    layers : osm,
    center: [51.505, -0.09],
    zoom: 10,
    zoomControl: true
});


let locations = [
    {
        "id": 1,
        "lat": 40.989,
        "long": 29.027,
        "src": 'images/1.jpg',
        "title": "Base House",
        "url":"https://www.basebros.com/"
    },
    {
        "id": 2,
        "lat": 40.980,
        "long": 29.027,
        "src": 'images/2.jpeg',
        "title": "Hotel Sulina International",
        "url":"https://www.google.com/"
    },
    {
        "id": 3,
        "lat": 40.9808,
        "long": 29.027,
        "src": 'images/3.jpg',
        "title": "Iaki Conference & Spa Hotel",
        "url":"https://www.booking.com/"
    },
    {
        "id": 4,
        "lat": 41.000,
        "long": 29.027,
        "src": 'images/4.jpg',
    }
]

let popupOption = {
    "closeButton":false
}

locations.forEach(element => {
    new L.Marker([element.lat,element.long]).addTo(map)
    .on("mouseover",event =>{
        event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt="'+element.title+'">   <h3>'+element.title+'</h3></div>',popupOption).openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
    .on("click" , () => {
        window.open(element.url);
    })
});


lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
