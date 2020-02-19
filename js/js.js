const todoList = [];
const checkedList = [];
const color = ['red', 'orange', 'blue', 'olive', 'yellow', 'lightblue' ]; // рандомные цвета

const randomColor = () => {
    const i =  Math.round(Math.random() * 6);
    return color[i];
}

const clickTextTodoHandler = (newDivText, editInput, item) => {
    newDivText.classList.add('hidden');
    editInput.classList.remove('hidden');
    editInput.value = item.title;
    editInput.addEventListener('change',  (event) => {
        item.title = event.target.value;
        editInput.classList.add('hidden');
        newDivText.classList.remove('hidden');
        newDivText.innerHTML = event.target.value;
    });
}

const toglerChekedElementOnId = (item) => {
    item.checked = event.target.checked;
    const indexId = checkedList.indexOf(item.id);
    if(item.checked & indexId === -1) {
        checkedList.push(item.id);
    }
    if(!item.checked & indexId !== -1) {
        checkedList.splice(indexId, 1);
    }
};


const controlsColors = document.querySelector('.controls__colors');
    controlsColors.onclick = (event) => {
    const newColor = event.target.id;
    todoList.forEach(item => {
        if(item.checked){
            item.color = newColor;
            clearyRender();
            showTodo(todoList);
        }
    });
};


const addTodo = (item) => { 
        const template = document.querySelector(".clone"); 
        const newDiv = template.cloneNode(true);

        const newDivText = newDiv.querySelector('.clone__text');
        const editInput = newDiv.querySelector('.clone__input')
        newDivText.innerHTML = item.title;
        newDivText.onclick = () => {
            clickTextTodoHandler(newDivText, editInput, item);
        };

        const newDivInput = newDiv.querySelector('.input__check');
        newDivInput.checked = item.checked;

        newDivInput.onclick = (event) => {
            toglerChekedElementOnId(item);
        };
        
        newDiv.classList.remove('hidden');
        $('.my__list').append(newDiv);
        newDiv.style.backgroundColor = item.color;
    
}

const showTodo = (todoList) => {
    todoList.forEach(item => addTodo(item));
}

//TODO use splice
del.onclick = () => {
    checkedList.forEach(item => {
        deleteOneElem(item);
    });
    clearyRender();
    showTodo(todoList);
}

const deleteOneElem = (id) => {
    const indexIdForDel = todoList.findIndex(item => item.id === id);
    if(indexIdForDel !== -1) {
        todoList.splice(indexIdForDel, 1);
    }
};

const clearyRender = () => {
    const list = document.querySelector('.my__list');
    list.innerHTML = '';
}

add.onclick = () => {
    const inputValue = $('#new_item')[0].value;
    if(inputValue) {
        todoList.push({
            title: inputValue,
            color: randomColor(),
            id: Date.now(),
            checked: false
        });
        clearyRender();
        showTodo(todoList);
        $('#new_item')[0].value = '';
    } else alert('Input text');
}