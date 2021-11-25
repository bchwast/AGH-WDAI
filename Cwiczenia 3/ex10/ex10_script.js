function deleteEmpty(obj) {
    for (let i in obj) {
        if (obj[i].constructor === Array) {
            delete obj[i];
        }
    }
    return obj;
}

function deepMerge(objA, objB) {
   for (let i in objB) {
       if (i in objA) {
           for (let j in objB[i]["nazwa"]) {
               if (! objA[i]["nazwa"].includes(objB[i]["nazwa"][j])) {
                   objA[i]["nazwa"].push(objB[i]["nazwa"][j]);
               }
           }
       }
       else {
           objA[i] = objB[i];
       }
   }
    return objA;
}

function createCounter(prod) {
    let counter = {};
    for (let i in prod) {
        counter[i] = 0;
    }
    return counter;
}

function show(toMain) {
    let main = document.getElementById("main-container");
    let prods = document.createElement("div");
    for (let prod of toMain) {
        let el = document.createElement("p");
        el.innerText = prod;
        prods.appendChild(el);
    }
    main.replaceChildren(prods);
}

async function loadA() {
    const responseA = await fetch("http://localhost:3000/produktyA");
    let prodA = await responseA.json();
    prodA = deleteEmpty(prodA);

    const responseB = await fetch("http://localhost:3001/produktyB");
    let prodB = await responseB.json();
    prodB = deleteEmpty(prodB);

    const responseC = await fetch("http://localhost:3002/produktyC");
    let prodC = await responseC.json();
    prodC = deleteEmpty(prodC);

    let prod = deepMerge(prodA, prodB);
    prod = deepMerge(prod, prodC);
    let counter = createCounter(prod);
    let toMain = [];

    let menu = document.getElementById("menu-container");
    for (let i in prod) {
        let categoryWrapper = document.createElement("div");
        let category = document.createElement("div");
        let categorySwitch = document.createElement("input");
        let categorySwitchL = document.createElement("label");
        let categoryIndicator = document.createElement("div");
        let categoryDesc = document.createElement("p");
        let productContainer = document.createElement("div");
        category.className = "category";
        categorySwitch.className = "category-button";
        categorySwitch.id = "cat-" + i;
        categorySwitch.type = "checkbox";
        categorySwitchL.className = "category-label";
        categorySwitchL.htmlFor = "cat-" + i;
        categorySwitchL.innerHTML = "<i class=\"fas fa-chevron-right\"></i>";
        categoryIndicator.className = "category-indicator";
        categoryDesc.innerText = i;
        productContainer.className = "product-container";

        categorySwitch.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                productContainer.style.display = "flex";
                categorySwitchL.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
            }
            else {
                productContainer.style.display = "none";
                categorySwitchL.innerHTML = "<i class=\"fas fa-chevron-right\"></i>";
            }
        });

        for (let j of prod[i]["nazwa"]) {
            let product = document.createElement("div");
            let productSwitch = document.createElement("input");
            let productSwitchL = document.createElement("label");
            let productDesc = document.createElement("p");
            product.className = "product";
            productSwitch.className = "product-button";
            productSwitch.id = "prod-" + j;
            productSwitch.type = "checkbox";
            productSwitchL.className = "product-label";
            productSwitchL.htmlFor = "prod-" + j;
            productSwitchL.id = "prodL-" + j;
            productDesc.innerText = j;

            productSwitch.addEventListener("change", (event) => {
                if (event.currentTarget.checked) {
                    productSwitchL.innerHTML = "<i class=\"fas fa-check\"></i>";
                    productSwitchL.style.backgroundColor = "deeppink";
                    categoryIndicator.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    categoryIndicator.style.backgroundColor = "deeppink";
                    counter[i]++;
                    toMain.push(j);
                    show(toMain);
                    if (counter[i] === prod[i]["nazwa"].length) {
                        categoryIndicator.innerHTML = "<i class=\"fas fa-check\"></i>";
                        categorySwitch.checked = true;
                    }
                }
                else {
                    productSwitchL.innerHTML = "";
                    productSwitchL.style.backgroundColor = "white";
                    counter[i]--;
                    let index = toMain.indexOf(j);
                    toMain.splice(index, 1);
                    show(toMain);
                    if (counter[i] > 0) {
                        categoryIndicator.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    }
                    else {
                        categoryIndicator.innerHTML = "";
                        categoryIndicator.style.backgroundColor = "white";
                        categorySwitch.checked = false;
                    }
                }
            })

            product.appendChild(productSwitch);
            product.appendChild(productSwitchL);
            product.appendChild(productDesc);
            productContainer.appendChild(product);
        }

        category.appendChild(categorySwitch);
        category.appendChild(categorySwitchL);
        category.appendChild(categoryIndicator);
        category.appendChild(categoryDesc);
        categoryWrapper.appendChild(category);
        categoryWrapper.appendChild(productContainer);
        menu.appendChild(categoryWrapper);
    }

}

loadA();
