const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileimg = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const date = document.getElementById('date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setInterval(getData,2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" >`
    title.innerHTML = `Lorem ipsum dolor sit amet`
    excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
    profileimg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/81.jpg" alt=""/>`
    nameEl.innerHTML = `John Doe`
    date.innerHTML = `June 01,1990`
   
    animated_bg.forEach(bg => { bg.classList.remove('animated-bg')
    
   
    });
    animated_bg_text.forEach(bg => { bg.classList.remove('animated-bg-text')});

}