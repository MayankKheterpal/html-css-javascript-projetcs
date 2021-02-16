const nav = document.getElementById('nav')
const btn = document.getElementById('Toggle')

btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
})