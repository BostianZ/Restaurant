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
  
function renderMenuItems() {
    const contentEl = document.querySelector("#content");
    contentEl.innerHTML = "";

    new MenuItem("Easy Homemade Lasagna", "This easy homemade lasagna is pure comfort food and absolutely delicious! The perfect recipe that works well for both a holiday gathering or a cozy weeknight dinner. ", "../dist/lasanga.jpg").renderItem();
    new MenuItem("Lemon Fettuccine Alfredo", "Classic fettuccine alfredo gets a bright and herbaceous makeover, thanks to Meyer lemons and rosemary, in this super simple, wonderfully creamy pasta dish.", "../dist/fettucini.jpg").renderItem();
    new MenuItem("Cajun Chicken Carbonara", "A quick and easy cajun take on carbonara pasta with cajun seasoned chicken and a lightly seasoned carbonara sauce!", "../dist/carbonara.jpg").renderItem();
    
}

export { renderMenuItems };