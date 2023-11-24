/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const content = document.querySelector("#content");
    const divEl = document.createElement("div");
    const paraElOne = document.createElement("p");
    const paraElTwo = document.createElement("p");
    const img = document.createElement("img")

    img.setAttribute("src", "../dist/restaurant-location.png" );
    divEl.classList.add("contact-info")

    paraElOne.textContent = "Phone: 222-345-6789"
    paraElTwo.textContent = "Location: 1234, Fake street, Fake City, Faker State"

    content.innerHTML = ""

    divEl.appendChild(paraElOne)
    divEl.appendChild(paraElTwo)
    divEl.appendChild(img)
    
    content.appendChild(divEl);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
class HomeContent {
    constructor(heading, description) {
        this.heading = heading;
        this.description = description;
    }

    renderItem() {
        const content = document.querySelector("#content");
        const divEl = document.createElement("div");
        const headingEl = document.createElement("h1");
        const paraEl = document.createElement("p");

        headingEl.textContent = this.heading;
        paraEl.textContent = this.description;

        divEl.appendChild(headingEl);
        divEl.appendChild(paraEl);

        content.appendChild(divEl);
    }
}

function home() {
    const content = document.querySelector("#content");
    content.innerHTML = ""

    new HomeContent("Restaurant Name", `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`).renderItem();

    new HomeContent("Hours", "We are open M-F from 11am to 11pm. Closed on Saturdays and Sundays.").renderItem();
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenuItems: () => (/* binding */ renderMenuItems)
/* harmony export */ });
class MenuItem {
    constructor(title, description, image) {
      this.title = title;
      this.description = description;
      this.image = image;
    }
    
    renderItem() {
      const contentEl = document.querySelector("#content");
      const titleEl = document.createElement("h2");
      const descriptEl = document.createElement("p");
      const divEl = document.createElement("div");
      const img = document.createElement("img");

      img.setAttribute("src", this.image);
      divEl.classList.add("menu-item");

      titleEl.textContent = this.title;
      descriptEl.textContent = this.description;
      
      divEl.appendChild(titleEl);
      divEl.appendChild(descriptEl);
      divEl.appendChild(img);
      contentEl.appendChild(divEl);
    }

  }
  
function renderMenuItems() {
    const contentEl = document.querySelector("#content");
    contentEl.innerHTML = "";

    new MenuItem("Easy Homemade Lasagna", "This easy homemade lasagna is pure comfort food and absolutely delicious! The perfect recipe that works well for both a holiday gathering or a cozy weeknight dinner. ", "../dist/lasanga.jpg").renderItem();
    new MenuItem("Lemon Fettuccine Alfredo", "Classic fettuccine alfredo gets a bright and herbaceous makeover, thanks to Meyer lemons and rosemary, in this super simple, wonderfully creamy pasta dish.", "../dist/fettucini.jpg").renderItem();
    new MenuItem("Cajun Chicken Carbonara", "A quick and easy cajun take on carbonara pasta with cajun seasoned chicken and a lightly seasoned carbonara sauce!", "../dist/carbonara.jpg").renderItem();
    
}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad() {
    const navList = ["Home", "Menu", "Contact"];
    const body = document.querySelector("body");
    const content = document.querySelector("#content");
    const header = document.querySelector("header");
    const navEl = document.createElement("nav");
    const ul = document.createElement("ul");

    for (let i = 0; i < navList.length; i++) {
        let navItem = navList[i];
        let li = document.createElement("li");
        li.setAttribute("id", `${navItem}`);
        li.textContent = navItem;
        ul.appendChild(li);
    }

    banner.classList.add("banner");
    ul.classList.add("navlist")

    navEl.appendChild(ul);
    header.appendChild(navEl);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();

const homeEl = document.querySelector("#Home");
const menuEl = document.querySelector("#Menu");
const contactEl = document.querySelector("#Contact");

function homeHandler() {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();  
}

function menuhandler() {
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenuItems)();
}

function contactsHandler() {
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
}

