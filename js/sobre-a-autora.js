tituloSobreAutora=document.getElementById("titulo-sobre-autora");
tituloSobreAutora.innerHTML="Sobre a autora";


let listaFormacao=document.getElementById("formacao");
let formacoes=[
    "Graduada em Nutrição pela UERJ",
    "Especialista em Nutrição Clínica pela UFF",
    "Residência em Suporte Nutricional pelo HUPE/UERJ",
    "Mestre em Nutrição Clínica pela Universidade do Porto",
    "Especialista em Gerontologia pela UnATI/UERJ",
    "Especialista em Oncologia pela SBNO",
]

listaFormacao.innerHTML= formacoes.map((f)=>"<li>"+f+"</li>").join("");

