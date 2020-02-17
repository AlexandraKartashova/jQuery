const todoList = [];
let color = ['red', 'pink', 'green', 'yellow', 'blue', 'lightblue']; // рандомные цвета

const randomColor = () => {
    const i =  Math.round(Math.random() * 6);
    return color[i];
}


const addTodo = (item) => {
        const template = document.querySelector(".clone"); //созд клон блока
        const newDiv = template.cloneNode(true);
        

        const newDivText = newDiv.querySelector('.clone__text'); 
        newDivText.innerHTML = item.title;

        const newDivInput = newDiv.querySelector('input');
        newDivInput.checked = item.checked;

        newDivInput.addEventListener('click',  (event) => {
        item.checked = event.target.checked;
        
    });
        
        newDiv.classList.remove('hidden');// убираем фон клон
        $('.my_list').append(newDiv);

        for(let i = 0; i < todoList.length; i++){ //доработать
            newDiv.style.backgroundColor = randomColor();
        }    
}


const showTodo = (todoList) => {
    todoList.forEach(item => addTodo(item));
}

    const showNewTodo = (todoList) => {
        todoList.forEach(item => addTodo(item));
    
}
del.onclick = function() {
    console.log('hi');
    const delCheck = todoList.map(function(todoList) {
    return todoList.checked === true;

    })
    console.log(delCheck);
    // const delCheck = (todoList) => { //доработать
    // todoList.filter(checked => addTodo(checked) === 'false');
    // return delCheck;
    //}
}

const clearyList = () => {
    const list = document.querySelector(".my_list");
    list.innerHTML = '';
}

$('#add').on('click', () => {
    const inputValue = $('#new_item')[0].value;
    todoList.push({
        title: inputValue,
        color: randomColor(),
        id: Date.now(),
        checked: false
    });
    clearyList();
    showTodo(todoList);
    $('#new_item')[0].value = '';
    console.log(todoList);

})




//Добавление туду
//брать значение с инпута
//добавлять рандомный цвет
//добавлять айди УНИКАЛЬНЫЙ
//добавлять значение чекбокса
//запихивать это в обьект
//обьект запихивать в массив
// const testArray = [
//     {
//       title: 'input value',
//       color: 'random color',
//       id: 'id',
//       checked: 'true/false'
//     },
//     {
//       title: 'input value',
//       color: 'random color',
//       id: 'id',
//       checked: 'true/false'
//     }
//]

//отрисовка
// проходить циклом по массиву и отрисовывать его в документ
// используя HTML элементы
// javascript map filter 
// javascript create element

//смена цвета существующего
//работа с чекбоксом
//цикл по массиву - находить нужный элемент(обьект) - менять цвет

//редактирование
//удаление