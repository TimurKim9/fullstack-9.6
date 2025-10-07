import '../scss/style.scss'

console.log('It works!')

const buttons = document.querySelectorAll('.side-menu__item button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    buttons.forEach(btn => btn.classList.remove('active'));
    
    
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


document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".brands-slider__pagination",
        clickable: true,
      },
    });

    const toggleBrandsBtn = document.getElementById("toggleBrands");
    const brandsList = document.querySelector(".brands__list");
    const brandsText = toggleBrandsBtn.querySelector(".toggle-text");

    toggleBrandsBtn.addEventListener("click", () => {
      brandsList.classList.toggle("show");
      toggleBrandsBtn.classList.toggle("rotated");
      brandsText.textContent = brandsList.classList.contains("show") ? "Скрыть" : "Показать ещё";
    });
});  

    const toggleDevicesBtn = document.getElementById("toggleDevices");
    const devicesList = document.querySelector(".devices__list");
    const devicesText = toggleDevicesBtn.querySelector(".toggle-text");

    toggleDevicesBtn.addEventListener("click", () => {
      devicesList.classList.toggle("show");
      toggleDevicesBtn.classList.toggle("rotated");
      devicesText.textContent = devicesList.classList.contains("show") ? "Скрыть" : "Показать ещё";
});
document.addEventListener("DOMContentLoaded", () => {
  const devicesSwiper = new Swiper(".myDevicesSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".devices-slider__pagination",
      clickable: true,
    },
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