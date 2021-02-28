const slidercontainer = document.querySelector('.slider-container')
const left_slide = document.querySelector('.left-slide')

const right_slide = document.querySelector('.right-slide')

const down_button = document.querySelector('.down-button')

const up_button = document.querySelector('.up-button')

const Countslide= right_slide.querySelectorAll('div').length

let activeSlideIndex = 0

left_slide.style.top = `-${(Countslide - 1) * 100}vh`

down_button.addEventListener('click', ()=>changeslide('down'))

up_button.addEventListener('click', ()=>changeslide('up'))

const changeslide= (direction)=>{
    const sliderHeight = slidercontainer.clientHeight
   if (direction === 'up'){
       activeSlideIndex++

       if (activeSlideIndex > Countslide -1) {
         activeSlideIndex = 0
       }
   } else if (direction ==='down'){
    activeSlideIndex--

    if (activeSlideIndex < 0 ){
      activeSlideIndex = Countslide -1
    }

   }

   right_slide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
   left_slide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}