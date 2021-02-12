const jokel= document.getElementById('joke')
const jokebtn = document.getElementById('joke-btn')

jokebtn.addEventListener('click',generateJoke)

generateJoke()

//Using async funtion that awaits 
async function generateJoke(){
    const config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/',config)
    
    //code below this is called promise
    const data = await res.json()
    jokel.innerHTML = data.joke
    

} 

//Another way of fetch using .then

/*
function generateJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    }).then(res =>res.json())
    .then((data) => {
        jokel.innerHTML = data.joke
    })
    
} */