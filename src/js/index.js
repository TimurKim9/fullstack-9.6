import '../scss/style.scss'

console.log('It works!')

const buttons = document.querySelectorAll('.services-btn button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Сбрасываем класс active у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Добавляем active только к нажатой кнопке
    button.classList.add('active');
  });
});