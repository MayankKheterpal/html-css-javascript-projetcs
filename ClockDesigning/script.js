const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondsEl = document.querySelector('.seconds')
const digitEl = document.querySelector('.digital')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener('click',()=>{
    const htmlEl = document.querySelector('html')
    
    htmlEl.classList.toggle('dark')
    if (htmlEl.classList.contains('dark')){
    toggleEl.innerHTML = 'Light Mode'
    } else {
        toggleEl.innerHTML = 'Dark Mode'
    } 
})

function setTime(){
    const time =new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursforClock = hours % 12;
    const minuts = time.getMinutes();
    const sec = time.getSeconds(); 
    const ampm = hours >=12 ? 'PM' : 'AM'
    const date = time.getDate()

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursforClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minuts, 0, 59, 0, 360)}deg)`
    secondsEl.style.transform = `translate(-50%,-100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`

    digitEl.innerHTML = `${hoursforClock}:${minuts < 10 ? `0${minuts}`: `${minuts}` } ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}


// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime,1000)

