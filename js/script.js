//inicio conteudo 2
let mostrarDivTexto=document.getElementById("tema-atual-1");
let divTexto=document.querySelector("#texto-tema-atual-1");
let temaAtualTituloUm=document.querySelector ("#tema-atual-titulo-1");

mostrarDivTexto.addEventListener('click', ()=>{
    if (divTexto.style.display==='none'){
        divTexto.style.display='block';
        temaAtualTituloUm.style.color='red';
    } else{
        divTexto.style.display='none';
        temaAtualTituloUm.style.color='black';
    }
})

let mostrarDivTextoDois=document.getElementById("tema-atual-2");
let divTextoDois=document.querySelector("#texto-tema-atual-2");
let temaAtualTituloDois=document.querySelector ("#tema-atual-titulo-2");

mostrarDivTextoDois.addEventListener('click', ()=>{
    if (divTextoDois.style.display==='none'){
        divTextoDois.style.display='block';
        temaAtualTituloDois.style.color='red';
    } else{
        divTextoDois.style.display='none';
        temaAtualTituloDois.style.color='black';
    }
})

let mostrarDivTextoTres=document.getElementById("tema-atual-3");
let divTextoTres=document.querySelector("#texto-tema-atual-3");
let temaAtualTituloTres=document.querySelector ("#tema-atual-titulo-3");

mostrarDivTextoTres.addEventListener('click', ()=>{
    if (divTextoTres.style.display==='none'){
        divTextoTres.style.display='block';
        temaAtualTituloTres.style.color='red';
    } else{
        divTextoTres.style.display='none';
        temaAtualTituloTres.style.color='black';
    }
})

//fim conteudo 2
//inicio formulário
let botaoEnviar=document.getElementById("form-sugestao");
let nome=document.getElementById("form-nome");

botaoEnviar.addEventListener("submit", (event) => {
        event.preventDefault();
        alert(nome.value + ", obrigada pela sugestão! ");
});

//fim formulário


/*const albumGrid=document.querySelector("#album-grid");

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



let botaoMostrarDiv=document.getElementById('show-div-button');

let div=document.querySelector("#my-div");

botaoMostrarDiv.addEventListener('click',()=>{
  if (div.style.display==='block'){
    div.style.display='none';
  }else{
    div.style.display='block';
    div.className='visible-div'; 
  }
  
})*/


/*let temasAtuais=document.querySelector("#tema-atual");

let temasImages=[
    "imagens/medicamentos.jpg",
    "imagens/casal-idosos.jpg",
    "imagens/alimentos-saudaveis.jpg",
];*/