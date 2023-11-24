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

export { renderMenuItems };