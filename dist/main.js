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
function home() {
    const content = document.querySelector("#content");
    const divEl = document.createElement("div");
    const headingEl = document.createElement("h2");
    const paraEl = document.createElement("p")

    content.innerHTML = ""

    headingEl.textContent = "Heading here"
    paraEl.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
   
    divEl.appendChild(headingEl);
    divEl.appendChild(paraEl);
    content.appendChild(divEl);
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
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
    
    renderItem() {
      const contentEl = document.querySelector("#content");
      const titleEl = document.createElement("h2");
      const descriptEl = document.createElement("p");
      titleEl.textContent = this.title;
      descriptEl.textContent = this.description;
      
      contentEl.appendChild(titleEl);
      contentEl.appendChild(descriptEl);
    }

  }
  
function renderMenuItems() {
    const contentEl = document.querySelector("#content");
    contentEl.innerHTML = "";

    new MenuItem("Hello", "World").renderItem();
    new MenuItem("Hello", "World").renderItem();
    new MenuItem("Hello", "World").renderItem();
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
    const banner = document.querySelector("#banner");

    for (let i = 0; i < navList.length; i++) {
        let navItem = navList[i];
        let li = document.createElement("li");
        li.setAttribute("id", `${navItem}`);
        li.textContent = navItem;
        li.style.flex = "1";
        li.style.border = "1px solid black"
        li.style.padding = "8px 0";
        li.style.textAlign = "center";
        ul.appendChild(li);
    }

    body.style.padding = "0";
    body.style.margin = "0";

    content.style.width = "60vw"
    content.style.margin = "0 auto";

    header.style.display = "flex";
    header.style.justifyContent = "center";

    navEl.style.width = "40%";
    navEl.style.display = "flex";

    ul.style.listStyle = "none";
    ul.style.display = "flex";
    ul.style.justifyContent = "center";
    ul.style.flex = "1";
    ul.style.padding = "0";
    ul.style.margin = "32px 0";
    ul.style.gap = "12px";

    banner.style.background = "url(./image01.jpg)";
    banner.style.backgroundRepeat = "no-repeat";
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center center";
    banner.style.height = "300px";   

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDUjtBQUNLO0FBQ007QUFDekM7QUFDQSxtREFBUTtBQUNSLDJDQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgZGl2RWwudGV4dENvbnRlbnQgPSBcIkNvbnRhY3Q6IHRoaXNpc2Zha2VAZmFrZWVtYWlsLmNvbVwiXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkVsKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGFjdCB9IiwiZnVuY3Rpb24gaG9tZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBoZWFkaW5nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBwYXJhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGhlYWRpbmdFbC50ZXh0Q29udGVudCA9IFwiSGVhZGluZyBoZXJlXCJcclxuICAgIHBhcmFFbC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gXHJcbiAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBcclxuICAgIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBcclxuICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYFxyXG4gICBcclxuICAgIGRpdkVsLmFwcGVuZENoaWxkKGhlYWRpbmdFbCk7XHJcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChwYXJhRWwpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZFbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGhvbWUgfSIsImNsYXNzIE1lbnVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVySXRlbSgpIHtcclxuICAgICAgY29uc3QgY29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHRpdGxlRWwudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG4gICAgICBkZXNjcmlwdEVsLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgXHJcbiAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcclxuICAgICAgY29udGVudEVsLmFwcGVuZENoaWxkKGRlc2NyaXB0RWwpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtcygpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnRFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIG5ldyBNZW51SXRlbShcIkhlbGxvXCIsIFwiV29ybGRcIikucmVuZGVySXRlbSgpO1xyXG4gICAgbmV3IE1lbnVJdGVtKFwiSGVsbG9cIiwgXCJXb3JsZFwiKS5yZW5kZXJJdGVtKCk7XHJcbiAgICBuZXcgTWVudUl0ZW0oXCJIZWxsb1wiLCBcIldvcmxkXCIpLnJlbmRlckl0ZW0oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTWVudUl0ZW1zIH07IiwiZnVuY3Rpb24gcGFnZUxvYWQoKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICBjb25zdCBuYXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFubmVyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBuYXZJdGVtID0gbmF2TGlzdFtpXTtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7bmF2SXRlbX1gKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IG5hdkl0ZW07XHJcbiAgICAgICAgbGkuc3R5bGUuZmxleCA9IFwiMVwiO1xyXG4gICAgICAgIGxpLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCJcclxuICAgICAgICBsaS5zdHlsZS5wYWRkaW5nID0gXCI4cHggMFwiO1xyXG4gICAgICAgIGxpLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHJcbiAgICBjb250ZW50LnN0eWxlLndpZHRoID0gXCI2MHZ3XCJcclxuICAgIGNvbnRlbnQuc3R5bGUubWFyZ2luID0gXCIwIGF1dG9cIjtcclxuXHJcbiAgICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuXHJcbiAgICBuYXZFbC5zdHlsZS53aWR0aCA9IFwiNDAlXCI7XHJcbiAgICBuYXZFbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgdWwuc3R5bGUubGlzdFN0eWxlID0gXCJub25lXCI7XHJcbiAgICB1bC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB1bC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICB1bC5zdHlsZS5mbGV4ID0gXCIxXCI7XHJcbiAgICB1bC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICB1bC5zdHlsZS5tYXJnaW4gPSBcIjMycHggMFwiO1xyXG4gICAgdWwuc3R5bGUuZ2FwID0gXCIxMnB4XCI7XHJcblxyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCguL2ltYWdlMDEuanBnKVwiO1xyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xyXG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyIGNlbnRlclwiO1xyXG4gICAgYmFubmVyLnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjsgICBcclxuXHJcbiAgICBuYXZFbC5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2RWwpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcGFnZUxvYWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlbG9hZFwiO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXHJcbmltcG9ydCB7IHJlbmRlck1lbnVJdGVtcyB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbnBhZ2VMb2FkKCk7XHJcbmhvbWUoKTtcclxuXHJcbmNvbnN0IGhvbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjSG9tZVwiKTtcclxuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNNZW51XCIpO1xyXG5jb25zdCBjb250YWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvbnRhY3RcIik7XHJcblxyXG5mdW5jdGlvbiBob21lSGFuZGxlcigpIHtcclxuICAgIGhvbWUoKTsgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51aGFuZGxlcigpIHtcclxuICAgIHJlbmRlck1lbnVJdGVtcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0c0hhbmRsZXIoKSB7XHJcbiAgICBjb250YWN0KCk7XHJcbn1cclxuXHJcbmhvbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZUhhbmRsZXIpO1xyXG5tZW51RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVoYW5kbGVyKTtcclxuY29udGFjdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0c0hhbmRsZXIpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9