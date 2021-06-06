let profil = {
    "gomb":document.getElementById("karakter_gomb"),
    "oldal":document.getElementById("profil_oldal")
}

let park = {
    "gomb": document.getElementById("park_gomb"),
    "oldal": document.getElementById("park_oldal")
}
let bolt = {
    "gomb": document.getElementById("bolt_gomb"),
    "oldal": document.getElementById("bolt_oldal")
}

function init(){
    switch_to_profil();
}

function switch_to_park(){
    park.oldal.style.display = "block";
    park.gomb.style.display = "none";
    profil.oldal.style.display = "none";
    profil.gomb.style.display = "inline";
    bolt.gomb.style.display= "inline";
    bolt.oldal.style.display= "none";
}
function switch_to_profil(){
    park.oldal.style.display = "none";
    park.gomb.style.display = "inline";
    profil.oldal.style.display = "block";
    profil.gomb.style.display = "none";
    bolt.gomb.style.display="inline";
    bolt.oldal.style.display="none";
}
function switch_to_bolt(){
    bolt.oldal.style.display = "block";
    bolt.gomb.style.display = "none";
    profil.oldal.style.display = "none";
    profil.gomb.style.display = "inline";
    park.gomb.style.display="inline";
    park.oldal.style.display="none";
}

init();