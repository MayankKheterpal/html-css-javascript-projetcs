const button = document.getElementById('button')
const toast = document.getElementById('toast')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
]
const Type = ['info' , 'alert' , 'error']

button.addEventListener('click', ()=> CreateNotifications())

function CreateNotifications(){
   
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(getRandomInfo())
    notif.innerText = getRandomMessage()

    toast.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);

}

function getRandomMessage(){

    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomInfo(){

    return Type[Math.floor(Math.random() * Type.length)]
}