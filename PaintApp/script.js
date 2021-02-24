const canvas =document.getElementById('canvas')
const decreasebtn =document.getElementById('decrease')
const increasebtn =document.getElementById('increase')
const colorEl =document.getElementById('color')
const clear =document.getElementById('clear')
const sizeEl =document.getElementById('size')
const ctx = canvas.getContext('2d')


let color = 'black'
let pressDown = 0
let size = 10
let x
let y

canvas.addEventListener('mousedown',(e)=>{

    pressDown = 1

   x= e.offsetX 
   y = e.offsetY
    
   drawCirle(x,y)
})

canvas.addEventListener('mouseup',(e)=>{

    pressDown = 0

   x= undefined
   y = undefined
    

})

canvas.addEventListener('mousemove',(e)=>{

  if (pressDown ==1){

    x2 = e.offsetX
    y2 = e.offsetY

    drawCirle(x2,y2)
    drawLine(x,y,x2,y2)

    x = x2
    y = y2

  }
    

})


function drawCirle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = color
    ctx.fill()

}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()

}

colorEl.addEventListener('change', (e)=>{
    color = e.target.value

})

increasebtn.addEventListener('click',()=>{
size += 5

   if (size > 50) {
    size = 50 }
   sizeEl.innerText = size

})

decreasebtn.addEventListener('click',()=>{
    size -= 5
    
    if (size < 5) {
        size = 5
     }
     sizeEl.innerHTML = size
    
 })

clear.addEventListener('click', () => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})