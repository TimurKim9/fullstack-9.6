import '../scss/style.scss'

console.log('It works!')

const buttons = document.querySelectorAll('.side-menu__item button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Сбрасываем класс active у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Добавляем active только к нажатой кнопке
    button.classList.add('active');
  });
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const toggleBtn = document.getElementById("toggleBtn");
const toggleText = toggleBtn.querySelector("span");
const hiddenBtns = document.querySelector(".servis");

toggleBtn.addEventListener("click", () => {
  hiddenBtns.classList.toggle("show");
  toggleBtn.classList.toggle("rotated");

  toggleText.textContent = hiddenBtns.classList.contains("show")
    ? "Скрыть"
    : "Показать ещё";
});