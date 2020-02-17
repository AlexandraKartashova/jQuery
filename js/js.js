const todoList = [];

const showTodo = (todoList) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = todoList[0].title;

        $('.my_list').append(newDiv);
}

const removeTodo = (item) => {

}

$('#add').on('click', () => {
    const inputValue = $('#new_item')[0].value;
    todoList.push({
        title: inputValue,
        color: 'randomColor',
        id: 'randomId',
        checked: false
    })
    showTodo(todoList)
    console.log('here will be our todoList: ', todoList)
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