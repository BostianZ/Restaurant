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

export { home }