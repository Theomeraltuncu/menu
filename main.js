import { buttonsData, menu } from "./js/db.js";
import { elements } from "./js/helpers.js";

//Functions

const renderMenuItems = (menuItems) => {
  console.log(menuItems);
  let menuHTML = menuItems.map(
    (item) =>
      `
      <div class="col-md-6 col-lg-4 "> 
    <a href="productDetail.html?id=${item.id}" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2" id="card">
    <img src="${item.img}" alt="" class="rounded shadow" >
    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${item.price} Eur </p>
        </div>
        <p>${item.desc}</p>
    </div>
</a>
</div>
    `
  );

  menuHTML = menuHTML.join("");
  elements.menuArea.innerHTML = menuHTML;
  elements.menuArea.innerHTML = `<div class="row justify-content-center gap-4 mt-5 flex-start">${menuHTML}</div>`;
};

const searchCategory = (e) => {
  console.log(e.target.dataset.category);
  const category = e.target.dataset.category;

  const filteredMenu = menu.filter((item) => item.category === category);
  if (category == "undefined") {
    return;
  } else if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filteredMenu);
  }
  renderButtons(category);
};

const renderButtons = (active) => {
  // if(category == "undefined"){
  //     return;
  // }
  elements.buttonsArea.innerHTML = "";

  buttonsData.forEach((btn) => {
    const buttonEle = document.createElement("button");

    buttonEle.className = "btn btn-outline-dark filter-btn";
    buttonEle.textContent = btn.text;
    buttonEle.dataset.category = btn.value;
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }
    elements.buttonsArea.appendChild(buttonEle);
  });
};

console.log(elements.buttonsArea);

//event listeners
document.addEventListener("DOMContentLoaded", renderButtons("all"));
document.addEventListener("DOMContentLoaded", renderMenuItems(menu));

elements.buttonsArea.addEventListener("click", searchCategory);
