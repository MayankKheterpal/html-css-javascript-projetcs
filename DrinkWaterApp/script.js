const scups = document.querySelectorAll('.cu-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup() 

scups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
})

function highlightCups(idx){

    if(scups[idx].classList.contains('full') &&
    !scups[idx].nextElementSibling.classList.contains('full')){
        idx--
    } 
    scups.forEach((cup,idx2)=>{
        
        if(idx2 <= idx){
        cup.classList.add('full')
         }else{
            cup.classList.remove('full')
         }

    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.full').length
    const totalCups = scups.length

   if(fullCups ===0){
       percentage.style.visibility = 'hidden'
       percentage.style.height = 0
   }else{
       percentage.style.visibility = 'visible'
       percentage.style.height = `${fullCups / totalCups * 330}px` 
       percentage.innerText = `${fullCups / totalCups * 100}%` 

    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2- (250 * fullCups / 1000)}L`
    }
}