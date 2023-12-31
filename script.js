import navbar from "./componets/navbar.js";
// import { getData } from "./script/getData.js";


let navbarDiv =document.getElementById("navbar")
navbarDiv.innerHTML = navbar()


let searchInput =document.getElementById("nav_input")
searchInput.addEventListener("keypress", searchData)

async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    // return data
}

async function searchData(e){
    try {
        
        if(e.key === "ENTER"){

            let searchVal = searchInput.value
            let url =  `https://api.github.com/users/${searchVal}`

            let data = await getData(url)
            console.log(data)

            let profileImage = document.getElementById("img_profile")
            profileImage.src = data.avatar_url

            let repoData = await getData(data.repos_url)
            console.log(data)

        }
    
    

    } catch(error){
        console.log(error)

    }
}