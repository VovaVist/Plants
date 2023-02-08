document.getElementById('burger').addEventListener('click', function(){
    document.querySelector('header').classList.toggle('open')
});

const priceBtnBasics = document.querySelector('.price-btn');

priceBtnBasics.addEventListener('click', (event) => {
    
    const basicContentNode =  event.target.nextElementSibling;
    const heightBasicContent = basicContentNode.firstElementChild.offsetHeight;
    const textBasic = document.querySelector('.basic-content-text');
    const textPriceBasic = document.querySelector('.basic-content-price');
    const btnPriceBasic = document.querySelector('.price-selected-button');
    basicContentNode.style.height = `${heightBasicContent}px` ;
    basicContentNode.classList.toggle('basic-content-active');
    document.querySelector('.price-element').classList.toggle('price-element-active');
  
    if(!basicContentNode.classList.contains('basic-content-active')) {
        basicContentNode.style.height = '0px';
        basicContentNode.nextElementSibling.style.height = '0px';
        textBasic.style.height = '0px';
        textPriceBasic.style.height = '0px';
        btnPriceBasic.style.height = '0px';
    }

    if (document.querySelector('.price-element').classList.contains('price-element-active')) {
        document.querySelector('.price-element').nextElementSibling.classList.remove('price-element-active');
        document.querySelector('.all-elements').lastElementChild.classList.remove('price-element-active');
        document.querySelector('.basic-content-2').classList.remove('basic-content-active');
        document.querySelector('.basic-content-3').classList.remove('basic-content-active');
    }
});


const priceBtnStandard = document.querySelector('#price-button-standard');

priceBtnStandard.addEventListener('click', (event) => {
    
    const basicContentNode =  event.target.nextElementSibling;
    const heightBasicContent = basicContentNode.firstElementChild.offsetHeight;
    const textBasic = document.querySelector('.basic-content-text');
    const textPriceBasic = document.querySelector('.basic-content-price');
    const btnPriceBasic = document.querySelector('.price-selected-button');
    basicContentNode.style.height = `${heightBasicContent}px` ;
    basicContentNode.classList.toggle('basic-content-active');
    document.querySelector('.price-element').nextElementSibling.classList.toggle('price-element-active');
    
    if(!basicContentNode.classList.contains('basic-content-active')) {
        basicContentNode.style.height = '0px';
        basicContentNode.nextElementSibling.style.height = '0px';
        textBasic.style.height = '0px';
        textPriceBasic.style.height = '0px';
        btnPriceBasic.style.height = '0px';
    }

    if (document.querySelector('.price-element').nextElementSibling.classList.contains('price-element-active')) {
        document.querySelector('.price-element').classList.remove('price-element-active');
        document.querySelector('.all-elements').lastElementChild.classList.remove('price-element-active');
        document.querySelector('.basic-content-1').classList.remove('basic-content-active');
        document.querySelector('.basic-content-3').classList.remove('basic-content-active');
    }
});


const priceProCare = document.querySelector('.all-elements').lastElementChild;

priceProCare.addEventListener('click', (event) => {
    
    const basicContentNode =  event.target.nextElementSibling;
    const heightBasicContent = basicContentNode.firstElementChild.offsetHeight;
    const textBasic = document.querySelector('.basic-content-text');
    const textPriceBasic = document.querySelector('.basic-content-price');
    const btnPriceBasic = document.querySelector('.price-selected-button');
    basicContentNode.style.height = `${heightBasicContent}px` ;
    basicContentNode.classList.toggle('basic-content-active');
    document.querySelector('.all-elements').lastElementChild.classList.toggle('price-element-active');
    
    if(!basicContentNode.classList.contains('basic-content-active')) {
        basicContentNode.style.height = '0px';
        basicContentNode.nextElementSibling.style.height = '0px';
        textBasic.style.height = '0px';
        textPriceBasic.style.height = '0px';
        btnPriceBasic.style.height = '0px';
    }

    if (document.querySelector('.all-elements').lastElementChild.classList.contains('price-element-active')) {
        document.querySelector('.price-element').classList.remove('price-element-active');
        document.querySelector('.price-element').nextElementSibling.classList.remove('price-element-active');
        document.querySelector('.basic-content-1').classList.remove('basic-content-active');
        document.querySelector('.basic-content-2').classList.remove('basic-content-active');
    }
});


