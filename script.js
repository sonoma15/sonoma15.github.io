const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomSnap: 0.25,
});

const bounds = [[0, 0], [8160, 6120]];
L.imageOverlay('pinboard.jpg', bounds).addTo(map);
map.setView([4080, 3060], 0);

const pins = [
    {
        coords: [200, 300],
        popup: '<h2>Pin 1</h2><p>This is pin 1 with some information.  You can include HTML here, like images or links.</p><img src="image1.jpg" width="100">',
        data: {
            title: "Pin 1",
            description: "More details about pin 1",
            image: "image2.jpg"
        }
    },
    {
        coords: [400, 500],
        popup: '<h2>Pin 2</h2><p>This is pin 2 with other details.  You can even have <a href="https://www.example.com">links</a>.</p>',
        data: {
            title: "Pin 2",
            description: "Other details about pin 2",
            link: "https://www.example.com"
        }
    },
    // ... more pins
];

pins.forEach(pin => {
    L.marker(pin.coords).addTo(map)
        .bindPopup(pin.popup)
        .on('click', () => {
            console.log("Clicked on:", pin.data.title);

            // Example using an alert:
            // alert(pin.data.description);

            if (pin.data.image) {
                console.log("Image URL:", pin.data.image);
            }

            // Or, even better, update another part of your page:
            // const detailsDiv = document.getElementById("pin-details");
            // if (detailsDiv) {
            //     detailsDiv.innerHTML = `<h2>${pin.data.title}</h2><p>${pin.data.description}</p>`;
            //     if (pin.data.image) {
            //         detailsDiv.innerHTML += `<img src="${pin.data.image}" width="200">`;
            //     }
            // }

        });
});