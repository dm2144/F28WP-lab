var pageCounter = 1;
var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 2) { // assuming you have 2 pages of cities
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ". <br> You can visit indoor places like ";

    for (ii = 0; ii < data[i].places.indoor.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].places.indoor[ii];
      } else {
        htmlString += " and " + data[i].places.indoor[ii];
      }
    }

    htmlString += '. </br> And enjoy outdoor places like ';

    for (ii = 0; ii < data[i].places.outdoor.length; ii++) { 
      if (ii == 0) {
        htmlString += data[i].places.outdoor[ii];
      } else {
        htmlString += " and " + data[i].places.outdoor[ii];
      }
    }

    htmlString += '.</p></hr>';
  }

  cityContainer.insertAdjacentHTML('beforeend', htmlString);
}
