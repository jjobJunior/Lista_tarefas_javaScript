let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-Add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;
    let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
          <i
          onclick="marcarTarefa(${contador})"
          id="icons${contador}"
            class="material-symbols-outlined"
          >
            radio_button_unchecked
          </i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
          ${valorInput}
        </div>
        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <i class="material-symbols-outlined">delete</i>
            Deletar
          </button>
        </div>
      </div> `;

    //ADICIONA NOVO ITEM
    main.innerHTML += novoItem;

    input.value = ""; //lIMPA CAMPOS
    input.focus(); //RETORNA O FOCO NO INPUT
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var items = document.getElementById(id);
  var classe = items.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    items.classList.add("clicado");
    var icones = document.getElementById("icons" + id);
    icones.classList.remove("material-symbols-outlined");
    icones.classList.add("material-symbols-outlined");

    items.parentNode.appendChild(items);
  } else {
    items.classList.remove("clicado");

    var icones = document.getElementById("icone_" + id);
    icones.classList.add("material-symbols-outlined");
    icones.classList.remove("material-symbols-outlined");
  }
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnAdd.click();
  }
});
