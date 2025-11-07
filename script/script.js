import { LANG } from "../lang/translate.js";

window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");
    //console.log("LANG -- ", LANG);

    // Если язык браузера пользователя русский - покажем страницу на русском, иначе - на испанском
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes('ru')) {
        setupLanguage('ru'); 
        showFlag('ru');
    } else {
        setupLanguage('es');
        showFlag('es');
    }
    
    // Чтобы не прописывать номер телефона в коде
    const whatsButton = document.querySelector(".whatsapp_link");
    if (whatsButton) {
        whatsButton.addEventListener("click", openWhatsapp);
    } else {
        console.error("Элемент .whatsapp_link не найден");
    }

    // Клик по флагу (испанский / русский) для переключения языка
    const langSelectWatch = document.querySelector(".menu_lang_select");
    if (langSelectWatch){
        langSelectWatch.addEventListener("click", changeLanguage);
    } else {
        console.error("Элемент .menu_lang_select не найден")
    }
});

function openWhatsapp(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    console.log('whatsapp link clicked');
    window.open('https://wa.me/79177994693', '_blank');
}

function setupLanguage(lang) {
    document.title = LANG[lang].html_title || "Портфолио"
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (LANG[lang] && LANG[lang][key]) {
            // Используем innerHTML вместо textContent для интерпретации HTML
            element.innerHTML = LANG[lang][key];
        }
    });
}

function showFlag(lang){
    if (lang == 'ru') {
        document.querySelector(".estandarte_rusia").classList.remove('hidden');
        document.querySelector(".estandarte_espana").classList.add('hidden');
    } else {
        document.querySelector(".estandarte_espana").classList.remove('hidden');
        document.querySelector(".estandarte_rusia").classList.add('hidden');
    }
}

function changeLanguage(flag_current) {
    const flag_es = document.querySelector(".estandarte_espana");
    const flag_ru = document.querySelector(".estandarte_rusia");
    
    let selectedLanguage; 

    if (flag_current.target == flag_es) {
        flag_es.classList.add('hidden');
        flag_ru.classList.remove('hidden');
        selectedLanguage = flag_ru.dataset.lang;

    } else if (flag_current.target == flag_ru) {
        flag_ru.classList.add('hidden');
        flag_es.classList.remove('hidden');
        selectedLanguage = flag_es.dataset.lang;
    }

    console.log('selectedLanguage', selectedLanguage);
    setupLanguage(selectedLanguage)
}