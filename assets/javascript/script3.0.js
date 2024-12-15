
// ARQUIVO JAVASCRIPT

var tabChopps = document.getElementById("chopps");
var tabPorcoes = document.getElementById("porcoes");
var tabCombos = document.getElementById('combos');
var tabDrinks = document.getElementById('drinks');

var choppsArea = document.getElementById('showChopps');
var porcoesArea = document.getElementById('showPorcoes');
var combosArea = document.getElementById('showCombos');
var drinksArea = document.getElementById('showDrinks');


function removeSelected() {  
  tabPorcoes.classList.remove('selected');
  tabCombos.classList.remove('selected');
  tabDrinks.classList.remove('selected');  
  tabChopps.classList.remove('selected');
}
function choppsTab() {
  removeSelected();
  tabChopps.classList.add('selected');
  showChopps()

}
function porcoesTab() {
  removeSelected();
  tabPorcoes.classList.add('selected');
  showPorcoes()

};
function combosTab() {
  removeSelected();
  tabCombos.classList.add('selected');
  showCombos();

};
function drinksTab() {
  removeSelected();
  tabDrinks.classList.add('selected');
  showDrinks();

};

function hideItens(){
  choppsArea.style.display = 'none'
  porcoesArea.style.display = 'none'
  combosArea.style.display = 'none'
  drinksArea.style.display = 'none'
}
function showChopps() {
  hideItens();
  choppsArea.style.display = "block"
}
function showPorcoes() {
  hideItens();
  porcoesArea.style.display = 'block'
}
function showCombos() {
  hideItens();
  combosArea.style.display = "block"
}
function showDrinks() {
  hideItens();
  drinksArea.style.display = "block"
}



// SLIDE BANNER //
let totalSlides = document.querySelectorAll(".slider--item").length;
currentSlide = 0;

document.querySelector(
    ".slider--width"
).style.width = `calc(100vw * ${totalSlides})`;

function goNext() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = currentSlide * document.body.clientWidth;
    document.querySelector(
        ".slider--width"
    ).style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 7000);

console.log('Script 3.0 está carregado')

porcoesTab();

// ----------------------------------------------------------------------------- //




const qs = (el)=>document.querySelector(el); 
const qsa = (el)=>document.querySelectorAll(el);

// LISTAR PORÇÕES
porcoes.map((item, index) => {
   let porcItem = document.querySelector('.porcao--item').cloneNode(true);

   porcItem.setAttribute('data-key', index);
   porcItem.querySelector('.description').innerHTML = item.name;
   porcItem.querySelector('.desc_p').innerHTML = item.description;
   porcItem.querySelector('.spotlight').innerHTML = item.extra;
   porcItem.querySelector('.price').innerHTML = item.price;
   porcItem.querySelector('.modalIcon').style.backgroundImage =  `url('${item.icon}')`;
   porcItem.querySelector('#openModal').addEventListener('click', (e) => {
      e.preventDefault();

      let key = e.target.closest('.porcao--item').getAttribute('data-key');
      qs('body').style.overflow = 'hidden';
      qs('.to-top').style.display = 'none';


      qs('#modal-content img').src = porcoes[key].img;

      qs('#modal').style.opacity = 0;
      qs('#modal').style.display = 'flex';
      setTimeout(()=>{
         qs('#modal').style.opacity = 1;
      }, 200);
   });

   document.querySelector('#showPorcoes').append(porcItem);
});

// LISTAR DRINKS
drinksAlc.map((item, index) => {
   let drinksItem = document.querySelector('.drink--item').cloneNode(true);
   
   drinksItem.setAttribute('data-key', index);
   drinksItem.querySelector('.description').innerHTML = item.name;
   drinksItem.querySelector('.desc_p').innerHTML = item.description;
   drinksItem.querySelector('.price').innerHTML = item.price;
   drinksItem.querySelector('.modalIcon').style.backgroundImage =  `url('${item.icon}')`;
   drinksItem.querySelector('#openModal').addEventListener('click', (e) => {
      e.preventDefault();

      let key = e.target.closest('.drink--item').getAttribute('data-key');
      qs('body').style.overflow = 'hidden';
      qs('.to-top').style.display = 'none';

      qs('#modal-content img').src = drinksAlc[key].img;

      qs('#modal').style.opacity = 0;
      qs('#modal').style.display = 'flex';
      setTimeout(()=>{
         qs('#modal').style.opacity = 1;
      }, 200);
   });
   
   document.querySelector('#alc').append(drinksItem);
});

// LISTAR NÃO ALCOÓLICOS
drinksNoAlc.map((item, index) => {
   let noAlcItem = document.querySelector('.no-alc--item').cloneNode(true);

   noAlcItem.setAttribute('data-key', index);
   noAlcItem.querySelector('.description').innerHTML = item.name;
   noAlcItem.querySelector('.desc_p').innerHTML = item.description;
   noAlcItem.querySelector('.sub-description').innerHTML = item.extra;
   noAlcItem.querySelector('.price').innerHTML = item.price;
   noAlcItem.querySelector('.modalIcon').style.backgroundImage =  `url('${item.icon}')`;
   noAlcItem.querySelector('#openModal').addEventListener('click', (e) => {
      e.preventDefault();

      let key = e.target.closest('.no-alc--item').getAttribute('data-key');
      qs('body').style.overflow = 'hidden';
      qs('.to-top').style.display = 'none';

      qs('#modal-content img').src = drinksNoAlc[key].img;

      qs('#modal').style.opacity = 0;
      qs('#modal').style.display = 'flex';
      setTimeout(()=>{
         qs('#modal').style.opacity = 1;
      }, 200);
   });

   document.querySelector('#noAlc').append(noAlcItem);
});

// LISTAR COMBOS

combos.map((item, index)=>{
   let comboItem = document.querySelector('.combo--item').cloneNode(true);

   comboItem.setAttribute('data-key', index);
   comboItem.querySelector('.description').innerHTML = item.name;
   comboItem.querySelector('.sub-description').innerHTML = item.extra;
   comboItem.querySelector('.desc_p').innerHTML = item.description;
   comboItem.querySelector('.price').innerHTML = item.price;
   comboItem.querySelector('.modalIcon').style.backgroundImage =  `url('${item.icon}')`;
   comboItem.querySelector('#openModal').addEventListener('click', (e) => {
      e.preventDefault();

      let key = e.target.closest('.combo--item').getAttribute('data-key');
      qs('body').style.overflow = 'hidden';
      qs('.to-top').style.display = 'none';

      qs('#modal-content img').src = combos[key].img;

      qs('#modal').style.opacity = 0;
      qs('#modal').style.display = 'flex';
      setTimeout(()=>{
         qs('#modal').style.opacity = 1;
      }, 200);
   });


  document.querySelector('#showCombos').append(comboItem);
})







// EVENTOS DO MODAL 

function closeModal() {
   
   qs('body').style.overflow = 'visible';
   qs('#modal').style.opacity = 0;
   setTimeout(()=>{
      qs('#modal').style.display = 'none';      
   }, 500);
   
   qs('.to-top').style.display = 'flex';
}

qsa('#modal-close, #close-cross').forEach((item)=> {
   item.addEventListener('click', closeModal);
})



console.log('Script está carregado')