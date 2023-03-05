const tbody = document.getElementById("tbody");

/* use the Fetch API to retrieve data from a server 
and display it in an HTML table using JavaScript */
get();

function get() {
    tbody.innerHTML = "";
    fetch("http://localhost:3000/rapinatori")
    .then((Response) => (Response.json()))
    .then((data) => {
        data.forEach(element => {
            // print the elements for debug purpose
            console.log(element);

            // create the element node(a row and its contents)
            const tr = document.createElement("tr");
            const tdNome = document.createElement("td");
            const tdGenere = document.createElement("td");
            const tdNota = document.createElement("td");
            const tdButtonM = document.createElement("td");
            const tdButtonE = document.createElement("td");

            // append the element node as the last child of an element
            // append the [row] to the [body]
            tbody.appendChild(tr);
            tr.appendChild(tdNome);
            tr.appendChild(tdGenere);
            tr.appendChild(tdNota);
            tr.appendChild(tdButtonM);
            tr.appendChild(tdButtonE);

            
            tdNome.innerHTML = element.nome;
            tdGenere.innerHTML = element.genere;
            tdNota.innerHTML = element.nota;
            tdButtonM.innerHTML = "modifica";
            tdButtonE.innerHTML = "elimina";
        });
    });
}
