/* LIB Imports */
import { Logger } from "sass";
import data from "../assets/json/data.json"
import gsap from "gsap";

/* DOM Imports */
import Favicon from "./favicon";
import Navbar from "./DOM/navbar";
import Aboutme from "./DOM/aboutme";
import AboutMeSection from "./DOM/aboutmesection";
import Projects from "./DOM/projects";

export default class Frontpage {

  constructor() {


    /* FAVICON init */
    new Favicon;

    /* NAVBAR init*/
    new Navbar;

    /* ABOUT ME init */
    new Aboutme;

    /* ABOUT ME SECTION */
    new AboutMeSection;

    /* PROJECT SECTION */
    new Projects;


  } // END constructor


} // END class
