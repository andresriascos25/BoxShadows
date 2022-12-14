
const range = document.querySelectorAll("[type='range']");
const colorBack = document.querySelectorAll("[type='color']");
const valor = document.querySelectorAll("[type='number']");
const designer = document.querySelector('.design');
const code= document.querySelector('.codigo');

const cerrar= document.querySelector(".close");
const abrir= document.querySelector(".button");
const modal= document.querySelector(".modal");
const modalC= document.querySelector(".modal-container");

let a = [0, 0, 0, 0, 'black'];
let ident, borderCol;
let backgroundCol='white';
let borderRad=0;
let heightDesign=200;
let widthDesign=200;


for (let i = 0; i < colorBack.length; i++) {
  colorBack[i].addEventListener('input', (e) => {
    if (e.target.id === 'color') {
      a[4] = e.target.value;
      designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
    }
    if (e.target.id === 'background-color') {
      backgroundCol = e.target.value;
      designer.style.backgroundColor = backgroundCol;
    } else if (e.target.id === 'border-color') {
      borderCol = e.target.value;
      designer.style.borderColor = borderCol;
    }
  })
}

for (let i = 0; i < range.length; i++) {

  range[i].addEventListener('input', (e) => {
    ident = e.target.id;
    switch (ident) {
      case 'range1':
        a[i] = e.target.value;
        valor[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'range2':
        a[i] = e.target.value;
        valor[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'range3':
        a[i] = e.target.value;
        valor[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'range4':
        a[i] = e.target.value;
        valor[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'range5':
        valor[i].value = e.target.value;
        borderRad = e.target.value;
        designer.style.borderRadius = `${borderRad}px`;
        console.log(ident);
        break;
      case 'range6':
        valor[i].value = e.target.value;
        heightDesign = e.target.value;
        designer.style.height = `${heightDesign}px`;
        break;
      case 'range7':
        valor[i].value = e.target.value;
        widthDesign = e.target.value;
        designer.style.width = `${widthDesign}px`;
        break;

    }
  })

}

for (let i = 0; i < valor.length; i++) {

  valor[i].addEventListener('input', (e) => {
    ident = e.target.id;
    switch (ident) {
      case 'value1':
        a[i] = e.target.value;
        range[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'value2':
        a[i] = e.target.value;
        range[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'value3':
        a[i] = e.target.value;
        range[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'value4':
        a[i] = e.target.value;
        range[i].value = e.target.value;
        designer.style.boxShadow = `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]}`;
        break;
      case 'value5':
        range[i].value = e.target.value;
        borderRad = e.target.value;
        designer.style.borderRadius = `${borderRad}px`;
        console.log(ident);
        break;
      case 'value6':
        range[i].value = e.target.value;
        heightDesign = e.target.value;
        designer.style.height = `${heightDesign}px`;
        break;
      case 'value7':
        range[i].value = e.target.value;
        widthDesign = e.target.value;
        designer.style.width = `${widthDesign}px`;
        break;

    }
  })

}

abrir.addEventListener('click', (e) => {
  modalC.style.opacity='1';
  modalC.style.visibility='visible';
  modal.classList.toggle('modal-close'); //toggle quita y pune la clase
  code.innerHTML= `box-shadow: ${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px ${a[4]};  width: ${widthDesign}px; heigth: ${heightDesign}px; 
  border-radius: ${borderRad}px; border-color: ${borderCol}; background-color: ${backgroundCol};`;
})

cerrar.addEventListener('click', () =>{
  
  modal.classList.toggle('modal-close');
  setTimeout(function(){
    modalC.style.opacity='0';
    modalC.style.visibility='hidden';
  },700)
})
