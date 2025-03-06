function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/** */
// Отримання всіх зображень каруселі
const carouselImages = document.querySelectorAll(".carousel__image");

// Індекс поточного зображення
let currentIndex = 0;

// Функція, яка переключає зображення каруселі
function showImage(index) {
  // Приховуємо всі зображення
  carouselImages.forEach((image) => {
    image.style.display = "none";
  });
  // Показуємо поточне зображення
  carouselImages[index].style.display = "block";
}

// Функція для автоматичного переключення зображень каруселі
function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Початкове відображення першого зображення
showImage(currentIndex);

// Автоматичне переключення зображень каруселі кожні 3 секунди
setInterval(nextSlide, 7000);

// Функція, яка переключає зображення каруселі
function showImage(index) {
  // Прибираємо клас active з усіх зображень
  carouselImages.forEach((image) => {
    image.classList.remove("active");
  });
  // Додаємо клас active до поточного зображення
  carouselImages[index].classList.add("active");
}

/**fade in */

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".hidden").forEach((element) => {
    observer.observe(element);
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
