// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if (!nombreAmigo) {
    alert("Debes ingresar un nombre");
    return;
  }
  amigo.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  renderizarAmigos();
}

function renderizarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de renderizar

  for (let i = 0; i < amigo.length; i++) {
      let item = document.createElement("li");
      item.textContent = amigo[i];

      // Botón para eliminar el nombre
      let botonEliminar = document.createElement("button");
      botonEliminar.textContent = "x";
      botonEliminar.classList.add("button-eliminar");
      botonEliminar.onclick = function () {
          eliminarAmigo(i); // Llama a la función para eliminar el nombre
      };

      item.appendChild(botonEliminar); // Agrega el botón al elemento de la lista
      listaAmigos.appendChild(item); // Agrega el elemento a la lista
  }
}

function eliminarAmigo(index) {
  amigo.splice(index, 1); // Elimina el nombre del array
  renderizarAmigos(); // Vuelve a renderizar la lista
}

function sortearAmigo(){
    if (amigo.length === 0){
        alert("No hay amigos para sortear");
    }
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}

function limpiarLista() {
  amigo = []; // Vacía el array de amigos
  renderizarAmigos(); // Actualiza la lista visual
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpia el resultado del sorteo anterior
}