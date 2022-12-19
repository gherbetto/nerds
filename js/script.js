// slider
const slides = document.querySelectorAll('.slider-item'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  for(slide of slides) {
    slide.classList.add('visually-hidden');
  }
  slides[n].classList.remove('visually-hidden');
}

const activeDot = n => {
  for(dot of dots) {
    dot.classList.remove('current');
  }
  dots[n].classList.add('current');
}
console.log(dots);

const prepareCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
}

dots.forEach((item, indexDot) =>{
  item.addEventListener('click', () => {
    index = indexDot;
    console.log(index)
    prepareCurrentSlide()
  })
})

// modal

