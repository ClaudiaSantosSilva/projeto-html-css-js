//inicio conteudo 2
let mostrarDivTexto = document.getElementById("tema-atual-1");
let divTexto = document.querySelector("#texto-tema-atual-1");
let temaAtualTituloUm = document.querySelector("#tema-atual-titulo-1");

mostrarDivTexto.addEventListener("click", () => {
  if (divTexto.style.display === "none") {
    divTexto.style.display = "block";
    temaAtualTituloUm.style.color = "red";
  } else {
    divTexto.style.display = "none";
    temaAtualTituloUm.style.color = "black";
  }
});

let mostrarDivTextoDois = document.getElementById("tema-atual-2");
let divTextoDois = document.querySelector("#texto-tema-atual-2");
let temaAtualTituloDois = document.querySelector("#tema-atual-titulo-2");

mostrarDivTextoDois.addEventListener("click", () => {
  if (divTextoDois.style.display === "none") {
    divTextoDois.style.display = "block";
    temaAtualTituloDois.style.color = "red";
  } else {
    divTextoDois.style.display = "none";
    temaAtualTituloDois.style.color = "black";
  }
});

let mostrarDivTextoTres = document.getElementById("tema-atual-3");
let divTextoTres = document.querySelector("#texto-tema-atual-3");
let temaAtualTituloTres = document.querySelector("#tema-atual-titulo-3");

mostrarDivTextoTres.addEventListener("click", () => {
  if (divTextoTres.style.display === "none") {
    divTextoTres.style.display = "block";
    temaAtualTituloTres.style.color = "red";
  } else {
    divTextoTres.style.display = "none";
    temaAtualTituloTres.style.color = "black";
  }
});

//fim conteudo 2
//inicio formulário
let botaoEnviar = document.getElementById("form-sugestao");
let nome = document.getElementById("form-nome");

botaoEnviar.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(nome.value + ", obrigada pela sugestão! ");
});

//fim formulário
