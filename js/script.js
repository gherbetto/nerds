// const slides = document.querySelectorAll('.slider-item'),
//       dots = document.querySelectorAll('.slider-controls');

// let index = 0;

// const activeSlide = n => {
//   for(slide of slides) {
//     slide.classList.remove('visually-hidden');
//   }
//   slides[n].classList.add('visually-hidden');
// }

// const activeDot = n => {
//   for(dot of dots) {
//     dot.classList.remove('current');
//   }
//   dots[n].classList.add('current');
// }

// const prepCurrentSlide = ind => {
//     activeSlide(index);
//     activeDot(index);
// }

// const nextSlide = () => {
//   if(index == slides.length - 1) {
//     index = 0;
//     prepCurrentSlide(index);
//   } else {
//   index++;
//     prepCurrentSlide(index);
//   }
// }

// const prevSlide = () => {
//   if(index == 0) {
//     index = slides.length - 1;
//     prepCurrentSlide(index);
//   } else {
//   index--;
//     prepCurrentSlide(index);
//   }
// }

// dots.forEach((item, indexDot) => {
//   item.addEventListener('click', () => {
//     index = indexDot;
//     prepCurrentSlide(index);
//   })
// })



// // next.addEventListener('click', nextSlide);
// // prev.addEventListener('click', prevSlide);

// setInterval(function() {
//   nextSlide()
// }, 2000);