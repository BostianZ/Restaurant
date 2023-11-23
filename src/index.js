import { pageLoad } from "./pageload";
import { home } from "./home";
import { contact } from "./contact"

pageLoad();
home();

const homeEl = document.querySelector("#Home");
const menuEl = document.querySelector("#Menu");
const contactEl = document.querySelector("#Contact");

function homeHandler() {
    home();  
}

// function menuhandler() {
//     renderMenuItems();
// }

function contactsHandler() {
    contact();
}

homeEl.addEventListener("click", homeHandler);
// menuEl.addEventListener("click", menuhandler);
contactEl.addEventListener("click", contactsHandler);




