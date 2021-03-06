let autocomplete;
const input = document.getElementById('autocomplete');

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      componentRestrictions: {
        country: ['FR', 'SE'],
        // fields: ["place_id", "geometry", "name"]
      },
    }
  );

  autocomplete.setFields(['place_id']);
}

google.maps.event.addDomListener(input, 'keydown', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    console.log('hey');
  }
});

// autocomplete.addListener("place_changed", onPlaceChanged);

// function onPlaceChanged() {
//   const place = autocomplete.getPlace();

//   if (!place.geometry) {
//     document.getElementById("autocomplete").placeholder = "Enter a location"
//   } else {
//     document.getElementById("details").innerHTML = "djweoewjerji" + place.name;
//   }
// }
