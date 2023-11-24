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


export { pageLoad }