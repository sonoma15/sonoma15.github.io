// script.js
const map = L.map('map', {
  crs: L.CRS.Simple, // Use a simple CRS for flat images
  minZoom: -2,       // Allow zooming out
});

  // Set the image dimensions (update based on your image dimensions)
  const bounds = [[0, 0], [8160, 6120]]; // Height x Width
  const image = L.imageOverlay('pinboard.jpg', bounds).addTo(map);

  // Set initial view of the map
  map.fitBounds(bounds);
  
  // Add clickable pins
  const pins = [
    {
      coords: [200, 300], // Y, X coordinates on the image
      popup: 'This is pin 1 with some information.',
    },
    {
      coords: [400, 500],
      popup: 'This is pin 2 with other details.',
    },
  ];
  
  // Loop through pins and add markers
  pins.forEach(pin => {
    L.marker(pin.coords)
      .addTo(map)
      .bindPopup(pin.popup);
  });
  