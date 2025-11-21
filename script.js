// Проверка подключения JavaScript
console.log('🎯 JavaScript подключен успешно!');

// Основные переменные
let counterValue = 0;
let currentGalleryIndex = 0;

// Основная функция при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Страница полностью загружена');
    
    // Установка времени загрузки
    updateTime();
    
    // Инициализация галереи
    initGallery();
    
    // Инициализация всех обработчиков событий
    initEventListeners();
    
    // Запуск анимаций
    startAnimations();
    
    // Показать приветственное сообщение
    setTimeout(() => {
        showResult('✅ Сайт полностью загружен и готов к работе!', 'success');
    }, 1000);
});

// Обновление времени
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('time').textContent = Время: ${timeString};
}

// Инициализация галереи
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems[0].classList.add('active');
    }
}

// Инициализация всех обработчиков событий
function initEventListeners() {
    console.log('🔧 Инициализация обработчиков событий...');
    
    // Тестовая кнопка
    document.getElementById('test-btn').addEventListener('click', function() {
        console.log('🎯 Тестовая кнопка нажата');
        showResult('🎉 Поздравляем! Кнопка работает идеально!', 'success');
        animateButton(this);
    });
    
    // Кнопка изменения цвета
    document.getElementById('color-btn').addEventListener('click', function() {
        console.log('🎨 Кнопка смены цвета нажата');
        changeBackgroundColor();
        animateButton(this);
    });
    
    // Кнопка сообщения
    document.getElementById('message-btn').addEventListener('click', function() {
        console.log('💬 Кнопка сообщения нажата');
        showRandomMessage();
        animateButton(this);
    });
    
    // Кнопки счетчика
    document.getElementById('add-btn').addEventListener('click', function() {
        console.log('➕ Кнопка увеличения нажата');
        updateCounter(1);
        animateButton(this);
    });
    
    document.getElementById('subtract-btn').addEventListener('click', function() {
        console.log('➖ Кнопка уменьшения нажата');
        updateCounter(-1);
        animateButton(this);
    });
    
    document.getElementById('reset-btn').addEventListener('click', function() {
        console.log('🔄 Кнопка сброса нажата');
        resetCounter();
        animateButton(this);
    });
    
    // Кнопки галереи
    document.getElementById('prev-btn').addEventListener('click', function() {
        console.log('⬅️ Кнопка назад в галерее нажата');
        navigateGallery(-1);
        animateButton(this);
    });
    
    document.getElementById('next-btn').addEventListener('click', function() {
        console.log('➡️ Кнопка вперед в галерее нажата');
        navigateGallery(1);
        animateButton(this);
    });
    
    // Форма обратной связи
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('📧 Форма отправлена');
        handleFormSubmit();
    });
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✅ Все обработчики событий установлены');
}
