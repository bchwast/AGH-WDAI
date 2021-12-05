let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.getElementById("name-container").innerHTML = prompt("Podaj imię:", "Harold");
})
