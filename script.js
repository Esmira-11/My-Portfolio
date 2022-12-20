//overlay
function openNav(){
     document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
     document.getElementById("myNav").style.width = "0%";
}

// navbar pagination
const links = document.getElementsByClassName('links')
for(let i = 0; i<links.length; i++){
    //anonim funksiya
    links[i].addEventListener('click',function(){
        const current = document.getElementsByClassName('active')
        if(current.length > 0){
            current[0].className = current[0].className.replace(" active","")
        }
        //this kliklediyimizi referans alir
        this.className += " active" 
    })
}

//json
const CardsContainer = document.querySelector('.slider')
window.addEventListener('DOMContentLoaded', bringTheData)
async function bringTheData(){
    const address = "blogs.json"
    // fetch istek atir hemin linke
    // await internetden asilidir gozleyir
    // backtick
    try{
        const data = await fetch(address)
        const correctStyle =await data.json()
        for(let i=0; i<correctStyle.length; i++){
            CardsContainer.innerHTML += ` <div class="cards" >
            <img class="instruments" src="${correctStyle[i].img_address}" alt="piano">
            <h3 class="card-title">${correctStyle[i].interests_name}</h3>
            <p class="card-text">${correctStyle[i].content}</p>
        </div>`
        }
    }
    catch(error){
        console.log(error)
    }
}


