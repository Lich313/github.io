// Проверка подключения JavaScript
console.log('✅ JavaScript подключен успешно!');

// Основная функция при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница полностью загружена');
    
    // Установка времени загрузки
    document.getElementById('time').textContent = 'Время загрузки: ' + new Date().toLocaleString();
    
    // Инициализация всех обработчиков событий
    initializeEventListeners();
    
    // Запуск анимаций
    startAnimations();
});

// Инициализация всех обработчиков
function initializeEventListeners() {
    console.log('🔄 Инициализация обработчиков событий...');
    
    // Тестовая кнопка
    const testBtn = document.getElementById('test-btn');
    if (testBtn) {
        testBtn.addEventListener('click', function() {
            console.log('🎯 Кнопка "Проверить кнопку" нажата');
            showResult('✅ Кнопка работает! JavaScript активен!', 'success');
            
            // Анимация кнопки
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Кнопка изменения цвета
    const colorBtn = document.getElementById('color-btn');
    if (colorBtn) {
        colorBtn.addEventListener('click', function() {
            console.log('🎨 Кнопка изменения цвета нажата');
            changeBackgroundColor();
        });
    }
    
    // Кнопка счетчика
    const addBtn = document.getElementById('add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            console.log('➕ Кнопка +1 нажата');
            incrementCounter();
        });
    }
    
    // Кнопка сброса
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            console.log('🔄 Кнопка сброса нажата');
            resetCounter();
        });
    }
    
    // Форма обратной связи
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('📧 Форма отправлена');
            handleFormSubmit();
        });
    }
    
    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                console.log('🔍 Прокрутка к разделу:', targetId);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('✅ Все обработчики событий установлены');
}

// Функция для отображения результата
function showResult(message, type = 'info') {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = message;
        resultDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#e8f4fd';
        resultDiv.style.color = type === 'success' ? '#155724' : '#004085';
        
        // Автоматическое скрытие через 3 секунды
        setTimeout(() => {
            resultDiv.textContent = '';
            resultDiv.style.backgroundColor = '';
        }, 3000);
    }
}

// Изменение цвета фона
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',