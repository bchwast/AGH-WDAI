fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let a = document.getElementById("a");
                a.innerHTML = "<h1>Miasta Małopolski</h1>";
                a.innerHTML += "<p>" + data.filter(city => city.province === "małopolskie").map(city => city.name).join(", ") + "</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })

fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let b = document.getElementById("b");
                b.innerHTML = "<h1>Miasta posiadające w swojej nazwie dwa znaki 'a'</h1>";
                b.innerHTML += "<p>" + data.filter(city => /.*([Aa]).*a.*/.test(city.name)).map(city => city.name).join(", ") + "</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })

fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let c = document.getElementById("c");
                c.innerHTML = "<h1>Piąte pod kątem gęstości zaludnienia miasto w Polsce</h1>";
                c.innerHTML += "<p>" + data.sort((a, b) => b.dentensity - a.dentensity).map(city => city.name)[4] + "</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })

fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let d = document.getElementById("d");
                d.innerHTML = "<h1>Dla wszystkich miast powyżej 100000 mieszkańców dodać (na kóncu) city do nazwy</h1>";
                d.innerHTML += "<p>" + data.map(city => {
                    if (city.people > 100000) {
                        return city.name + "city";
                    }
                    else {
                        return city.name;
                    }
                }).join(", ") + "</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })

fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let e = document.getElementById("e");
                e.innerHTML = "<h1>Wyliczyć czy więcej jest miast powyżej 80000 mieszkańców czy poniżej wraz z informacją o\n" +
                    "ich liczbie.</h1>";
                let more = data.reduce((acc, city) => {
                    if (city.people > 80000) return acc + 1;
                    else return acc;
                }, 0)
                let less = data.reduce((acc, city) => {
                    if (city.people < 80000) return acc + 1;
                    else return acc;
                }, 0)
                e.innerHTML += "<p>Miast o liczbie mieszkańców powyżej 80000 jest " + more + "</p>"
                    + "<p>Miast o liczbie mieszkańców poniżej 80000 jest " + less + "</p>"
                    + "<p>Więcej jest miast o liczbie mieszkańców " + (more > less ? "większej" : "mniejszej") +
                    " niż 80000</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })

fetch("http://localhost:3000/cities")
    .then((response) => {
        response.json()
            .then((data) => {
                let f = document.getElementById("f");
                f.innerHTML = "<h1>Średnia powierzchnia miast zaczynających się na literkę \"p\"</h1>";
                let amm = data.reduce((acc, city) => {
                    if ((/^P.*/).test(city.name)) return acc + 1;
                    else return acc;
                }, 0)
                let avg = data.reduce((acc, city) => {
                    if ((/^P.*/).test(city.name)) return acc + city.area;
                    else return acc;
                }, 0) / amm;
                f.innerHTML += "<p>" + avg + "</p>";
            })
    })
    .catch((error) => {
        alert("An error has occurred!");
        console.error(error);
    })





