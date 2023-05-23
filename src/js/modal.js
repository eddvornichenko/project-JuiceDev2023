// Модальное окно ORDER
// Получаем ссылки на элементы страницы
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

// Функция отображения модального окна
function showModal() {
  modal.style.display = 'block';
}

// Функция скрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Закрываем модальное окно при щелчке на "крестик"
span.onclick = function() {
  closeModal();
}

// Закрываем модальное окно при щелчке вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// При клике на кнопку "Открыть модальное окно" отображаем модальное окно
btn.onclick = function() {
  showModal();
}



// Получаем ссылку на элемент и кнопку
var element = document.getElementById('myModal');
var button = document.getElementById('myBtn');

// Функция для удаления класса
function removeClass() {
  element.classList.remove('is-hidden');
}

// Добавляем обработчик события при клике на кнопку
button.addEventListener('click', removeClass);