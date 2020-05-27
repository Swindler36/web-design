const content = document.querySelector("#content");
const child = content.children;
const widget = document.querySelector("#photo_widget");
let orderMax = 0;
let order;
let images = []; 

for (let i = 0; i < child.length; i++) {
    if(child[i].tagName == "IMG"){
        child[i].setAttribute("id",String(orderMax +1));
        child[i].addEventListener("click",show);
        orderMax += 1;
        images.push(child[i]);
        if(orderMax == 10){
            break;
        }
    }
}

const image_band_place = document.querySelector("#image-band-place");
let number = 0;

images.forEach(image => {
    const a = document.createElement("div");
    a.className = "box-1";
    const el = document.createElement("img");
    let x = String(image.src).split("/");
    el.src = x[x.length -1];
    el.className = "img-band-item";
    el.id = String(number);
    number += 1;
    a.appendChild(el);
    image_band_place.appendChild(a);
});
function show(e){
    widget.style.display = "block";
    let id = e.target.id;
    order = id;       
    showPhoto(id);
}
const arrow = document.querySelectorAll(".arrow");
arrow[0].addEventListener("click",left);
arrow[1].addEventListener("click",right);

function left() {
    order = +order;
    if(order > 1){
        order -= 1;
        showPhoto(order);
        
    }else{
        order = 1;
    }
}
function right() {
    order = +order;
    if(order < orderMax){
        order += 1;
        showPhoto(order);
    }else{
        order = orderMax;
    }    
}
function showPhoto(a){
    const img = document.querySelector("#image-band-place").children[a-1];
    let main_img = document.querySelector(".main_img").lastElementChild;
    let x = String(img.firstElementChild.src).split("/");
    main_img.src = x[x.length -1];
}

const cancel = document.querySelector("#cancel");
cancel.addEventListener("click",can);
function can(){
    widget.style.display = "none";
}

const img_band_items = document.querySelectorAll(".img-band-item");

for (let i = 0; i < img_band_items.length; i++) {
    if(img_band_items[i].tagName == "IMG"){
        img_band_items[i].addEventListener("click",upShow);
    }
}

function upShow(e){
    let main_img = document.querySelector(".main_img").lastElementChild;
    let x = String(e.target.src).split("/");
    main_img.src = x[x.length -1];
    order = +e.target.id +1;
    console.log(order);
}