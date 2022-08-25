
let mapOptions = {
    center:[40.989, 29.027],
    zoom:15,
    tap: false
}



let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


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



map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true
}}));

