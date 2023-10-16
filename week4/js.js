var OurRequest = new XMLHttpRequest();
OurRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
OurRequest.onload = function(){
var ourData = JSON.parse(OurRequest.responseText);
console.log(ourData[0])
};
OurRequest.send();
