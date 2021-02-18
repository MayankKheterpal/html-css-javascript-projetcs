const body =document.body
const lftbtn = document.getElementById('left')
const rghtbtn = document.getElementById('right')
const slides = document.querySelectorAll('.slide')

let activeSlides = 0

rghtbtn.addEventListener('click', ()=>{
    activeSlides++
    
    if (activeSlides > (slides.length - 1)){
        activeSlides= 0
    }
        moveslide(activeSlides) 
        updateBackgrnd(activeSlides)
})

lftbtn.addEventListener('click', ()=>{
    activeSlides--
    if (activeSlides <  0){
        activeSlides = slides.length - 1
    }
    moveslide(activeSlides) 
    updateBackgrnd(activeSlides)
})



function updateBackgrnd(){
  body.style.backgroundImage = slides[activeSlides].style.backgroundImage

}

function moveslide(activeSlides){
    slides.forEach(slide => {slide.classList.remove('active')  
});
slides[activeSlides].classList.add('active')
}