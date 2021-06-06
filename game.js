let stats = {
    "penz": 100,
    "tap": 5,
    "viz": 5,
    "jatek": 5,
    "orom": 5,
    "faradtsag": 5,
}

let available_points = 10;

let level = 0;

let leveldescription = [
    ["Egy édes kis labrador kölyök gazdája lettél!", "k1.jpg"],
    ["Gyönyörű, erős felnőtt lett a kis kutya!","k2.jpg"],
    ["Idős eb lett a kis öleb!","k3.jpg"],
];

let profile_stats = {
    "kepek": document.getElementById("kepek"),
    "leiras": document.getElementById("leiras"),
    "penz": document.getElementById("profil_penz"),
    "tap": document.getElementById("profil_tap"),
    "viz": document.getElementById("profil_viz"),
    "jatek": document.getElementById("profil_jatek"),
    "orom": document.getElementById("profil_orom"),
    "faradtsag": document.getElementById("profil_faradtsag")
}

function refreshProfileStats(){
    profile_stats.kepek.src = leveldescription[level][1]
    profile_stats.penz.innerHTML = stats.penz;
    profile_stats.tap.innerHTML = stats.tap;
    profile_stats.viz.innerHTML = stats.viz;
    profile_stats.jatek.innerHTML = stats.jatek;
    profile_stats.orom.innerHTML = stats.orom;
    profile_stats.faradtsag.innerHTML = stats.faradtsag;
    profile_stats.leiras.innerHTML = leveldescription[level][0];
    gombok();
}

refreshProfileStats();

function update_tap(){
    if(available_points > 0){
        available_points--;
        stats.tap += 5;
        refreshProfileStats();
    }
}
function update_viz(){
    if(available_points > 0){
        available_points--;
        stats.viz += 5;
        refreshProfileStats();
    }
}
function update_jatek(){
    if(available_points > 0){
        available_points--;
        stats.jatek += 5;
        refreshProfileStats();
    }
}
function update_orom(){
    if(available_points > 0){
        available_points--;
        stats.orom += 5;
        refreshProfileStats();
    }
}
function update_faradtsag(){
    if(available_points > 0){
        available_points--;
        stats.faradtsag += 5;
        refreshProfileStats();
    }
}

function gombok(){
    let btns = document.getElementsByClassName("addButtons");
    if(available_points > 0){
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.style.display="inline";
        }
    } else{
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.style.display="none";
        }
    }
}

function kovetkezo_szint(){
    if(level < leveldescription.length - 1){
        available_points += 15;
        level++;
        refreshProfileStats();
    }
}
let parkba = document.getElementById("park");
function rnd_szazalek(){
    return Math.floor(Math.random()*100);
}
function park_jatek(){
    let szazalek = rnd_szazalek();
    let orom = 10 + stats.orom;

    if(orom <= 0) orom = 1;

    if(szazalek >= orom){
        baratkozas("Bernáthegyi", 5, 100);
        refreshProfileStats();
    }if(szazalek >= orom){
        baratkozas("Dalmata", 5, 100);
        refreshProfileStats();
    }if(szazalek >= orom){
        baratkozas("Spániel", 5, 100);
        refreshProfileStats();
    }
    else{
        parkba.innerHTML += "Kutyusod ólyan jól érezte magát a parkban, hogy ezért jutalom jár! (+100)<br>";
        stats.penz += 100;
        refreshProfileStats();
    }
}

function baratkozas(k_nev, k_orom, k_penz){
    parkba.innerHTML += "A parkban kutyusod összefutott egy új baráttal" +k_nev+ "!<br>";

    let talalkozas = 0;
    let  egyutt_jatek = true;

    do {
        talalkozas++;
        if(egyutt_jatek){
            let szazalek = rnd_szazalek();
            let boldogsag = 10 - stats.faradtsag;
            if(boldogsag <= 0) boldogsag = 1;

            if(szazalek >= boldogsag){
                parkba.innerHTML += "Megszagolgatták egymást az újdonsült barátok (- "+k_orom+" fáradtság)<br>";
                k_orom -= stats.faradtsag;
                refreshProfileStats();
            }else{
                parkba.innerHTML += "Elsétált kutyusod mellett egy barát jelölt!<br>";
            }
         }else{
            let szazalek = rnd_szazalek();
            let boldogsag = 10 + stats.orom;
            if(boldogsag >= 100) boldogsag = 99;
            if(szazalek >= boldogsag){
                parkba.innerHTML += "A kutyusok együtt megkergettek egy mókust (+ "+k_orom+" öröm)<br>";
                k_orom += stats.orom;
                refreshProfileStats();
            }else{
                parkba.innerHTML += "Nem akartak kutyusoddal barátkozni!<br>";
            }
        }
        egyutt_jatek = !egyutt_jatek;
        
    } while (talalkozas <=  10);
}
function boltika(){
    let termek=document.getElementById("vasarlas").value;
    if(stats.penz > termek){
        document.getElementById("gomb").addEventListener("click", function() {
            stats.penz=stats.penz-termek;
            refreshProfileStats();
            alert("Sikeres vásárlás!");
          });
    }else{
        document.getElementById("gomb").addEventListener("click", function() {
            alert("Sikertelen vásárlás, még gyűjtened kell!");
          });
    }
}