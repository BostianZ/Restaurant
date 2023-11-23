function contact() {
    const content = document.querySelector("#content");
    const divEl = document.createElement("div");

    content.innerHTML = ""

    divEl.textContent = "Contact: thisisfake@fakeemail.com"
    content.appendChild(divEl);
}

export { contact }