import data from "../../assets/json/data.json"
import gsap from "gsap"


export default class AboutMeSection {
    constructor() {
        /* Container */
        const AboutMeContainer = document.createElement('div')
        AboutMeContainer.id = "AboutMeContainer"
        document.body.appendChild(AboutMeContainer)

        /* PARAGRAPHTITLE CONTAINER */
        const paragraphTitleContainer = document.createElement('div')
        paragraphTitleContainer.id = "paragraphTitleContainer"
        AboutMeContainer.appendChild(paragraphTitleContainer)

        const paragraphTitle = document.createElement('h2')
        paragraphTitle.id = "paragraphTitle"
        paragraphTitle.textContent = "About me"
        paragraphTitleContainer.appendChild(paragraphTitle)

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

        data.content.facts.forEach((e, index) => {

            const cardBackContent = document.createElement('p')
            cardBack.appendChild(cardBackContent)
            cardBackContent.textContent = e.fact
            cardBackContent.id = "cardBackContent"

        })




        const aboutMePicture = document.createElement('img')
        aboutMePicture.id = "aboutMePicture"
        aboutMePicture.src = data.content.media.mig
        cardFront.appendChild(aboutMePicture)

        const langContainer = document.createElement('div')
        langContainer.id = "langContainer"
        document.body.appendChild(langContainer)


        data.content.lang.forEach((element, index) => {

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

        gsap.utils.toArray("#langImgContainer").forEach(function (card) {
            gsap.set(card, {
                transformStyle: "preserve-3d",
                transformPerspective: 1000
            });
            const q = gsap.utils.selector(card);
            const front = q("#cardFront");
            const back = q("#cardBack");

            gsap.set(back, { rotationY: -180 });

            const tl = gsap.timeline({ paused: true })
                .to(front, { duration: 1, rotationY: 180 })
                .to(back, { duration: 1, rotationY: 0 }, 0)
                .to(card, { z: 50 }, 0)
                .to(card, { z: 0 }, 0.5);
            card.addEventListener("mouseenter", function () {
                tl.play();
            });
            card.addEventListener("mouseleave", function () {
                tl.reverse();
            });
        });
    }
}