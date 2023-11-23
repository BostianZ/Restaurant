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


export { pageLoad }