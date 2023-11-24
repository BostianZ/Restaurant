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

export { renderMenuItems };