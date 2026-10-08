
let greetingIndex = 0;                           
let lightbox;                                      
let bigImg;                                       

window.onload = pageLoad;

function pageLoad() {
    addTitles();                        
    setupLightbox(".Pic3 img");         
    setupLightbox(".picgame img");      
    addGotoTitles();                    
}

function addTitles() {
    const icons = document.querySelectorAll(".picPro, .icon");
    for (const icon of icons) {
        icon.title = icon.alt;         
    }
}

function createLightbox() {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    bigImg = document.createElement("img");
    lightbox.appendChild(bigImg);
    document.body.appendChild(lightbox);
    lightbox.onclick = closeLightbox;   
}

function openLightbox(event) {
    bigImg.src = event.target.src;      
    bigImg.alt = event.target.alt;
    lightbox.classList.add("show");
}

function closeLightbox() {
    lightbox.classList.remove("show");
}

function setupLightbox(selector) {
    const images = document.querySelectorAll(selector);
    if (images.length == 0) {
        return;                         
    }

    if (!lightbox) {
        createLightbox();             
    }

    for (const img of images) {
        img.onclick = openLightbox;
    }
}

function addGotoTitles() {
    const buttons = document.querySelectorAll(".goto-btn");
    for (const btn of buttons) {
        btn.title = "ไปดู Assignment " + btn.textContent;
    }
}