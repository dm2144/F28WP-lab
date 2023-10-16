var OurRequest = new XMLHttpRequest();
OurRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
OurRequest.onload = function(){
console.log(OurRequest.responseText);
};
OurRequest.send();