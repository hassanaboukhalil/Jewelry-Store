let prom_sec = document.getElementById("prom-sec")
let info_sec = document.getElementById("info-sec")
let abt_sec = document.getElementById("abt-sec")
let cont_sec = document.getElementById("cont-sec");


function show_home(){
    prom_sec.style.display = 'block'
    info_sec.style.display = 'flex'
    abt_sec.style.display = 'none'
    cont_sec.style.display = 'none'
}

function show_about(){
    prom_sec.style.display = 'none'
    info_sec.style.display = 'none'
    abt_sec.style.display = 'block'
    cont_sec.style.display = "none";
}

function show_contact(){
    prom_sec.style.display = "none";
    info_sec.style.display = "none";
    abt_sec.style.display = "none";
    cont_sec.style.display = "block";
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