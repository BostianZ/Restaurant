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

export { home }