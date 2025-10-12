/** Вставляем постоянное содержимое из файлов */
document.addEventListener("DOMContentLoaded", function () {
    /** Вставляем содержимое из файлов: меню и футер */
    insertInclude();
})

function insertInclude() {
    const includeElements = document.querySelectorAll('[data-include]');
    includeElements.forEach(async function(element){
        const file = element.getAttribute('data-include');
        const response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        }
    });
}