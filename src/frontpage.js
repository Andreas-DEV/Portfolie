import data from "../assets/json/data.json"

export default class Frontpage {

  constructor() {

    /* NAVBAR */
    new this.navbar;

    /* ABOUT ME */
    new this.aboutme;


  } // END constructor

  aboutme() {
    const containerAboutMe = document.createElement('div')
    containerAboutMe.id = "containerAboutMe"
    document.body.appendChild(containerAboutMe)

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

    const containerButton = document.createElement('div')

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

  navbar(){

    /* CONTAINER */
    const navbarContainer = document.createElement('nav')
    navbarContainer.id = "navbarContainer"
    document.body.appendChild(navbarContainer)

    /* IMG */
    const navbarImg = document.createElement('img')
    navbarImg.id = "navbarImg"
    navbarContainer.appendChild(navbarImg)
    navbarImg.src = data.content.media.logo

    /* MENU */
    const navbarMenu = document.createElement('ul')
    navbarMenu.id = "navbarMenu"
    navbarContainer.appendChild(navbarMenu)
    // MENU Children

    data.content.menuitems.forEach((el, index)=> {

      /* 1st */
      const navbarMenuLi = document.createElement('li')
      navbarMenuLi.id = "navbarMenuLi"
      navbarMenu.appendChild(navbarMenuLi)

      /* 2nd */
      const navbarMenuItemImg = document.createElement('img')
      navbarMenuItemImg.id = "navbarMenuItemImg"
      navbarMenuLi.appendChild(navbarMenuItemImg)
      navbarMenuItemImg.src = data.content.some[index].src
      
      
      /* 3rd */
      const navbarMenuItem = document.createElement('a')
      navbarMenuItem.id = "navbarMenuItem"
      navbarMenuItem.href = el.src
      navbarMenuItem.textContent = el.name
      navbarMenuLi.appendChild(navbarMenuItem)
      
      

    })

  }


} // END class
