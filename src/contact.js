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

export { contact }