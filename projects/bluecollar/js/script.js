/**
 * Загружаем svg-спрайт с иконками соцсетей
 */
async function loadSvgSprite(){
    try{
        const response = await fetch("./img/header/sprite.svg")
    const svg = await response.text();
    document.body.insertAdjacentHTML('afterbegin', svg)
    } catch(err){
         console.error('SVG спрайт не загрузился:', err);
    }
}
/**
 * Меняем активность ссылки в главном меню
 */
function setActiveLink(){
    const menu = document.getElementById('main_menu');
    if (menu){
        const links = menu.querySelectorAll('.main_menu__link')
        menu.addEventListener('click', (event) => {
            const activeMenuItem = event.target;
            if (activeMenuItem.classList.contains('main_menu__link')){
                for (const link of links){
                    link.classList.remove('main_menu__link_active')
                }
                activeMenuItem.classList.add('main_menu__link_active')
            }
        })
    }
}

/**
 * Меняем содержимое при нажатии на кнопки в разделе main_services_buttons
 */
function handleServicesButton(){
    const buttonsBlock = document.getElementById('main_services_buttons')
    if (buttonsBlock){
        const buttons = buttonsBlock.querySelectorAll('.btn');
        buttonsBlock.addEventListener('click', (event) => {
            const activeButton = event.target;
            if (activeButton.classList.contains('btn')){
                
            }
        })
    }
}


document.addEventListener("DOMContentLoaded", function () {
    loadSvgSprite();
    setActiveLink()
});
