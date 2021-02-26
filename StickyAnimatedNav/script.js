const sticky = document.querySelector('.Sticky')

window.addEventListener('scroll',fixnav)

function fixnav(){
    if (window.scrollY > sticky.offsetHeight +150){
        sticky.classList.add('active')
    }else{
        sticky.classList.remove('active')
    }
}