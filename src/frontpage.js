import { Logger } from "sass";
import data from "../assets/json/data.json"
import gsap from "gsap";

export default class Frontpage {

  constructor() {


    /* INITIIALIZE FAVICON */
    new this.favicon;

    /* NAVBAR */
    new this.navbar;

    /* ABOUT ME */
    new this.aboutme;

    /* ABOUT ME SECTION */
    new this.aboutmesection;


  } // END constructor

  favicon() {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = './assets/media/logo.png';
  }

  aboutme() {

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

  navbar() {

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
    data.content.menuitems.forEach((el, index) => {

      /* List container */
      const navbarMenuLi = document.createElement('li')
      navbarMenuLi.id = "navbarMenuLi"
      navbarMenu.appendChild(navbarMenuLi)

      /* Img container */
      const navbarMenuItemImg = document.createElement('img')
      navbarMenuItemImg.id = "navbarMenuItemImg"
      navbarMenuLi.appendChild(navbarMenuItemImg)
      navbarMenuItemImg.src = data.content.some[index].src


      /* Links */
      const navbarMenuItem = document.createElement('a')
      navbarMenuItem.id = "navbarMenuItem"
      navbarMenuItem.href = el.src
      navbarMenuItem.target = "_blank"
      navbarMenuItem.textContent = el.name
      navbarMenuLi.appendChild(navbarMenuItem)



    })

  }

  aboutmesection() {

    /* Container */
    const AboutMeContainer = document.createElement('div')
    AboutMeContainer.id = "AboutMeContainer"
    document.body.appendChild(AboutMeContainer)

    /* <p> + Container */
    const paragraphContainer = document.createElement('div')
    paragraphContainer.id = "paragrahContainer"
    AboutMeContainer.appendChild(paragraphContainer)


    for (let i = 0; i < 3; i++) {

      const paragraph = document.createElement('p')
      paragraph.id = "paragraph"
      paragraph.textContent = data.content.about[i]
      paragraphContainer.appendChild(paragraph)

    }

    /* ABOUT ME PICTURE */
    const langImgContainer = document.createElement('div')
    langImgContainer.id = "langImgContainer"
    AboutMeContainer.appendChild(langImgContainer)

    const cardFront = document.createElement('div')
    cardFront.id = "cardFront"
    langImgContainer.appendChild(cardFront)

    const cardBack = document.createElement('div')
    cardBack.id = "cardBack"
    langImgContainer.appendChild(cardBack)

    const aboutMePicture = document.createElement('img')
    aboutMePicture.id = "aboutMePicture"
    aboutMePicture.src = data.content.media.mig
    cardFront.appendChild(aboutMePicture)

    const langContainer = document.createElement('div')
    langContainer.id = "langContainer"
    document.body.appendChild(langContainer)


    data.content.lang.forEach((element, index)=> {
      const langContainerLink = document.createElement('a')
      langContainerLink.id = "langContainerLink"
      langContainer.appendChild(langContainerLink)
      langContainerLink.target = "_blank"
      langContainerLink.href = data.content.lang[index].domain

      const langContainerImg = document.createElement('img')
      langContainerImg.id = "langContainerImg"
      langContainerImg.src = data.content.lang[index].src
      langContainerLink.appendChild(langContainerImg)
    })

    gsap.utils.toArray("#langImgContainer").forEach(function(card) {
      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      });
      const q = gsap.utils.selector(card);
      const front = q("#cardFront");
      const back = q("#cardBack");
      
      gsap.set(back, { rotationY:-180 });
      
      const tl = gsap.timeline({ paused: true })
        .to(front, { duration: 1, rotationY: 180 })
        .to(back, { duration: 1, rotationY: 0 }, 0)
        .to(card, { z: 50 }, 0)
        .to(card, { z: 0 }, 0.5);
      card.addEventListener("mouseenter", function() {
        tl.play();
      });
      card.addEventListener("mouseleave", function() {
        tl.reverse();
      });
    });


  }

  projects() {

  }


} // END class
