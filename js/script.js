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

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
  index++;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) =>{
  item.addEventListener('click', () => {
    index = indexDot;
    console.log(index)
    prepareCurrentSlide()
  })
})

setInterval(function() {
  nextSlide()
}, 5000);

// modal

