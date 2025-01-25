// script.js
    const map = L.map('map', {
      crs: L.CRS.Simple, // Use a simple CRS for flat images
      minZoom: -2,       // Allow zooming out
      maxZoom: 2,        // Restrict excessive zoom-in
      zoomSnap: 0.25,    // Allow fine zoom levels
    });

    // Set the image dimensions (match your image dimensions: 8160 x 6120)
    const bounds = [[0, 0], [8160, 6120]];
    console.log("Adding image overlay...");
    L.imageOverlay('pinboard.jpg', bounds).addTo(map);
    console.log("Image overlay added.");
    

    // Fit the map to the image bounds with a more zoomed-in initial view
    map.setView([4080, 3060], 0); // Center the map and set an initial zoom level

  
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
  