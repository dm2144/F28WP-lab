// Get the element with ID "city-info" from the DOM. This is where we'll display our city data.
var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);

      renderHTML(ourData);

    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  // Set up a function to run if there was an error making the request (e.g., if the user is offline).
  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  // Send the request to the server.
  ourRequest.send();

  // After fetching the data, hide the button.
  btn.classList.add("hide-me");
});

// Define the function that will add our data to the DOM.
function renderHTML(data) {

  // Initialize a variable to build our HTML string.
  var htmlString = "";
  
  // Loop through each item in our data.
  for (i = 0; i < data.length; i++) {

    // Add city data to our HTML string. This will display the city name, country, and indoor places to visit.
    htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ". <br> You can visit indoor places like: ";

    // Loop through the indoor places of the current city.
    for (ii = 0; ii < data[i].places.indoor.length; ii++) {

      // If this is the first place, don't add an "and" before it.
      if (ii == 0) {
        htmlString += data[i].places.indoor[ii];
      } else {
        // For subsequent places, add an "and" before the place name.
        htmlString += " and " + data[i].places.indoor[ii];
      }
    }

    // Add a separator and introduce the outdoor places section.
    htmlString += '. </br> And enjoy outdoor places like: ';

    // Loop through the outdoor places of the current city.
    for (ii = 0; ii < data[i].places.outdoor.length; ii++) {
      // Similar logic to indoor places for formatting our list.
      if (ii == 0) {
        htmlString += data[i].places.outdoor[ii];
      } else {
        htmlString += " and " + data[i].places.outdoor[ii];
      }
    }

    // Close the paragraph tag.
    htmlString += '.</hr></p>';
  }

  // Insert the HTML into our cityContainer element, just before the end of its content.
  cityContainer.insertAdjacentHTML('beforeend', htmlString);



}
