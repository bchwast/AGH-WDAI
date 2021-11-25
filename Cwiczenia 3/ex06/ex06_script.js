let usersList = document.getElementsByClassName("user");

for (let i = 0; i < usersList.length; i++) {
    let button = document.createElement("div");
    button.className = "remove";
    button.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";
    usersList[i].appendChild(button);
}

let remove = document.getElementsByClassName("remove");

for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function addPerson() {
    console.log("hi");
    let users = document.getElementById("users-container");
    let entry = document.createElement("div");
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "") {
        alert("Podaj imię i nazwisko");
    }
    else if (! /[A-Z][a-z]*[ ][A-Z][a-z]*$/.test(name)){
        alert("Błędne dane w polu imię i nazwisko!");
        document.getElementById("name").value = "";
    }
    else if (phone === "") {
        alert("Podaj numer telefonu");
    }
    else if (! /[0-9]{9}/.test(phone)) {
        alert("Błędne dane w polu nr telefonu!");
        document.getElementById("phone").value = "";
    }
    else {
        let data = document.createElement("div");
        let ename = document.createElement("h4");
        let ephone = document.createElement("p");
        let button = document.createElement("div");

        entry.className = "user";
        data.className = "data";
        ename.className = "name";
        ephone.className = "phone";
        button.className = "remove";

        ename.innerText = name;
        ephone.innerText = phone;
        button.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";

        data.appendChild(ename);
        data.appendChild(ephone);
        entry.appendChild(data);
        entry.appendChild(button);
        users.appendChild(entry);

        for (let i = 0; i < remove.length; i++) {
            remove[i].onclick = function() {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    }
}