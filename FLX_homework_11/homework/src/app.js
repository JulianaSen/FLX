let numberOfElements = 0;
const maxNumber = 10;
let dragSrcEl = null;

let ulList = document.querySelector('.list');
let inputText = document.querySelector('.inputField');

let maxItem = document.querySelector('.maxItem');
maxItem.style.display = 'none';

let btn = document.getElementById('btn');
btn.addEventListener('click', checkInput);

let listDragAndDrop = document.querySelectorAll('.list .listBlock');

function checkInput() {
  if (inputText.value !== '') {
    createElement();
  } 
}

function createElement() {
  let listBlock = document.createElement('div');
  listBlock.setAttribute('class', 'listBlock');
  listBlock.setAttribute('draggable', true);
  
  let element = document.createElement('li');
  element.setAttribute('class', 'listElement');

  let btnDone = document.createElement('button');
  btnDone.setAttribute('class', 'material-icons done');
  btnDone.innerHTML = 'check_box_outline_blank';
    
  let btnDelete = document.createElement('button');
  btnDelete.setAttribute('class', 'material-icons delete');
  btnDelete.innerHTML = 'delete';
 
  ulList.appendChild(listBlock);
  listBlock.appendChild(btnDone);
  listBlock.appendChild(element);
  listBlock.appendChild(btnDelete);
  
  element.innerHTML = inputText.value;   
    
  numberOfElements++;
  if(numberOfElements === maxNumber) {
    inputText.disabled = true;
    btn.disabled = true;
    maxItem.style.display = 'block'; 
  }

  btnDone.addEventListener('click', () => {
    btnDone.innerHTML ='check_box';
  });
    
  btnDelete.addEventListener('click', () => {
    listBlock.remove();
    numberOfElements--;
    inputText.disabled = false;
    btn.disabled = false;
    maxItem.style.display = 'none';
  });
    
  inputText.value = '';
    
  [].forEach.call(listDragAndDrop, dragAndDrop);
}

function handleDragStart(elem) {
  dragSrcEl = this;
  elem.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragOver(elem) {
  if (elem.preventDefault) {
    elem.preventDefault(); 
  }
  return false;
}

function handleDrop(elem) {
  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = elem.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    dragAndDrop(dropElem);
  }
  return false;
}

function dragAndDrop(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('drop', handleDrop, false);
}