// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple, // Use a simple coordinate system for images
    minZoom: -2,       // Allows zooming out
  });
  
  // Define image dimensions (replace with your pinboard image size)
  const imgWidth = 1000; // Image width in pixels
  const imgHeight = 800; // Image height in pixels
  
  // Define the bounds of the image
  const bounds = [[0, 0], [imgHeight, imgWidth]];
  
  // Add the image to the map
  const imageUrl = './images/pinboard.jpg'; // Replace with your image URL or local path
  L.imageOverlay(imageUrl, bounds).addTo(map);
  
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
  