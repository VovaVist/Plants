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



