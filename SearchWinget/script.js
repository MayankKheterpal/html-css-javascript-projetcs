const search = document.querySelector('.search')
const pBtn = document.querySelector('.btn')
const pInput = document.querySelector('.input')

pBtn.addEventListener('click', ()=>{ 
    
    search.classList.toggle('active');
    pInput.focus()
})