let add = document.getElementById("add");
let rem = document.getElementById("rem");

add.addEventListener("click", () => {
    let text = document.createTextNode(prompt("Type something:", "sample text"));
    let node = document.createElement("div")
    node.appendChild(text);
    node.className = "el";


    let container = document.getElementById("container");
    container.appendChild(node);
})

rem.addEventListener("click", () => {
    let container = document.getElementById("container");
    container.removeChild(container.children[0]);
})
