// slider
const slides = document.querySelectorAll(".slider-item"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.add("visually-hidden");
  }
  slides[n].classList.remove("visually-hidden");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("current");
  }
  dots[n].classList.add("current");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    console.log(index);
    prepareCurrentSlide();
  });
});

setInterval(function () {
  nextSlide();
}, 5000);

// modal

const writeUs = document.querySelector(".write-us");
const modal = document.querySelector(".modal-contacts");

const closeModal = document.querySelector(".modal-close");

console.log(closeModal);

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === 'Escape') {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
    }
  }
})

// window.addEventListener("click", (evt) => {
//   if (evt) {
//     if (modal.classList.contains("modal-show")) {
//       evt.preventDefault();
//       modal.classList.remove("modal-show");
//   }
//   }
// })