const tbody = document.getElementById("tbody");
const formContainer = document.getElementById("form-container");
const myForm = document.getElementById("my-form");
const submitform = document.getElementById("submitform");

/* use the Fetch API to retrieve data from a server 
and display it in an HTML table using JavaScript */
show();

function show() {
    tbody.innerHTML = "";
    fetch("http://localhost:3000/rubrica")
    .then((Response) => (Response.json()))
    .then((data) => { 
        data.forEach(element => {
            // print the elements for debug purpose
            console.log(element);
            console.log(element.id);
            // create the element node(a row and its contents)
            const tr = document.createElement("tr");
            const tdNome = document.createElement("td");
            const tdCognome = document.createElement("td");
            const tdGenere = document.createElement("td");
            const tdEmail = document.createElement("td");
            const tdCell = document.createElement("td");
            const tdModifica = document.createElement("td");
            const tdModificaButton = document.createElement("button");
            tdModificaButton.addEventListener("click", (event) => {
                put(element.id)});

            const tdElimina = document.createElement("td");
            const tdEliminaButton = document.createElement("button");
            tdEliminaButton.addEventListener("click", (event) => {
                delet(element.id)});
            

            // append the element node as the last child of an element
            // append the [row] to the [body]
            tbody.appendChild(tr);
            tr.appendChild(tdNome);
            tr.appendChild(tdCognome);
            tr.appendChild(tdGenere);
            tr.appendChild(tdEmail);
            tr.appendChild(tdCell);
            tr.appendChild(tdModifica);
            tdModifica.appendChild(tdModificaButton);
            tr.appendChild(tdElimina);
            tdElimina.appendChild(tdEliminaButton);

            // set the html content for an element
            tdNome.innerHTML = element.nome;
            tdCognome.innerHTML = element.cognome;
            tdGenere.innerHTML = element.genere;
            tdEmail.innerHTML = element.email;
            tdCell.innerHTML = element.cell;
            tdModificaButton.innerHTML = "modifica";
            tdEliminaButton.innerHTML = "elimina";
        });
    });
}

function post() {
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const genere = document.getElementById("genere");
    const email = document.getElementById("email");
    const cell = document.getElementById("cell");

    let person = {
        nome: nome.value,
        cognome: cognome.value,
        genere: genere.value,
        email: email.value,
        cell: cell.value
    }

    fetch("http://localhost:3000/rubrica", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    })
    .then((Response) => (Response.json()))
    .then(person => console.log(person))
    .catch(error => console.error())
}

function put(rowID) {
    formContainer.style.display = "block";
    submitform.addEventListener("click", (event) => {
        const fnome = document.getElementById("formnome");
        const fcognome = document.getElementById("formcognome");
        const fgenere = document.getElementById("formgenere");
        const femail = document.getElementById("formemail");
        const fcell = document.getElementById("formcell");

        let person = {
            nome: fnome.value,
            cognome: fcognome.value,
            genere: fgenere.value,
            email: femail.value,
            cell: fcell.value
        }
        fetch("http://localhost:3000/rubrica" + "/" + rowID, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
        .then((Response) => (Response.JSON()))
        .then(show())
    });
}

function delet(rowID) {
    // find the rowID of the element
    
    // delete method
    fetch("http://localhost:3000/rubrica" + "/" + rowID, {
        method: "DELETE"
    })
    .then((Response) => (Response.json()))
    .then(rapinatore => console.log(element))
    .catch(error => console.error())

    show();

    console.log("rowID" + " deleted");
}