window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    
    const whatsButton = document.querySelector(".whatsapp_link");
    if (whatsButton) {
        whatsButton.addEventListener("click", openWhatsapp);
    } else {
        console.error("Элемент .whatsapp_link не найден");
    }
});

function openWhatsapp(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    console.log('whatsapp link clicked');
    window.open('https://wa.me/79177994693', '_blank');
}