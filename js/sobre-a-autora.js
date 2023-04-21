const tituloSobreAutora = document.getElementById("titulo-sobre-autora");
tituloSobreAutora.innerHTML = "Sobre a autora";
tituloSobreAutora.style.fontFamily = "'Sedgwick Ave Display', cursive";

const listaFormacao = document.getElementById("formacao");
const formacaoItens = [
  "Graduada em Nutrição pela UERJ",
  "Especialista em Nutrição Clínica pela UFF",
  "Residência em Suporte Nutricional pelo HUPE/UERJ",
  "Mestre em Nutrição Clínica pela Universidade do Porto",
  "Especialista em Gerontologia pela UnATI/UERJ",
  "Especialista em Oncologia pela SBNO",
];

//listaFormacao.innerHTML= formacoes.map((f)=>"<li>"+f+"</li>").join("");

let formacao = [];

for (let index = 0; index < formacaoItens.length; index++) {
  const formacaoItem = `<li class="item-formacao">${formacaoItens[index]}</li>`;
  formacao.push(formacaoItem);
}

listaFormacao.innerHTML = formacao.join("");
