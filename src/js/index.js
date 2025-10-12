import '../scss/style.scss'

console.log('It works!')

const buttons = document.querySelectorAll('.side-menu__item button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    buttons.forEach(btn => btn.classList.remove('active'));
    
    
    button.classList.add('active');
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  const toggleDevicesBtn = document.getElementById("toggleDevices");
  const devicesList = document.querySelector(".devices__list");
  const devicesText = toggleDevicesBtn.querySelector(".toggle-text");

  toggleDevicesBtn.addEventListener("click", () => {
    devicesList.classList.toggle("show");
    toggleDevicesBtn.classList.toggle("rotated");
    devicesText.textContent = devicesList.classList.contains("show")
      ? "Скрыть"
      : "Показать ещё";
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const openBtn = document.querySelector(".header__menu-btn"); // бургер в хедере
  const backBtn = document.querySelector(".menu__btn--burger"); // кнопка внутри меню
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // --- функции ---
  const openMenu = () => {
    menu.classList.remove("menu--hidden");
    overlay.classList.add("overlay--visible");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.add("menu--hidden");
    overlay.classList.remove("overlay--visible");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const hidden = menu.classList.contains("menu--hidden");
    hidden ? openMenu() : closeMenu();
  };

  // --- события ---
  if (openBtn) openBtn.addEventListener("click", toggleMenu);
  if (backBtn) backBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // --- адаптация под экран ---
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      menu.classList.remove("menu--hidden");
      overlay.classList.remove("overlay--visible");
      document.body.style.overflow = "";
    } else {
      menu.classList.add("menu--hidden");
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});

