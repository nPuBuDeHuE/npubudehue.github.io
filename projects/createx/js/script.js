document.addEventListener("DOMContentLoaded", function () {
    insertInclude();
})

/** Вставляем постоянное содержимое из файлов */
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