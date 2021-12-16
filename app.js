// Получаем массив слайдов
const slides = document.querySelectorAll('.slide')

// Перебираем все слайды и по клику изначально убираем со всем эелемнтов класс active, а к нажатаму слайду добавляем
for (let s of slides) {
    s.addEventListener('click', () => {
        clearActiveClasses()
        s.classList.add('active')
    })
}

// Функция, которая убирает со всем слайдов класс Active
function clearActiveClasses() {
    slides.forEach(s => {
        s.classList.remove('active')
    })
}