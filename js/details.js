import { elements } from "./helpers.js";
import { menu } from "./db.js";

console.log(window.location);

const searchParams = new URLSearchParams(window.location.search);

const paramId = searchParams.get("id");

console.log(searchParams);

const product = menu.find((item) => item.id === Number(paramId));

elements.outlet.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
           <a href="/"><i class="bi bi-house fs-1"></i> </a>
           <div>Homepage / ${
             product.category
           } / ${product.title.toLowerCase()}</div>
      </div>
      <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
      <div class="d-flex align-items-center justify-content-center">
           <img src="${
             product.img
           }" style="max-width: 500px" class="img-fluid shadow rounded"/>
      </div>
      <div>
        <h3 class="my-5">
          Item Category: <span class="text-success">${product.category}</span>
        </h3>
        <h3 class="my-5">
          Item Price: <span class="text-success">${product.price} Eur</span>
        </h3>
      </div>
      <p class="fs-3">
        ${product.desc}
      </p>
`;