homeEl.addEventListener("click", homeHandler);
menuEl.addEventListener("click", menuhandler);
contactEl.addEventListener("click", contactsHandler);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1I7QUFDSztBQUNNO0FBQ3pDO0FBQ0EsbURBQVE7QUFDUiwyQ0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcGFyYUVsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBwYXJhRWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vZGlzdC9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZ1wiICk7XHJcbiAgICBkaXZFbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpXHJcblxyXG4gICAgcGFyYUVsT25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogMjIyLTM0NS02Nzg5XCJcclxuICAgIHBhcmFFbFR3by50ZXh0Q29udGVudCA9IFwiTG9jYXRpb246IDEyMzQsIEZha2Ugc3RyZWV0LCBGYWtlIENpdHksIEZha2VyIFN0YXRlXCJcclxuXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChwYXJhRWxPbmUpXHJcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChwYXJhRWxUd28pXHJcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2RWwpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjb250YWN0IH0iLCJjbGFzcyBIb21lQ29udGVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihoZWFkaW5nLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGVhZGluZyA9IGhlYWRpbmc7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW0oKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgICAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgICAgICBoZWFkaW5nRWwudGV4dENvbnRlbnQgPSB0aGlzLmhlYWRpbmc7XHJcbiAgICAgICAgcGFyYUVsLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgZGl2RWwuYXBwZW5kQ2hpbGQoaGVhZGluZ0VsKTtcclxuICAgICAgICBkaXZFbC5hcHBlbmRDaGlsZChwYXJhRWwpO1xyXG5cclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBuZXcgSG9tZUNvbnRlbnQoXCJSZXN0YXVyYW50IE5hbWVcIiwgYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IFxyXG4gICAgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggXHJcbiAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIFxyXG4gICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5gKS5yZW5kZXJJdGVtKCk7XHJcblxyXG4gICAgbmV3IEhvbWVDb250ZW50KFwiSG91cnNcIiwgXCJXZSBhcmUgb3BlbiBNLUYgZnJvbSAxMWFtIHRvIDExcG0uIENsb3NlZCBvbiBTYXR1cmRheXMgYW5kIFN1bmRheXMuXCIpLnJlbmRlckl0ZW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaG9tZSB9IiwiY2xhc3MgTWVudUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXJJdGVtKCkge1xyXG4gICAgICBjb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICAgIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLmltYWdlKTtcclxuICAgICAgZGl2RWwuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG4gICAgICBkZXNjcmlwdEVsLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgXHJcbiAgICAgIGRpdkVsLmFwcGVuZENoaWxkKHRpdGxlRWwpO1xyXG4gICAgICBkaXZFbC5hcHBlbmRDaGlsZChkZXNjcmlwdEVsKTtcclxuICAgICAgZGl2RWwuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgY29udGVudEVsLmFwcGVuZENoaWxkKGRpdkVsKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG5mdW5jdGlvbiByZW5kZXJNZW51SXRlbXMoKSB7XHJcbiAgICBjb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RWwuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBuZXcgTWVudUl0ZW0oXCJFYXN5IEhvbWVtYWRlIExhc2FnbmFcIiwgXCJUaGlzIGVhc3kgaG9tZW1hZGUgbGFzYWduYSBpcyBwdXJlIGNvbWZvcnQgZm9vZCBhbmQgYWJzb2x1dGVseSBkZWxpY2lvdXMhIFRoZSBwZXJmZWN0IHJlY2lwZSB0aGF0IHdvcmtzIHdlbGwgZm9yIGJvdGggYSBob2xpZGF5IGdhdGhlcmluZyBvciBhIGNvenkgd2Vla25pZ2h0IGRpbm5lci4gXCIsIFwiLi4vZGlzdC9sYXNhbmdhLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBuZXcgTWVudUl0ZW0oXCJMZW1vbiBGZXR0dWNjaW5lIEFsZnJlZG9cIiwgXCJDbGFzc2ljIGZldHR1Y2NpbmUgYWxmcmVkbyBnZXRzIGEgYnJpZ2h0IGFuZCBoZXJiYWNlb3VzIG1ha2VvdmVyLCB0aGFua3MgdG8gTWV5ZXIgbGVtb25zIGFuZCByb3NlbWFyeSwgaW4gdGhpcyBzdXBlciBzaW1wbGUsIHdvbmRlcmZ1bGx5IGNyZWFteSBwYXN0YSBkaXNoLlwiLCBcIi4uL2Rpc3QvZmV0dHVjaW5pLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBuZXcgTWVudUl0ZW0oXCJDYWp1biBDaGlja2VuIENhcmJvbmFyYVwiLCBcIkEgcXVpY2sgYW5kIGVhc3kgY2FqdW4gdGFrZSBvbiBjYXJib25hcmEgcGFzdGEgd2l0aCBjYWp1biBzZWFzb25lZCBjaGlja2VuIGFuZCBhIGxpZ2h0bHkgc2Vhc29uZWQgY2FyYm9uYXJhIHNhdWNlIVwiLCBcIi4uL2Rpc3QvY2FyYm9uYXJhLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTWVudUl0ZW1zIH07IiwiZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBuYXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbmF2SXRlbSA9IG5hdkxpc3RbaV07XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke25hdkl0ZW19YCk7XHJcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYXZJdGVtO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lclwiKTtcclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXN0XCIpXHJcblxyXG4gICAgbmF2RWwuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkVsKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBhZ2VMb2FkIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXJNZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5wYWdlTG9hZCgpO1xyXG5ob21lKCk7XHJcblxyXG5jb25zdCBob21lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0hvbWVcIik7XHJcbmNvbnN0IG1lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTWVudVwiKTtcclxuY29uc3QgY29udGFjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDb250YWN0XCIpO1xyXG5cclxuZnVuY3Rpb24gaG9tZUhhbmRsZXIoKSB7XHJcbiAgICBob21lKCk7ICBcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudWhhbmRsZXIoKSB7XHJcbiAgICByZW5kZXJNZW51SXRlbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdHNIYW5kbGVyKCkge1xyXG4gICAgY29udGFjdCgpO1xyXG59XHJcblxyXG5ob21lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVIYW5kbGVyKTtcclxubWVudUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51aGFuZGxlcik7XHJcbmNvbnRhY3RFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdHNIYW5kbGVyKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==