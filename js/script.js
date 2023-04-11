//inicio conteudo 2
let temasAtuais=document.querySelector("#tema-atual");

let temasImages=[
    "imagens/medicamentos.jpg",
    "imagens/casal-idosos.jpg",
    "imagens/alimentos-saudaveis.jpg",
];

temasImages.forEach(text =>)

//fim conteudo 2


const albumGrid=document.querySelector("#album-grid");

const albumImages=[
  "imagens/imagem-1.jpg",
  "imagens/imagem-2.jpg",
  "imagens/imagem-3.jpg",
  "imagens/imagem-4.jpg",
  "imagens/imagem-5.jpg",
  "imagens/imagem-6.jpg",
  "imagens/imagem-7.jpg",
  "imagens/imagem-8.jpg",
  "imagens/imagem-9.jpg",
];

albumImages.forEach(link=>{
  let albumImage = document.createElement ('img');
  albumImage.src=link;
  albumImage.className="album-image";
  albumImage.onclick = () =>{
    alert (link);
  };

  albumGrid.appendChild(albumImage);
});