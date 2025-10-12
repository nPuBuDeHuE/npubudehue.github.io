document.addEventListener("DOMContentLoaded", function () {
    /** Вставляем содержимое из файлов: меню и футер */
    insertInclude();

    /** переключаем Слайды */
    const slideButtons = document.querySelectorAll(".slider_btn");
    slideButtons.forEach(function(button){
        button.addEventListener("click", moveSlides)
    })

    /** включаем видео */
    const videoBtn = document.querySelector(".video_play__button");
    const videoFile = document.querySelector(".video_object");
    videoBtn.addEventListener("click", function(){
        if (videoFile.paused) {
            videoFile.play();
            //videoBtn.classList.add("video_pause");
        } else {
            videoFile.pause();
            //videoBtn.classList.remove("video_pause");
        }
    })

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

/* переключаем слайды и указатель слайдов */
function moveSlides(event) {
    const buttonLeft = document.querySelector(".prev");
    const buttonRight = document.querySelector(".next");
    const slides = document.getElementsByClassName("slide");
    const slidePointer = document.querySelectorAll(".slide_counter__item");
    let activeIndex = Array.from(slidePointer).findIndex(elem =>  elem.classList.contains("slide_active"));
    const parent = document.querySelector(".slides")

    if (slides.length > 0) {
        slidePointer[activeIndex].classList.remove('slide_active');
        if (event.target == buttonRight) {
            parent.appendChild(slides[0]);
            
            if (activeIndex == slidePointer.length-1) { 
                activeIndex = 0; 
            } else {
                activeIndex++;
            }
            slidePointer[activeIndex].classList.add('slide_active');
        }
        if (event.target == buttonLeft) {
            const lastSlide = slides[slides.length-1];
            parent.prepend(lastSlide);
            if (activeIndex == 0) { 
                activeIndex = slidePointer.length-1; 
            } else {
                activeIndex--;
            }
            slidePointer[activeIndex].classList.add('slide_active');
        }
    }
}