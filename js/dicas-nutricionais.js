const dicasNutricionaisSection=document.querySelector('#dicas-nutricionais-section');
const dicasNutricionaisList=document.querySelector('#dicas-nutricionais-list');
const legendaElem=document.createElement('h2');
legendaElem.className='dicas-nutricionais-titulo';
legendaElem.innerHTML='Dicas Nutricionais';
dicasNutricionaisSection.insertBefore(legendaElem,dicasNutricionaisList);

let dicasNutricionais=[
    {
      createdAt: "Há 1 dia", 
      imageSrc:"imagens/alimentos-fonte-ferro.webp" ,
      titulo: "Como aumentar a absorção do ferro dos alimentos",
      texto: "Consuma fruta cítrica durante o almoço e o jantar (suco) ou como sobremesa. Evite bebidas como mate, coca-cola e café durante essas refeiçoes.",
    },

    {
        createdAt: "Há uma semana",
        imageSrc:"imagens/beterraba.jpg",
        titulo : "A beterraba e o paciente diabético",
        texto : "Ao contrário do que muitos dizem, a beterraba não tem açúcar (como aquele usado nas bebidas). Ela pode e deve ser usada como parte de uma alimentação variada e saudável.",
    },

    {
        createdAt: "Há duas semanas",
        imageSrc:"imagens/alimentacao-e-exercicio.jpg",
        titulo : "Perda de peso = alimentação + exercício + consciência",
        texto : "Para que a perda de peso seja saudável e duradoura, a alimentação e o exercicio devem fazer parte da rotina diária, de forma consciente.",
    },
];

dicasNutricionais.forEach((dicaData) =>{
    const dicaItem=getDicaItem(
        dicaData.createdAt,
        dicaData.imageSrc,
        dicaData.titulo,
        dicaData.texto
    );

    dicasNutricionaisList.appendChild(dicaItem);
    });

    function getDicaItem(createdAt,imageSrc,titulo,texto){
        let dicasNutricionaisListItem=document.createElement('article');
        dicasNutricionaisListItem.className='dicas-nutricionais-list-item';

        let dicasNutricionaisListItemInfo=document.createElement('div');
        dicasNutricionaisListItemInfo.className='dicas-nutricionais-list-item-info';

        let dicasNutricionaisListItemInfoContent=document.createElement('div');
        dicasNutricionaisListItemInfoContent.className='dicas-nutricionais-list-item-info-content';

        let dicasNutricionaisListItemCreatedAt=document.createElement('span');
        dicasNutricionaisListItemCreatedAt.className='dicas-nutricionais-list-item-created-at';
        dicasNutricionaisListItemCreatedAt.innerHTML=createdAt;

        let dicasNutricionaisListItemImageSrc=document.createElement('img');
        dicasNutricionaisListItemImageSrc.className='dicas-nutricionais-list-item-image-src';
        dicasNutricionaisListItemImageSrc.src=imageSrc;

        let dicasNutricionaisListItemTitulo=document.createElement('h3');
        dicasNutricionaisListItemTitulo.className='dicas-nutricionais-list-item-titulo';
        dicasNutricionaisListItemTitulo.innerHTML=titulo;

        let dicasNutricionaisListItemTexto=document.createElement('p');
        dicasNutricionaisListItemTexto.className='dicas-nutricionais-list-item-texto';
        dicasNutricionaisListItemTexto.innerHTML=texto;

        dicasNutricionaisListItemInfo.appendChild(dicasNutricionaisListItemImageSrc);
        dicasNutricionaisListItemInfoContent.appendChild(dicasNutricionaisListItemCreatedAt);
        dicasNutricionaisListItemInfo.appendChild(dicasNutricionaisListItemInfoContent);

        dicasNutricionaisListItem.appendChild(dicasNutricionaisListItemInfo);
        dicasNutricionaisListItem.appendChild(dicasNutricionaisListItemTitulo);
        dicasNutricionaisListItem.appendChild(dicasNutricionaisListItemTexto);

        return dicasNutricionaisListItem;

    }
