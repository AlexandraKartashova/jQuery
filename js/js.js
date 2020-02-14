"use strict";


var todoItems = [];

function addTodo(text) {
    const todo = {
        title: text,
        color: 'random color',
        id: Date.now(),
        checked: false
    };

    todoItems.push(todo);
    const list = document.querySelector('our__list');
    list.insertAdjacentHTML('beforeed',`
    <li class = 'todo-item' data-key = '${todo.id}'>
    <input id = '${todo.id}' type = 'checkbox'/>
    <label for = '${todo.id}' class = 'tick'></label>
    <span>${todo.id}</span>
    </li>
    `);
}

const form = document.querySelector('button_add');
form.addEventListener('submit', event => {
event.preventDefault();
const input = document.querySelector('button_input');

const text = input.value.trim();
if (text !== ''){
    addTodo(text);
    input.value = '';
    input.focus();
}
});

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