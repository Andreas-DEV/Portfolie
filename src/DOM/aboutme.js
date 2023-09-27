import data from "../../assets/json/data.json"

export default class Aboutme {

    constructor(){

        /* ABOUT ME CONTAINER */
        const containerAboutMe = document.createElement('div')
        containerAboutMe.id = "containerAboutMe"
        document.body.appendChild(containerAboutMe)
    
        /* <p> & <img> */
        const containerP1AndImg = document.createElement('div')
        containerP1AndImg.id = "containerP1AndImg"
        containerAboutMe.appendChild(containerP1AndImg)
    
        const containerGif = document.createElement('img')
        containerGif.id = "containerGif"
        containerGif.src = data.content.media.waving
        containerP1AndImg.appendChild(containerGif)
    
        const containerP1 = document.createElement('p')
        containerP1.id = "containerP1"
        containerP1.textContent = data.content.mig[1]
        containerP1AndImg.appendChild(containerP1)
        /* P AND IMG END */
    
        /* ABOUT ME TEXT */
        const containerH1 = document.createElement('h1')
        containerH1.id = "containerH1"
        containerH1.textContent = data.content.mig[2]
        containerAboutMe.appendChild(containerH1)
    
        const containerH2 = document.createElement('h2')
        containerH2.id = "containerH2"
        containerH2.textContent = data.content.mig[3]
        containerAboutMe.appendChild(containerH2)
    
        const containerP2 = document.createElement('p')
        containerP2.id = "containerP2"
        containerP2.textContent = data.content.mig[4]
        containerAboutMe.appendChild(containerP2)
        /* ABOUT ME TEXT END */
    
        const containerButton = document.createElement('div')

        containerButton.addEventListener('click', (el)=> {
            document.getElementById('AboutMeContainer').scrollIntoView();
        })
    
        const containerButtonText = document.createElement('h2')
        containerButtonText.id = "containerButtonText"
        containerButtonText.textContent = "Resume"
        const containerButtonImg = document.createElement('img')
        containerButtonImg.id = "containerButtonImg"
    
        containerButtonImg.src = data.content.media.resume
    
        containerButton.id = "containerButton"
        containerButtonText.textContent = "Resume"
        containerAboutMe.appendChild(containerButton)
        containerButton.appendChild(containerButtonImg)
        containerButton.appendChild(containerButtonText)
    }

  }