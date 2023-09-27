import data from "../../assets/json/data.json"

export default class Navbar {
    constructor() {

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

}
