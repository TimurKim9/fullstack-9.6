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
  let brandsSwiper;
  let devicesSwiper;
  let servicesSwiper;

  function initSwipers() {
    if (window.innerWidth < 768) {
      
      if (!brandsSwiper) {
        brandsSwiper = new Swiper(".myBrandsSwiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".brands-slider__pagination",
            clickable: true,
          },
        });
      }

      if (!devicesSwiper) {
        devicesSwiper = new Swiper(".myDevicesSwiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".devices-slider__pagination",
            clickable: true,
          },
        });
      }

      if (!servicesSwiper) {
        servicesSwiper = new Swiper(".myServicesSwiper", {
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else {
   
      if (brandsSwiper) {
        brandsSwiper.destroy(true, true);
        brandsSwiper = null;
      }
      if (devicesSwiper) {
        devicesSwiper.destroy(true, true);
        devicesSwiper = null;
      }
      if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
      }
    }
  }

  initSwipers();

  window.addEventListener("resize", initSwipers);

  const toggleBrandsBtn = document.getElementById("toggleBrands");
  const brandsList = document.querySelector(".brands__list");
  const brandsText = toggleBrandsBtn?.querySelector(".toggle-text");

  if (toggleBrandsBtn) {
    toggleBrandsBtn.addEventListener("click", () => {
      brandsList.classList.toggle("show");
      toggleBrandsBtn.classList.toggle("rotated");
      brandsText.textContent = brandsList.classList.contains("show")
        ? "Скрыть"
        : "Показать ещё";
    });
  }

  const toggleDevicesBtn = document.getElementById("toggleDevices");
  const devicesList = document.querySelector(".devices__list");
  const devicesText = toggleDevicesBtn?.querySelector(".toggle-text");

  if (toggleDevicesBtn) {
    toggleDevicesBtn.addEventListener("click", () => {
      devicesList.classList.toggle("show");
      toggleDevicesBtn.classList.toggle("rotated");
      devicesText.textContent = devicesList.classList.contains("show")
        ? "Скрыть"
        : "Показать ещё";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const openBtn = document.querySelector(".header__menu-btn");
  const backBtn = document.querySelector(".menu__btn--burger"); 
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

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

  if (openBtn) openBtn.addEventListener("click", toggleMenu);
  if (backBtn) backBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  const handleResize = () => {
    if (window.innerWidth >= 1439) {
      menu.classList.remove("menu--hidden");
      overlay.classList.remove("overlay--visible");
      document.body.style.overflow = "";
    } else {
      menu.classList.add("menu--hidden");
      overlay.classList.remove("overlay--visible");
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});

