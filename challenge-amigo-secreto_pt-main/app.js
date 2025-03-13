//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let input = document.querySelector(".input-name");
  let nome = input.value;
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    return;
  }
  amigos.push(nome); // Adiciona ao array

  adicionarNomeNaLista(nome);
  input.value = ""; // Limpa o campo
}
function adicionarNomeNaLista(nome) {
  let lista = document.getElementById("listaAmigos"); // Obtém a lista
  let li = document.createElement("li"); // Cria um novo elemento <li>
  li.textContent = nome; // Define o texto do <li>
  lista.appendChild(li); // Adiciona o <li> à lista sem apagar os existentes
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia!");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoescolhido = amigos[indiceAleatorio];
  let resultado_final = document.getElementById("resultado");
  resultado_final.innerHTML = `<p>O amigo sorteado foi ${amigoescolhido}</p>`;
}
function reiniciarJogo() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
