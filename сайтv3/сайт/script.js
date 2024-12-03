// Переместите функцию smoothScroll в глобальную область видимости
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события для всех ссылок с классом 'scroll-link'
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const targetId = this.getAttribute('href').substring(1); // Получаем id цели
            smoothScroll(targetId); // Вызываем функцию плавного скролла
        });
    });
});
// Получаем модальные окна
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");

// Получаем кнопки для открытия модальных окон
var btn1 = document.getElementById("openModal1");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");
var btn4 = document.getElementById("openModal4");
var btn5 = document.getElementById("openModal5");

// Получаем элементы для закрытия модальных окон
var span1 = document.getElementById("closeModal1");
var span2 = document.getElementById("closeModal2");
var span3 = document.getElementById("closeModal3");
var span4 = document.getElementById("closeModal4");
var span5 = document.getElementById("closeModal5");

// Открываем модальные окна
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}

// Закрываем модальные окна
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

// Закрываем модальные окна при клике вне их
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    } else if (event.target == modal5) {
        modal5.style.display = "none";
    }
}
function checkFields() {
    // Получить все необходимые поля формы
    const requiredFields = document.querySelectorAll('.required');

    // Проверить, заполнены ли все поля
    for (const field of requiredFields) {
      if (!field.value) {
        // Поле не заполнено, не отображать модальное окно
        return;
      }
    }

    // Все поля заполнены, отобразить модальное окно
    alert('Ваша заявка принята');
  }