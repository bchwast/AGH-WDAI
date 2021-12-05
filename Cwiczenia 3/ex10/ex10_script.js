function toMap(json) {
    let map = new Map();
    for (let catObj of json) {
        let catName = Object.keys(catObj)[0];
        let catArray = catObj[Object.keys(catObj)[0]];
        if (catArray.length !== 0) {
            let prodArray = [];
            for (let prodObj of catArray) {
                let prodName = prodObj[Object.keys(prodObj)[0]];
                prodArray.push(prodName);
            }
            map.set(catName, prodArray);
        }
    }
    return map;
}

function deepMerge(prod1, prod2) {
    for (let name of prod2.keys()) {
        if (prod1.has(name)) {
            prod1.set(name, [...new Set([...prod1.get(name), ...prod2.get(name)])]);
            }
        else {
            prod1.set(name, prod2.get(name));
        }
    }
    return prod1;
}

function createCounter(prod) {
    let counter = new Map();
    for (let i of prod.keys()) {
        counter.set(i, 0);
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

async function site() {
    const responseA = await fetch("http://localhost:3000/produktyA");
    let objA = await responseA.json();
    let prodA = toMap(objA);

    const responseB = await fetch("http://localhost:3001/produktyB");
    let objB = await responseB.json();
    let prodB = toMap(objB);

    const responseC = await fetch("http://localhost:3002/produktyC");
    let objC = await responseC.json();
    let prodC = toMap(objC);

    let prod = deepMerge(prodA, prodB);
    prod = deepMerge(prod, prodC);

    let counter = createCounter(prod);
    let toMain = [];

    let menu = document.getElementById("menu-container");
    for (let i of prod.keys()) {
        let categoryWrapper = document.createElement("div");
        let category = document.createElement("div");
        let categorySwitch = document.createElement("input");
        let categorySwitchL = document.createElement("label");
        let categoryIndicator = document.createElement("input");
        let categoryIndicatorL = document.createElement("label");
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
        categoryIndicator.id = "cat-ind-" + i;
        categoryIndicator.type = "checkbox";
        categoryIndicatorL.className = "category-indicator-label";
        categoryIndicatorL.htmlFor = "cat-ind-" + i;
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

        for (let j of prod.get(i)) {
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
                    counter.set(i, counter.get(i) + 1);
                    productSwitchL.innerHTML = "<i class=\"fas fa-check\"></i>";
                    productSwitchL.style.backgroundColor = "deeppink";
                    categoryIndicatorL.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    categoryIndicatorL.style.backgroundColor = "deeppink";
                    toMain.push(j);
                    show(toMain);
                    if (counter.get(i) === prod.get(i).length) {
                        categoryIndicatorL.innerHTML = "<i class=\"fas fa-check\"></i>";
                    }
                }
                else {
                    if (counter.get(i) === prod.get(i).length) {
                        categoryIndicatorL.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    }
                    counter.set(i, counter.get(i) - 1);
                    productSwitchL.innerHTML = "";
                    productSwitchL.style.backgroundColor = "white";
                    let index = toMain.indexOf(j);
                    toMain.splice(index, 1);
                    show(toMain);
                    if (counter.get(i) === 0) {
                        categoryIndicatorL.style.backgroundColor = "white";
                        categoryIndicatorL.innerHTML = "";
                    }
                }

            })

            product.appendChild(productSwitch);
            product.appendChild(productSwitchL);
            product.appendChild(productDesc);
            productContainer.appendChild(product);
        }

        categoryIndicator.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                for (let j of prod.get(i)) {
                    if (! document.getElementById("prod-" + j).checked) {
                        document.getElementById("prod-" + j).click();
                    }
                }
            }
            else {
                for (let j of prod.get(i)) {
                    if (document.getElementById("prod-" + j).checked) {
                        document.getElementById("prod-" + j).click();
                    }
                }
            }
        })

        category.appendChild(categorySwitch);
        category.appendChild(categorySwitchL);
        category.appendChild(categoryIndicator);
        category.appendChild(categoryIndicatorL);
        category.appendChild(categoryDesc);
        categoryWrapper.appendChild(category);
        categoryWrapper.appendChild(productContainer);
        menu.appendChild(categoryWrapper);
    }
}

site();
