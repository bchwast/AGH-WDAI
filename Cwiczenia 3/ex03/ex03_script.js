function addEl() {
    let text = document.createTextNode(prompt("Type something:", "sample text"));
    let node = document.createElement("div")
    node.appendChild(text);
    node.className = "el";


    let container = document.getElementById("container");
    container.appendChild(node);
}

function remEl() {
    let container = document.getElementById("container");
    container.removeChild(container.children[0]);
}