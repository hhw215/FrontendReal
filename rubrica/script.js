const tbody = document.getElementById("tbody");

/* use the Fetch API to retrieve data from a server 
and display it in an HTML table using JavaScript */
show();

function show() {
    tbody.innerHTML = "";
    fetch("http://localhost:3000/rapinatori")
    .then((Response) => (Response.json()))
    .then((data) => { 
        data.forEach(element => {
            // print the elements for debug purpose
            console.log(element);
            console.log(element.id);
            // create the element node(a row and its contents)
            const tr = document.createElement("tr");
            const tdNome = document.createElement("td");
            const tdGenere = document.createElement("td");
            const tdNota = document.createElement("td");
            const tdButtonM = document.createElement("td");
            const tdButtonMButton = document.createElement("button");
            tdButtonMButton.addEventListener("click", put(element.id));
            const tdButtonE = document.createElement("td");
            const tdButtonEButton = document.createElement("button");
            tdButtonEButton.addEventListener("click", (event) => {
                console.log("element.id " + "clicked");
                delet(element.id)});

            // append the element node as the last child of an element
            // append the [row] to the [body]
            tbody.appendChild(tr);
            tr.appendChild(tdNome);
            tr.appendChild(tdGenere);
            tr.appendChild(tdNota);
            tr.appendChild(tdButtonM);
            tdButtonM.appendChild(tdButtonMButton);
            tr.appendChild(tdButtonE);
            tdButtonE.appendChild(tdButtonEButton);

            // set the html content for an element
            tdNome.innerHTML = element.nome;
            tdGenere.innerHTML = element.genere;
            tdNota.innerHTML = element.nota;
            tdButtonMButton.innerHTML = "modifica";
            //tdButtonMButton.setAttribute("id", element.id);
            tdButtonEButton.innerHTML = "elimina";
            //tdButtonEButton.setAttribute("id", element.id);
        });
    });
}

function post() {
    const nome = document.getElementById("nome");
    const genere = document.getElementById("genere");
    const nota = document.getElementById("nota");

    let rapinatore = {
        nome: nome.value,
        genere: genere.value,
        nota: nota.value
    }

    fetch("http://localhost:3000/rapinatori", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rapinatore)
    })
    .then((Response) => (Response.json()))
    .then(rapinatore => console.log(rapinatore))
    .catch(error => console.error())

    show();
}

function put(element) {

}

function delet(rowID) {
    // find the rowID of the element
    
    // delete method
    fetch("http://localhost:3000/rapinatori" + "/" + rowID, {
        method: "DELETE"
    })
    .then((Response) => (Response.json()))
    .then(rapinatore => console.log(element))
    .catch(error => console.error())

    show();

    console.log("rowID" + " deleted");
}