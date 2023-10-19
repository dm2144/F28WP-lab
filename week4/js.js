var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ". Were you can visit: " ;
        for (ii =0; ii < data[i].places.outdoor; ii++){

            if (ii == 0) {
        htmlString += data[i].places.outdoor[ii];
      } else {
        htmlString += " and " + data[i].places.outdoor[ii];
      }
      
        }
    }
    htmlString += '.</p>';
    

cityContainer.insertAdjacentHTML('beforeend', htmlString );
};
