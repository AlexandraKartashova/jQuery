const todoList = [];

const addTodo = (item) => {
        // const newDiv = document.createElement("div");
        const template = document.querySelector(".clone");
        const newDiv = template.cloneNode(true);

        const newDivText = newDiv.querySelector('.clone__text');
        newDivText.innerHTML = item.title;

        const newDivInput = newDiv.querySelector('input');
        newDivInput.checked = item.checked;
        newDivInput.addEventListener('click',  (event) => {
            item.checked = event.target.checked;
        });

        newDiv.classList.remove('hidden');
        $('.my_list').append(newDiv);
}

const showTodo = (todoList) => {
    todoList.forEach(item => addTodo(item));
}

const delet = (array) => {
    array = array.filter(item => item===1)
}

const clearyList = () => {
    const list = document.querySelector(".my_list");
    list.innerHTML = '';
    console.log(list);
}

$('#add').on('click', () => {
    const inputValue = $('#new_item')[0].value;
    todoList.push({
        title: inputValue,
        color: 'randomColor',
        id: 'randomId',
        checked: false
    });
    clearyList();
    showTodo(todoList);
    $('#new_item')[0].value = '';
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