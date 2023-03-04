const version = 1.0
console.log(version);

const tbody = document.getElementById("tbodyAPI");
rendertable();

function rendertable() {
  tbody.innerHTML = "";

  fetch("http://localhost:3000/posts")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        const tr = document.createElement("tr");
        const tdNome = document.createElement("td");
        const tdIngredienti = document.createElement("td");
        const tdtCottura = document.createElement("td");
        const tdPorzioni = document.createElement("td");
        const tdImmagine = document.createElement("td");
        //creare un td per i buttons
        //tdElimina => buttonElimina
        const tdButton = document.createElement("td");

        const buttonElimina = document.createElement("button");
        const buttonModifica = document.createElement("button");
        buttonModifica.addEventListener("click", () => editRicetta(element.id));

        buttonElimina.classList.add("btn");
        buttonElimina.classList.add("btn-primary");
        buttonModifica.classList.add("btn");
        buttonModifica.classList.add("btn-primary");

        tbody.appendChild(tr);
        tr.appendChild(tdButton);
        tdButton.appendChild(buttonElimina);
        tdButton.appendChild(buttonModifica);
        tr.appendChild(tdNome);
        tr.appendChild(tdIngredienti);
        tr.appendChild(tdtCottura);
        tr.appendChild(tdPorzioni);
        tr.appendChild(tdImmagine);

        console.log(element);
        buttonElimina.innerHTML = "elimina";
        buttonModifica.innerHTML = "modifica";
        tdNome.innerHTML = element.nome;
        tdIngredienti.innerHTML = element.ingredienti;
        tdtCottura.innerHTML = element.tcottura;
        tdPorzioni.innerHTML = element.porzioni;
        tdImmagine.innerHTML = element.immagine;
      });
    });
}

function addRicetta() {
  rendertable();
  const nome = document.getElementById("nome");
  const ingredienti = document.getElementById("ingredienti");
  const tcottura = document.getElementById("tcottura");
  const porzioni = document.getElementById("porzioni");
  const immagine = document.getElementById("immagine");

  let ricetta = {
    nome: nome.value,
    ingredienti: ingredienti.value,
    tcottura: tcottura.value,
    porzioni: porzioni.value,
    immagine: immagine.value,
  };

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ricetta),
  });

  titolo.value = "";
  autore.value = "";
  testo.value = "";
  immagine.value = "";
}

function editRicetta(id) {
  console.log(id);
}