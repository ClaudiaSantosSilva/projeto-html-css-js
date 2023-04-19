let bannerImgs=[];

const banner=document.querySelector('#banner');
const legendaElem=document.createElement('h2');
legendaElem.className='legenda-imagens';
banner.appendChild(legendaElem);

let bannerImgsIndex=0;
const changeImageInterval=3000;

async function startBanner(){
    const response = await fetch ('json/banner.json');
    bannerImgs= await response.json();

    onBannerImageChange();
    setInterval(onBannerImageChange,changeImageInterval);
}

function onBannerImageChange(){
    const {url,legenda}= bannerImgs[bannerImgsIndex];
    banner.style.backgroundImage=`url(${url})`;
    legendaElem.innerHTML=legenda;
    if (bannerImgsIndex === bannerImgs.length-1){
        bannerImgsIndex=0;
    } else{
        bannerImgsIndex ++;
    }
}

startBanner();

