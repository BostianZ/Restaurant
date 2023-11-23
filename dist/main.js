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
    banner.style.width = "100%";


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




(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();

const homeEl = document.querySelector("#Home");
const menuEl = document.querySelector("#Menu");
const contactEl = document.querySelector("#Contact");

function homeHandler() {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();  
}

// function menuhandler() {
//     renderMenuItems();
// }

function contactsHandler() {
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
}

homeEl.addEventListener("click", homeHandler);
// menuEl.addEventListener("click", menuhandler);
contactEl.addEventListener("click", contactsHandler);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1I7QUFDSztBQUNuQztBQUNBLG1EQUFRO0FBQ1IsMkNBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGRpdkVsLnRleHRDb250ZW50ID0gXCJDb250YWN0OiB0aGlzaXNmYWtlQGZha2VlbWFpbC5jb21cIlxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZFbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QgfSIsImZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaGVhZGluZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgcGFyYUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBoZWFkaW5nRWwudGV4dENvbnRlbnQgPSBcIkhlYWRpbmcgaGVyZVwiXHJcbiAgICBwYXJhRWwudGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFxyXG4gICAgVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gXHJcbiAgICBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gXHJcbiAgICBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLmBcclxuICAgXHJcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChoZWFkaW5nRWwpO1xyXG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQocGFyYUVsKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2RWwpO1xyXG59XHJcblxyXG5leHBvcnQgeyBob21lIH0iLCJmdW5jdGlvbiBwYWdlTG9hZCgpIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgIGNvbnN0IG5hdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5uZXJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG5hdkl0ZW0gPSBuYXZMaXN0W2ldO1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtuYXZJdGVtfWApO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gbmF2SXRlbTtcclxuICAgICAgICBsaS5zdHlsZS5mbGV4ID0gXCIxXCI7XHJcbiAgICAgICAgbGkuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIlxyXG4gICAgICAgIGxpLnN0eWxlLnBhZGRpbmcgPSBcIjhweCAwXCI7XHJcbiAgICAgICAgbGkuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICBib2R5LnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG5cclxuICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBcIjYwdndcIlxyXG4gICAgY29udGVudC5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiO1xyXG5cclxuICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBoZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG5cclxuICAgIG5hdkVsLnN0eWxlLndpZHRoID0gXCI0MCVcIjtcclxuICAgIG5hdkVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICB1bC5zdHlsZS5saXN0U3R5bGUgPSBcIm5vbmVcIjtcclxuICAgIHVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVsLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgIHVsLnN0eWxlLmZsZXggPSBcIjFcIjtcclxuICAgIHVsLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgIHVsLnN0eWxlLm1hcmdpbiA9IFwiMzJweCAwXCI7XHJcbiAgICB1bC5zdHlsZS5nYXAgPSBcIjEycHhcIjtcclxuXHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKC4vaW1hZ2UwMS5qcGcpXCI7XHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XHJcbiAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXIgY2VudGVyXCI7XHJcbiAgICBiYW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIzMDBweFwiOyAgIFxyXG4gICAgYmFubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcblxyXG5cclxuICAgIG5hdkVsLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZFbCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBwYWdlTG9hZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gXCIuL3BhZ2Vsb2FkXCI7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCJcclxuXHJcbnBhZ2VMb2FkKCk7XHJcbmhvbWUoKTtcclxuXHJcbmNvbnN0IGhvbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjSG9tZVwiKTtcclxuY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNNZW51XCIpO1xyXG5jb25zdCBjb250YWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvbnRhY3RcIik7XHJcblxyXG5mdW5jdGlvbiBob21lSGFuZGxlcigpIHtcclxuICAgIGhvbWUoKTsgIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBtZW51aGFuZGxlcigpIHtcclxuLy8gICAgIHJlbmRlck1lbnVJdGVtcygpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBjb250YWN0c0hhbmRsZXIoKSB7XHJcbiAgICBjb250YWN0KCk7XHJcbn1cclxuXHJcbmhvbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZUhhbmRsZXIpO1xyXG4vLyBtZW51RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVoYW5kbGVyKTtcclxuY29udGFjdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0c0hhbmRsZXIpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9