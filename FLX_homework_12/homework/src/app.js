const rootNode = document.getElementById('root');
const todoItems = [];
const zero = 0;

mainPage();

function mainPage() {
  let mainPage = document.createElement('div');
  mainPage.setAttribute('class', 'mainPage');
    
  let header = document.createElement('header');
  header.setAttribute('class', 'header');
  
  let h1 = document.createElement('h1');
  h1.setAttribute('class', 'h1');
  h1.innerHTML = 'Simple TODO application';
    
  let buttonAdd = document.createElement('button');
  buttonAdd.setAttribute('class', 'button addBtn');
  buttonAdd.innerHTML = 'Add new task';
  
  header.appendChild(h1);
  header.appendChild(buttonAdd);
    
  let main = document.createElement('main');
  main.setAttribute('class', 'main');
  
  let emptyMessage = document.createElement('p');
  emptyMessage.setAttribute('class', 'message');
  emptyMessage.innerHTML = 'TODO is empty';
    
  let list = document.createElement('ul');
  list.setAttribute('class', 'list');
 
  main.appendChild(emptyMessage);    
  main.appendChild(list);
    
  rootNode.appendChild(mainPage);
  mainPage.appendChild(header);
  mainPage.appendChild(main);   
    
  buttonAdd.addEventListener('click', () => {
    window.location.hash = 'addNewTask';
  });
    
  for(let i = 0; i < todoItems.length; i++) {
    let listElement = document.createElement('li');
    listElement.setAttribute('class', 'listElement');
     
    let textList = document.createElement('div');
    textList.setAttribute('class', 'textList');    
    
    let iconsDone = document.createElement('img');
    iconsDone.setAttribute('class', 'img');
    
    listElement.addEventListener('click', () => {
      window.location.hash = '';
    }); 
    
    textList.addEventListener('click', () => {
      rootNode.innerText = '';
      modifyTask(i);
    }); 
      
    if (todoItems[i].isDone) {
      iconsDone.src = './assets/img/done-s.png';
      textList.style.backgroundColor = 'grey';
    } else {
        iconsDone.src = './assets/img/todo-s.png';
    }
    
    iconsDone.addEventListener('click', () => {
      todoItems[i].isDone = true;
      todoItems.push(todoItems[i]);
      todoItems.splice(i, 1);
      window.location.hash = 'mainPage';
    });
   
    let removeIcon = document.createElement('img');
    removeIcon.setAttribute('class', 'img');
    removeIcon.src = './assets/img/remove-s.jpg';   
   
    list.appendChild(listElement);
    listElement.appendChild(iconsDone);  
    listElement.appendChild(textList);
    listElement.appendChild(removeIcon);
      
    removeIcon.addEventListener('click', () => {
      todoItems.splice(i, 1);
      window.location.hash = 'mainPage';
    });  
      
    if(todoItems.length !== zero) {
      emptyMessage.style.display = 'none'; 
    }
    textList.innerHTML = todoItems[i].description;
  }
}

function addNewTask() {
  let addTaskPage = document.createElement('div');
  addTaskPage.setAttribute('class', 'addTaskPage');
    
  let header = document.createElement('header');
  header.setAttribute('class', 'header');
  
  let h1 = document.createElement('h1');
  h1.setAttribute('class', 'h1');
  h1.innerHTML = 'Add task';
    
  let main = document.createElement('main');
  main.setAttribute('class', 'main');
    
  let inputField = document.createElement('input');
  inputField.setAttribute('class', 'inputField');
  inputField.setAttribute('type', 'text');
  
  let buttons = document.createElement('section');
  buttons.setAttribute('class', 'buttons');
    
  let buttonCancel = document.createElement('button');
  buttonCancel.setAttribute('class', 'button');
  buttonCancel.innerHTML = 'Cancel';
      
  let buttonSave = document.createElement('button');
  buttonSave.setAttribute('class', 'button');
  buttonSave.innerHTML = 'Save changes';
    
  addTaskPage.appendChild(header);
  addTaskPage.appendChild(main);
    
  header.appendChild(h1);
    
  main.appendChild(inputField);
  main.appendChild(buttons);
    
  buttons.appendChild(buttonCancel);
  buttons.appendChild(buttonSave);
    
  rootNode.appendChild(addTaskPage);
    
  buttonCancel.addEventListener('click', () => {
    window.location.hash = '';
  });
    
  buttonSave.addEventListener('click', () => {
    let text = inputField.value;
    if(text === '') {
      return alert('You didn`t write any task');
    }
    
    let task = {
      isDone: false,
      id: 12345, 
      description: text
    };
    
    todoItems.push(task);
    window.location.hash = '';
    return todoItems;
  });
}

function modifyTask(task) {
  let addTaskPage = document.createElement('div');
  addTaskPage.setAttribute('class', 'addTaskPage');
    
  let header = document.createElement('header');
  header.setAttribute('class', 'header');
  
  let h1 = document.createElement('h1');
  h1.setAttribute('class', 'h1');
  h1.innerHTML = 'Modify item';
    
  let main = document.createElement('main');
  main.setAttribute('class', 'main');
    
  let inputField = document.createElement('input');
  inputField.setAttribute('class', 'inputField');
  inputField.setAttribute('type', 'text');
  inputField.value = todoItems[task].description;
    
  let buttons = document.createElement('section');
  buttons.setAttribute('class', 'buttons');
    
  let buttonCancel = document.createElement('button');
  buttonCancel.setAttribute('class', 'button');
  buttonCancel.innerHTML = 'Cancel';
      
  let buttonSave = document.createElement('button');
  buttonSave.setAttribute('class', 'button');
  buttonSave.innerHTML = 'Save changes';
    
  addTaskPage.appendChild(header);
  addTaskPage.appendChild(main);
    
  header.appendChild(h1);
    
  main.appendChild(inputField);
  main.appendChild(buttons);
    
  buttons.appendChild(buttonCancel);
  buttons.appendChild(buttonSave);
    
  rootNode.appendChild(addTaskPage);
    
  buttonCancel.addEventListener('click', () => {
    window.location.hash = 'mainPage';
  });
    
  buttonSave.addEventListener('click', () => {
    let text = inputField.value; 
    if(text === '') {
      return alert('You didn`t write any task');
    }
    todoItems[task].description = text;
    window.location.hash = 'mainPage';
  });
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#addNewTask') {
    rootNode.innerText = '';
    addNewTask();
  } else {
      rootNode.innerText = '';
      mainPage();
  }
});