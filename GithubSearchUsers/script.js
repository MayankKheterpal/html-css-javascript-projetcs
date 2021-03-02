const ApiUrl = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username = search.value
    if(username){
          getUser(username)
          search.value = ''
    }
})


async function getUser(username){
    try {
        const { data} = await axios(ApiUrl + username)
        createUserCard(data)
        grtRepos(username)
        
    } catch (error) {
        if (error.response.status == 404){
           createErrorCard('This User not found')

        }
        
    }

}

async function grtRepos(username){
   
    try {
        const { data} = await axios(ApiUrl + username +'/repos?sort=created')
       addrepostoCard(data)
        
    } catch (error) {
           createErrorCard('Problem Fetching Data')   
    }

}

function createUserCard(user){
    const htmluser =
     `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="" class="avatar">
    </div>

    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>   
        <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos">
         
        </div>
      </div>
     
   </div>`
 
   main.innerHTML = htmluser
}

function createErrorCard(message){

    const htmluser =
    `<div class="card">
      <h1> ${message} <h1>
    </div>`
    main.innerHTML = htmluser
}

function addrepostoCard(repos){

    const reposEl= document.getElementById('repos')
    
      
    repos.slice(0, 5).forEach(repo => {
     const repoEl = document.createElement('a')
     repoEl.classList.add('repo')
     repoEl.href = repo.html_url
     repoEl.target = '_blank'
     repoEl.innerText = repo.name

      reposEl.appendChild(repoEl)

      })

}