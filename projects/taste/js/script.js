import { MENU } from "./resources.js";

window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    makeMenu(MENU);
    const sliderDots = document.querySelector(".slider_dots");
    if (sliderDots){
        sliderDots.addEventListener('click', slideFeedback);
    }
});

function makeMenu(menuList) {
    const menuHome = document.querySelector(".foodmenu_mainmenu");

    for (let key in menuList) {
        if (menuList.hasOwnProperty(key)) {
            const menuBlock = document.createElement("section");
            menuBlock.classList.add("starters_section");
            menuHome.appendChild(menuBlock);
            const menuBlockHeader = document.createElement("p");
            menuBlockHeader.classList.add("header36");
            menuBlockHeader.classList.add("starters_header");
            menuBlockHeader.textContent = key;
            menuBlock.appendChild(menuBlockHeader);
            for (let i = 0; i < menuList[key].length; i++) {
                const item = menuList[key][i];
                const elem = `
                <div class="menu_item">
                    <img src="img/menu/${item.img_name}" alt="" class="menu_item__img">
                    <div class="menu_item__details">
                            <p class="menu_item__details_header header30">${item.name}</p>
                            <p class="menu_item__details_text">${item.ingridients}</p>
                        </div>
                        <div class="menu_item__line"></div>
                        <div class="menu_item__price header30">${item.price}</div>
                    </div>
                `;
                menuBlock.insertAdjacentHTML('beforeend', elem);
            }
        }
    }
}

function slideFeedback(event) {
    const dotLeft = document.querySelector(".dot_left");
    const dotRight = document.querySelector(".dot_right");
    const sliderCards = document.getElementsByClassName("slider_card");
    
    if (sliderCards.length > 0) {
        const parent = sliderCards[0].parentNode;
        if (event.target == dotRight) {
            parent.appendChild(sliderCards[0]);
        } 
        if (event.target == dotLeft) {
            const lastSlide = sliderCards[sliderCards.length-1];
            parent.prepend(lastSlide)
        }
    }
}