let prom_sec = document.getElementById("prom-sec")
let info_sec = document.getElementById("info-sec")
let abt_sec = document.getElementById("abt-sec")
let cont_sec = document.getElementById("cont-sec");
let hm_nav = document.getElementById("home-nav");
let pdts_nav = document.getElementById("products-nav");
let cont_nav = document.getElementById("contact-nav");
let abt_nav = document.getElementById("about-nav");
let navs = [hm_nav, pdts_nav, cont_nav ,abt_nav]


function show_home(){
    prom_sec.style.display = 'block'
    info_sec.style.display = 'flex'
    abt_sec.style.display = 'none'
    cont_sec.style.display = 'none'
    
    for(let i = 0 ; i < navs.length ; i++){
        if(i == 0){
            navs[i].style.color = "#99e0ff";
            continue
        }
        navs[i].style.color = "#edefee";
    }
}

function show_contact() {
    prom_sec.style.display = "none";
    info_sec.style.display = "none";
    abt_sec.style.display = "none";
    cont_sec.style.display = "block";
    for (let i = 0; i < navs.length; i++) {
        if (i == 2) {
        navs[i].style.color = "#99e0ff";
        continue;
        }
        navs[i].style.color = "#edefee";
    }
}

function show_about(){
    prom_sec.style.display = 'none'
    info_sec.style.display = 'none'
    abt_sec.style.display = 'block'
    cont_sec.style.display = "none";
    for (let i = 0; i < navs.length; i++) {
        if (i == 3) {
            navs[i].style.color = "#99e0ff";
            continue;
        }
        navs[i].style.color = "#edefee";
    }
}


function to_facebook(){
    window.location.href = "https://www.facebook.com/";
}

function to_instagram(){
    window.location.href = "https://www.instagram.com/";
}

function to_whatsapp(){
    window.location.href = "https://www.facebook.com/";
}

function to_location(){
    window.location.href = "https://maps.app.goo.gl/rhe2unvHArqNKYh38";
}