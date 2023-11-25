let prom_sec = document.getElementById("prom-sec")
let info_sec = document.getElementById("info-sec")
let abt_sec = document.getElementById("abt-sec")


function show_home(){
    prom_sec.style.display = 'block'
    info_sec.style.display = 'flex'
    abt_sec.style.display = 'none'
}

function show_about(){
    prom_sec.style.display = 'none'
    info_sec.style.display = 'none'
    abt_sec.style.display = 'block'
}