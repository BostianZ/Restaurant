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

    content.innerHTML = ""

    divEl.textContent = "Contact: thisisfake@fakeemail.com"
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
        const headingEl = document.createElement("h2");
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

    new HomeContent("Location", "12345 Invisible street, Fake place, Real state").renderItem();
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

function menuHeading() {
    const content = document.querySelector("#content")
    const divEl = document.createElement("h1");
    divEl.textContent = "Menu";

    content.appendChild(divEl);
}
  
function renderMenuItems() {
    const contentEl = document.querySelector("#content");
    contentEl.innerHTML = "";
    menuHeading();

    new MenuItem("Hello", "World", "../dist/image01.jpg").renderItem();
    new MenuItem("Hello", "World", "../dist/image01.jpg").renderItem();
    new MenuItem("Hello", "World", "../dist/image01.jpg").renderItem();
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1I7QUFDSztBQUNNO0FBQ3pDO0FBQ0EsbURBQVE7QUFDUiwyQ0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkNBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGRpdkVsLnRleHRDb250ZW50ID0gXCJDb250YWN0OiB0aGlzaXNmYWtlQGZha2VlbWFpbC5jb21cIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZFbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QgfSIsImNsYXNzIEhvbWVDb250ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGhlYWRpbmcsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gaGVhZGluZztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySXRlbSgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgY29uc3QgcGFyYUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICAgIGhlYWRpbmdFbC50ZXh0Q29udGVudCA9IHRoaXMuaGVhZGluZztcclxuICAgICAgICBwYXJhRWwudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBkaXZFbC5hcHBlbmRDaGlsZChoZWFkaW5nRWwpO1xyXG4gICAgICAgIGRpdkVsLmFwcGVuZENoaWxkKHBhcmFFbCk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2RWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBob21lKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIG5ldyBIb21lQ29udGVudChcIlJlc3RhdXJhbnQgTmFtZVwiLCBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgXHJcbiAgICBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBcclxuICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gXHJcbiAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLmApLnJlbmRlckl0ZW0oKTtcclxuXHJcbiAgICBuZXcgSG9tZUNvbnRlbnQoXCJIb3Vyc1wiLCBcIldlIGFyZSBvcGVuIE0tRiBmcm9tIDExYW0gdG8gMTFwbS4gQ2xvc2VkIG9uIFNhdHVyZGF5cyBhbmQgU3VuZGF5cy5cIikucmVuZGVySXRlbSgpO1xyXG5cclxuICAgIG5ldyBIb21lQ29udGVudChcIkxvY2F0aW9uXCIsIFwiMTIzNDUgSW52aXNpYmxlIHN0cmVldCwgRmFrZSBwbGFjZSwgUmVhbCBzdGF0ZVwiKS5yZW5kZXJJdGVtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGhvbWUgfSIsImNsYXNzIE1lbnVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVySXRlbSgpIHtcclxuICAgICAgY29uc3QgY29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5pbWFnZSk7XHJcbiAgICAgIGRpdkVsLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcblxyXG4gICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcclxuICAgICAgZGVzY3JpcHRFbC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICAgIFxyXG4gICAgICBkaXZFbC5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcclxuICAgICAgZGl2RWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRFbCk7XHJcbiAgICAgIGRpdkVsLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChkaXZFbCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIG1lbnVIZWFkaW5nKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxyXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBkaXZFbC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2RWwpO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtcygpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnRFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWVudUhlYWRpbmcoKTtcclxuXHJcbiAgICBuZXcgTWVudUl0ZW0oXCJIZWxsb1wiLCBcIldvcmxkXCIsIFwiLi4vZGlzdC9pbWFnZTAxLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBuZXcgTWVudUl0ZW0oXCJIZWxsb1wiLCBcIldvcmxkXCIsIFwiLi4vZGlzdC9pbWFnZTAxLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBuZXcgTWVudUl0ZW0oXCJIZWxsb1wiLCBcIldvcmxkXCIsIFwiLi4vZGlzdC9pbWFnZTAxLmpwZ1wiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTWVudUl0ZW1zIH07IiwiZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBuYXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbmF2SXRlbSA9IG5hdkxpc3RbaV07XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke25hdkl0ZW19YCk7XHJcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYXZJdGVtO1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lclwiKTtcclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXN0XCIpXHJcblxyXG4gICAgbmF2RWwuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkVsKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBhZ2VMb2FkIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZWxvYWRcIjtcclxuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIlxyXG5pbXBvcnQgeyByZW5kZXJNZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5wYWdlTG9hZCgpO1xyXG5ob21lKCk7XHJcblxyXG5jb25zdCBob21lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0hvbWVcIik7XHJcbmNvbnN0IG1lbnVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTWVudVwiKTtcclxuY29uc3QgY29udGFjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDb250YWN0XCIpO1xyXG5cclxuZnVuY3Rpb24gaG9tZUhhbmRsZXIoKSB7XHJcbiAgICBob21lKCk7ICBcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudWhhbmRsZXIoKSB7XHJcbiAgICByZW5kZXJNZW51SXRlbXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdHNIYW5kbGVyKCkge1xyXG4gICAgY29udGFjdCgpO1xyXG59XHJcblxyXG5ob21lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVIYW5kbGVyKTtcclxubWVudUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51aGFuZGxlcik7XHJcbmNvbnRhY3RFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udGFjdHNIYW5kbGVyKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==