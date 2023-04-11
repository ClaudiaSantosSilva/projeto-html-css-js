//inicio conteudo 2
let MostrarDivTexto=document.getElementById("tema-atual-1");
let divTexto=document.querySelector("#texto-tema-atual-1");

MostrarDivTexto.addEventListener('click', ()=>{
    if (divTexto.style.display==='none'){
        divTexto.style.display='block';
    } else{
        divTexto.style.display='none';
    }
})

let MostrarDivTextoDois=document.getElementById("tema-atual-2");
let divTextoDois=document.querySelector("#texto-tema-atual-2");

MostrarDivTextoDois.addEventListener('click', ()=>{
    if (divTextoDois.style.display==='none'){
        divTextoDois.style.display='block';
    } else{
        divTextoDois.style.display='none';
    }
})

let MostrarDivTextoTres=document.getElementById("tema-atual-3");
let divTextoTres=document.querySelector("#texto-tema-atual-3");

MostrarDivTextoTres.addEventListener('click', ()=>{
    if (divTextoTres.style.display==='none'){
        divTextoTres.style.display='block';
    } else{
        divTextoTres.style.display='none';
    }
})

//fim conteudo 2


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