const firstSectionService = document.querySelector('.section-image-1'); // garden care
const secondSectionService = document.querySelector('.section-image-2'); // planting
const thirdSectionService = document.querySelector('.section-image-3'); // lawn care
const fourthSectionService = document.querySelector('.section-image-4'); // planting
const fifthSectionService = document.querySelector('.section-image-5'); // garden care
const sixthSectionService = document.querySelector('.section-image-6'); // planting 

const gardensBtn = document.querySelector('#service-button-1');
const lawnBtn = document.querySelector('#service-button-2');
const plantingBtn = document.querySelector('#service-button-3');

gardensBtn.addEventListener('click', (event) => {
    secondSectionService.classList.toggle('blur');
    thirdSectionService.classList.toggle('blur');
    fourthSectionService.classList.toggle('blur');
    sixthSectionService.classList.toggle('blur');
    gardensBtn.classList.toggle('active-service-btn');
});

lawnBtn.addEventListener('click', (event) => {
    firstSectionService.classList.toggle('blur');
    secondSectionService.classList.toggle('blur');
    fourthSectionService.classList.toggle('blur');
    fifthSectionService.classList.toggle('blur');
    sixthSectionService.classList.toggle('blur');
});

plantingBtn.addEventListener('click', (event) => {
    firstSectionService.classList.toggle('blur');
    thirdSectionService.classList.toggle('blur');
    fifthSectionService.classList.toggle('blur');
});





const chooseCity = document.querySelector('.choose-city');
const citiesButton = document.getElementById('btn')
const wrappedCitiesContent = document.querySelector('.cities-content-wrap');

citiesButton.addEventListener('click', (event) => {
    const citiesContentNode =  document.querySelector('.cities-content')
    const heightCitiesContent = citiesContentNode.firstElementChild.offsetHeight;
    citiesContentNode.style.height = `234px`;
    citiesContentNode.classList.toggle('cities-content-active');
    chooseCity.classList.toggle('choose-city-active');
    document.querySelector('.city-card').classList.remove('city-card-active');

    if(!citiesContentNode.classList.contains('cities-content-active')) {
        citiesContentNode.style.height = '0px';
    }
});

const canadiguaBtn = document.querySelector('.canadaigua');
const newYorkBtn = document.querySelector('.new-york');
const yonkersBtn = document.querySelector('.yonkers');
const sherillBtn = document.querySelector('.sherill');
const cityCard = document.querySelector('.city-card');
const citiesContent = document.querySelector('.cities-content');
const numberToCall = document.querySelector('.call');

canadiguaBtn.addEventListener('click', (event) => {
    chooseCity.classList.remove('choose-city-active');
    cityCard.classList.toggle('city-card-active');
    citiesContent.classList.remove('cities-content-active');
    document.querySelector('.column-value-city').innerHTML = 'Canandaigua, NY';
    document.querySelector('.column-value-phone').innerHTML = '+1	585	393 0001';
    document.querySelector('.column-value-adress').innerHTML = '151 Charlotte Street';
    numberToCall.setAttribute('href', 'tel: +1 585 393 0001');
});

newYorkBtn.addEventListener('click', (event) => {
    chooseCity.classList.remove('choose-city-active');
    cityCard.classList.toggle('city-card-active');
    citiesContent.classList.remove('cities-content-active');
    document.querySelector('.column-value-city').innerHTML = 'New York City';
    document.querySelector('.column-value-phone').innerHTML = '+1	212	456 0002';
    document.querySelector('.column-value-adress').innerHTML = '9 East 91st Street';
    numberToCall.setAttribute('href', 'tel: +1	212	456 0002');
});


yonkersBtn.addEventListener('click', (event) => {
    chooseCity.classList.remove('choose-city-active');
    cityCard.classList.toggle('city-card-active');
    citiesContent.classList.remove('cities-content-active');
    document.querySelector('.column-value-city').innerHTML = 'Yonkers, NY';
    document.querySelector('.column-value-phone').innerHTML = '+1	914	678 0003';
    document.querySelector('.column-value-adress').innerHTML = '511 Warburton Ave';
    numberToCall.setAttribute('href', 'tel: +1	914	678 0003');
});


sherillBtn.addEventListener('click', (event) => {
    chooseCity.classList.remove('choose-city-active');
    cityCard.classList.toggle('city-card-active');
    citiesContent.classList.remove('cities-content-active');
    document.querySelector('.column-value-city').innerHTML = 'Sherrill, NY';
    document.querySelector('.column-value-phone').innerHTML = '+1	315	908 0004';
    document.querySelector('.column-value-adress').innerHTML = '14 WEST Noyes BLVD';
    numberToCall.setAttribute('href', 'tel: +1	315	908 0004');
});









