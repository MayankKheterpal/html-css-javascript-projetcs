const btns = document.querySelectorAll('.ClickMe')

btns.forEach(btn =>{

    btn.addEventListener('click', function (e){
        const x = e.clientX
        const y = e.clientY
         
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const Yinside = y - buttonTop
        const Xinside = x - buttonLeft

        const circle = document.createElement('span')
        circle.classList.add('Circle')
        circle.style.top = Yinside +'px'
        circle.style.left = Xinside + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)

    })

})

//<span class="Circle" style= 'top: 27px; left: 82px'></span>