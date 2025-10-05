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

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 16,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


// const toggleBtn = document.getElementById("toggleBtn");
// const toggleText = toggleBtn.querySelector("span");
// const hiddenBtns = document.querySelector(".servis");

// toggleBtn.addEventListener("click", () => {
//   hiddenBtns.classList.toggle("show");
//   toggleBtn.classList.toggle("rotated");

//   toggleText.textContent = hiddenBtns.classList.contains("show")
//     ? "Скрыть"
//     : "Показать ещё";
// });

// Инициализация слайдера
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".brands-slider__pagination",
        clickable: true,
      },
    });

    const toggleBtn = document.getElementById("toggleBtn");
    const toggleText = toggleBtn.querySelector(".brands__toggle-text");
    const brandsList = document.querySelector(".brands__list");

    toggleBtn.addEventListener("click", () => {
      brandsList.classList.toggle("show");
      toggleBtn.classList.toggle("rotated");

      toggleText.textContent = brandsList.classList.contains("show")
        ? "Скрыть"
        : "Показать ещё";

      setTimeout(() => swiper.update(), 100);
    });
  });