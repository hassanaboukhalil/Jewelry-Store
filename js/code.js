// ** initialization and declaration
let prom_sec = document.getElementById("prom-sec")
let info_sec = document.getElementById("info-sec")
let abt_sec = document.getElementById("abt-sec")
let cont_sec = document.getElementById("cont-sec");
let prdts_sec = document.getElementById("prdts-sec");
// 
let hm_nav = document.getElementById("home-nav");
let pdts_nav = document.getElementById("products-nav");
let cont_nav = document.getElementById("contact-nav");
let abt_nav = document.getElementById("about-nav");
let navs = [hm_nav, pdts_nav, cont_nav ,abt_nav]
//
let filter_bx = document.getElementById("filter-box");
filter_bx.style.display = 'none'
//
let radio_btn1 = document.getElementById("low-to-high")
let radio_btn2 = document.getElementById("high-to-low")
let check_box1 = document.getElementById("rings")
let check_box2 = document.getElementById("necklaces")
let check_box3 = document.getElementById("earrings")

//
let products_div = document.getElementById("products_div");
let card, product_img, product_name, product_price;
let rings = [
    {
        img: "./images/rings/ring1.png",
        name: "ring 1",
        price: 200
    },
    {
        img: "./images/rings/ring2.png",
        name: "ring 2",
        price: 280
    },
    {
        img: "./images/rings/ring3.png",
        name: "ring 3",
        price: 400
    },
    {
        img: "./images/rings/ring4.png",
        name: "ring 4",
        price: 430
    },
    {
        img: "./images/rings/ring5.png",
        name: "ring 5",
        price: 490
    },
    {
        img: "./images/rings/ring6.png",
        name: "ring 6",
        price: 570
    }
];
let necklaces = [
    {
        img: "./images/necklaces/necklace1.png",
        name: "necklace 1",
        price: 230
    },
    {
        img: "./images/necklaces/necklace2.png",
        name: "necklace 2",
        price: 350
    },
    {
        img: "./images/necklaces/necklace3.png",
        name: "necklace 3",
        price: 420
    },
    {
        img: "./images/necklaces/necklace4.png",
        name: "necklace 4",
        price: 470
    },
    {
        img: "./images/necklaces/necklace5.png",
        name: "necklace 5",
        price: 522
    },
    {
        img: "./images/necklaces/necklace6.png",
        name: "necklace 6",
        price: 650
    }
];
let earrings = [
    {
        img: "./images/earrings/earring1.png",
        name: "earring 1",
        price: 170
    },
    {
        img: "./images/earrings/earring2.png",
        name: "earring 2",
        price: 220
    },
    {
        img: "./images/earrings/earring3.png",
        name: "earring 3",
        price: 340
    },
    {
        img: "./images/earrings/earring4.png",
        name: "earring 4",
        price: 390
    },
    {
        img: "./images/earrings/earring5.png",
        name: "earring 5",
        price: 405
    },
    {
        img: "./images/earrings/earring6.png",
        name: "earring 6",
        price: 435
    }
];

let all_products = [...rings,...necklaces,...earrings]


let products = bubble_sort_products(all_products, "low-to-high") // high-to-low 

// *

add_products(products)

radio_btn1.addEventListener('click', filterByPrice)
radio_btn2.addEventListener('click', filterByPrice)
check_box1.addEventListener('click', filterByCategory)
check_box2.addEventListener('click', filterByCategory)
check_box3.addEventListener('click', filterByCategory)


// ** functions

function show_home(){
    prom_sec.style.display = 'block'
    info_sec.style.display = 'flex'
    abt_sec.style.display = 'none'
    cont_sec.style.display = 'none'
    prdts_sec.style.display = 'none'
    for(let i = 0 ; i < navs.length ; i++){
        if(i == 0){
            navs[i].style.color = "#99e0ff";
            continue
        }
        navs[i].style.color = "#edefee";
    }
}

function show_products(){
    prom_sec.style.display = "none";
    info_sec.style.display = "none";
    abt_sec.style.display = "none";
    cont_sec.style.display = "none";
    prdts_sec.style.display = "block";
    for (let i = 0; i < navs.length; i++) {
        if (i == 1) {
            navs[i].style.color = "#99e0ff";
            continue;
        }
        navs[i].style.color = "#edefee";
    }
}

function show_contact() {
    prom_sec.style.display = "none";
    info_sec.style.display = "none";
    abt_sec.style.display = "none";
    cont_sec.style.display = "block";
    prdts_sec.style.display = "none";
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
    prdts_sec.style.display = "none";
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

function show_filter_box(){
    if(filter_bx.style.display == 'none'){
        filter_bx.style.display = "flex";
    }
    else{
        filter_bx.style.display = 'none'
    }
}

function filterByPrice(){
    // let products
    if(radio_btn1.checked){
        products = bubble_sort_products(products, "low-to-high")
    }
    else{
        products = bubble_sort_products(products, "high-to-low")
    }
    products_div.innerHTML = ""
    add_products(products)
}

function filterByCategory(){
    products = []
    if(!check_box1.checked && !check_box2.checked && !check_box3.checked){
        products = [...rings, ...necklaces, ...earrings]
    }
    else{
        if(check_box1.checked){
            products = [...rings]
        }
        if(check_box2.checked){
            products = [...products, ...necklaces]
        }
        if(check_box3.checked){
            products = [...products, ...earrings]
        }
    }
    filterByPrice()
}

function bubble_sort_products(arr, arrangement_way){
    let n = arr.length
    let temp = 0
    if(arrangement_way == "low-to-high"){
        for(let i = 0 ; i < n - 1 ; i++){
            for(let j = 0 ; j < n - 1 - i ; j++){
                if(arr[j].price > arr[j+1].price){
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }
    else{
        for(let i = 0 ; i < n - 1 ; i++){
            for(let j = 0 ; j < n - 1 - i ; j++){
                if(arr[j].price < arr[j+1].price){
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }
    return arr
}


function add_products(products){
    for (let i = 0; i < products.length; i++) {
        card = document.createElement("div");
        product_img = document.createElement("img");
        product_name = document.createElement("p");
        product_price = document.createElement("p");
        //
        card.classList.add("card");
        product_name.classList.add("product-name");
        product_price.classList.add("product-price");
        //
        product_img.src = products[i].img;
        product_name.innerText = products[i].name;
        product_price.innerText = products[i].price + "$";
        //
        products_div.appendChild(card);
        card.appendChild(product_img);
        card.appendChild(product_name);
        card.appendChild(product_price);
    }
}

