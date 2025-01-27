var visageSelection = document.querySelectorAll(".visageAtt");
var visagePrincipal = document.querySelector("#visageChoisie");
var donnes =['v1','menuEcran','TTT','3','12'];
var couleurZone='#4968B0';

//console.log(visagePrincipal.src);

/* Selection visage */

visageSelection.forEach(visageChoisi =>{
    visageChoisi.addEventListener("click",function(){
        visageSelection.forEach(autrevisageChoisi =>{
            autrevisageChoisi.style.border = "hidden";
        })
        visageChoisi.style.border = "solid, 0.4em, #b4d093";
        //console.log(visageChoisi.src);
        visagePrincipal.src=visageChoisi.src;
        visagePrincipal.alt=visageChoisi.alt;
        donnes[0]=visageChoisi.id;
    })
})

/* Selection zone */

var menuZone = document.querySelectorAll(".menuSolo");
var pictos = document.querySelectorAll(".picto");

menuZone.forEach(zoneChoisi =>{
    zoneChoisi.addEventListener("click",function(){
        menuZone.forEach(autreMenuZone =>{
            if(autreMenuZone.id == 'menuEcran'){
                autreMenuZone.style.backgroundColor = "#4968B0";
                autreMenuZone.style.color = "#fbfbf5";
            };

            if(autreMenuZone.id == 'menuVisage'){
                autreMenuZone.style.backgroundColor = "#FD7144";
            };

            if(autreMenuZone.id == 'menuBouche'){
                autreMenuZone.style.backgroundColor = "#b4d093";
            };

            if(autreMenuZone.id == 'menuOeil'){
                autreMenuZone.style.backgroundColor = "#F6D487";
            };
        })
        zoneChoisi.style.color = "#012035";
        zoneChoisi.style.backgroundColor = "#fbfbf5";
        donnes[1]=zoneChoisi.id;
        donnes[2]='TTT';

        pictos.forEach(pic =>{
                pic.classList.remove("picSelection");
                pic.classList.add("picPasSelect");
                if (pic.id == "TTT"){
                    pic.classList.add("picSelection");
                    pic.classList.remove("picPasSelect");
                }
        })

        if(zoneChoisi.id == 'menuEcran'){
            couleurZone='#4968B0';
            fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
            pictos.forEach(pic =>{
                if (pic.id == "TTT"){
                    pic.parentElement.classList.remove("col-4");
                    pic.parentElement.classList.add("col-3");
                    pic.parentElement.classList.remove('col-lg-2');
                }
                if (pic.id == "TP"){
                    pic.src='images/pictos finaux/TPecran.png';
                    pic.alt='TP ecran';
                    pic.parentElement.classList.remove("col-4");
                    pic.parentElement.classList.add("col-3");
                    pic.parentElement.classList.remove('col-lg-2');
                }
                if (pic.id == "TF"){
                    pic.src='images/pictos finaux/TFecran.png';
                    pic.alt='TF ecran';
                    pic.parentElement.classList.remove("col-4");
                    pic.parentElement.classList.add("col-3");
                    pic.parentElement.classList.remove('col-lg-2');
                }
                if (pic.id == "NBF"){
                    pic.src='images/pictos finaux/NBFecran.png';
                    pic.alt='NBF ecran';
                    pic.parentElement.classList.remove("col-4");
                    pic.parentElement.classList.add("col-3");
                    pic.parentElement.classList.remove('col-lg-2');
                }
                if (pic.id == "NBEZ"){
                    pic.src='';
                    pic.alt='';
                    pic.classList.add("hidden");
                }
                if (pic.id == "latt"){
                    pic.src='';
                    pic.alt='';
                    pic.classList.add("hidden");
                }
            });
        };

        if(zoneChoisi.id == 'menuVisage'){
            couleurZone='#FD7144';
            fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
            pictos.forEach(pic =>{
                if (pic.id == "TTT"){
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                
                if (pic.id == "TP"){
                    pic.src='images/pictos finaux/TPvisage.png';
                    pic.alt='TP visage';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "TF"){
                    pic.src='images/pictos finaux/TFvisage.png';
                    pic.alt='TF visage';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "NBF"){
                    pic.src='images/pictos finaux/NBFvisage.png';
                    pic.alt='NBF visage';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "NBEZ"){
                    pic.src='images/pictos finaux/NBEZvisage.png';
                    pic.alt='NBEZ visage';
                    pic.classList.remove('hidden');
                }
                if (pic.id == "latt"){
                    pic.src='images/pictos finaux/latencevisage.png';
                    pic.alt='lattence visage';
                    pic.classList.remove('hidden');
                }
            });
           
        };

        if(zoneChoisi.id == 'menuBouche'){
            couleurZone='#b4d093';
            fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
            pictos.forEach(pic =>{
                if (pic.id == "TTT"){
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }

                if (pic.id == "TP"){
                    pic.src='images/pictos finaux/TPbouche.png';
                    pic.alt='TP bouche';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "TF"){
                    pic.src='images/pictos finaux/TFbouche.png';
                    pic.alt='TF bouche';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                    
                }
                if (pic.id == "NBF"){
                    pic.src='images/pictos finaux/NBFbouche.png';
                    pic.alt='NBF bouche';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "NBEZ"){
                    pic.src='images/pictos finaux/NBEZbouche.png';
                    pic.alt='NBEZ bouche';
                    pic.classList.remove('hidden');
                }
                if (pic.id == "latt"){
                    pic.src='images/pictos finaux/latencebouche.png';
                    pic.alt='lattence bouche';
                    pic.classList.remove('hidden');
                }
            });
            
        };

        if(zoneChoisi.id == 'menuOeil'){
            couleurZone='#F6D487';
            fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
            pictos.forEach(pic =>{  
                if (pic.id == "TTT"){
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }

                if (pic.id == "TP"){
                    pic.src='images/pictos finaux/TPoeil.png';
                    pic.alt='TP oeil';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "TF"){
                    pic.src='images/pictos finaux/TFoeil.png';
                    pic.alt='TF oeil';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "NBF"){
                    pic.src='images/pictos finaux/NBFoeil.png';
                    pic.alt='NBF oeil';
                    pic.parentElement.classList.remove("col-3");
                    pic.parentElement.classList.add("col-4");
                    pic.parentElement.classList.add("col-lg-2");
                }
                if (pic.id == "NBEZ"){
                    pic.src='images/pictos finaux/NBEZoeil.png';
                    pic.alt='NBEZ oeil';
                    pic.classList.remove('hidden');
                }
                if (pic.id == "latt"){
                    pic.src='images/pictos finaux/latenceoeil.png';
                    pic.alt='lattence oeil';
                    pic.classList.remove('hidden');
                }
            });
            
        };
    })
})

/* Pictos */

pictos.forEach(pic =>{
    pic.addEventListener("click",function(){
        pictos.forEach(autrePic =>{
            autrePic.classList.remove("picSelection");
            autrePic.classList.add("picPasSelect");
        })
        pic.classList.add("picSelection");
        pic.classList.remove("picPasSelect");
        donnes[2]=pic.id;
    })
})


/* Slider */

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', couleurZone, controlSlider);
    donnes[3]=fromInput.value;
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}
    
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', couleurZone, controlSlider);
    setToggleAccessible(toInput);
    donnes[4]=toInput.value;
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
  donnes[3]=fromSlider.value;
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
  setToggleAccessible(toSlider);
  donnes[4]=toSlider.value;
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', couleurZone, toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

console.log(donnes);
//c'est le tableau avec le visage, zone, picto et l'age de début et de fin de l'interval pour que tu puisses faires les graphiques
// Sous cette forme ['v3', 'menuBouche', 'TF', '5', '12']

console.log(couleurZone);
// C'et la variable dans laquelle tu trouveras la couleur de la zone pour adapter les flèches
