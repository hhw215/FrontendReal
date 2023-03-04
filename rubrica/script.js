const tbody = document.getElementById('bodyRubrica')
rendertable();
function rendertable() {
    fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {


            const tr = document.createElement('tr')

            const tdNome = document.createElement('td')
            const tdCognome = document.createElement('td')
            const tdTelefono = document.createElement('td')
            const tdModElimina = document.createElement('td')
            const tdButtonModifica = document.createElement('button')
            const tdButtonElimina = document.createElement('button')
            // elimina
            tdButtonElimina.addEventListener("click", () => Elimina(element.id));
            // modifica
            var form = document.createElement('form');
            var inputNome = document.createElement('inputNome');
            const inputCognome = document.createElement('inputCognome');
            const inputTelefono = document.createElement('inputTelefono');

            var submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.innerText = "Submit";

            tdButtonModifica.addEventListener("click", (element) => {
                document.body.appendChild(form);
                form.appendChild(inputNome);
                form.appendChild(inputCognome);
                form.appendChild(inputTelefono);
                form.appendChild(submitBtn);
                document.body.appendChild(form);
                Modifica(element.id);
            });

            tbody.appendChild(tr)
            tr.appendChild(tdNome)
            tr.appendChild(tdCognome)
            tr.appendChild(tdTelefono)
            tr.appendChild(tdModElimina)
            tdModElimina.appendChild(tdButtonModifica)
            tdModElimina.appendChild(tdButtonElimina)

            tdButtonModifica.classList.add('btn')
            tdButtonModifica.classList.add('btn-warning')

            tdButtonElimina.classList.add('btn')
            tdButtonElimina.classList.add('btn-danger')


            tdNome.innerHTML = element.Nome
            tdCognome.innerHTML = element.Cognome
            tdTelefono.innerHTML = element.Telefono

            tdButtonModifica.innerHTML = "Modifica"
            tdButtonElimina.innerHTML = "Elimina"
        });
    });
}

function Elimina(id) {
    fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => {
    console.error(error);
    });
}

function Modifica(id) {
    rendertable();
    const Nome = document.getElementById("Nome");
    const Cognome = document.getElementById("Cognome");
    const Telefono = document.getElementById("Telefono");
    
    let persona = {
        Nome: Nome.value,
        Cognome: Cognome.value,
        Telefono: Telefono.value
    };

    fetch('http://localhost:3000/posts/' + id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(persona)
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => {
    console.error(error);
    });
}

