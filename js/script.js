
function validateLuas() {

let panjangAlas = document.getElementById('panjang-alas').value;
let tinggi = document.getElementById('tinggi').value;
console.log(panjangAlas);
console.log(tinggi);
}


function segitiga(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("Build");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}
 

