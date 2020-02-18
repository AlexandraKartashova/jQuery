let todoList = [];
let color = ['red', 'blue', 'yellow', 'orange', 'lightblue', 'olive']; // рандомные цвета

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

const btnRed = document.getElementById('red');
const btnOrange = document.getElementById('orange');
const btnBlue = document.getElementById('blue');
const btnGreen = document.getElementById('green');
const btnYellow = document.getElementById('yellow');
const btnLightblue = document.getElementById('lightblue');

const addTodo = (item) => {
        const template = document.querySelector(".clone"); //созд клон блока
        const newDiv = template.cloneNode(true);

        const newDivText = newDiv.querySelector('.clone__text');
        const editInput = newDiv.querySelector('.clone__input')
        newDivText.innerHTML = item.title;
        newDivText.addEventListener('click',  () => {
            clickTextTodoHandler(newDivText, editInput, item);
        });

        const newDivInput = newDiv.querySelector('.inop__check');
        newDivInput.checked = item.checked;

        newDivInput.addEventListener('click',  (event) => {
        item.checked = event.target.checked;
        
    });
        
        newDiv.classList.remove('hidden');// убираем фон клон
        $('.my_list').append(newDiv);
        newDiv.style.backgroundColor = item.color;

        btnRed.addEventListener('click',  () => {
            if(item.checked == true){
            item.color = color[0];
            newDiv.style.backgroundColor = item.color;
            }
        });

        btnBlue.addEventListener('click',  () => {
                    if(item.checked == true){
                    item.color = color[1];
                    newDiv.style.backgroundColor = item.color;
                    }
                });
        btnYellow.addEventListener('click',  () => {
                    if(item.checked == true){
                    item.color = color[2];
                    newDiv.style.backgroundColor = item.color;
                    }
                });

        btnOrange.addEventListener('click',  () => {
            if(item.checked == true){
            item.color = color[3];
            newDiv.style.backgroundColor = item.color;
            }
        });

        btnLightblue.addEventListener('click',  () => {
            if(item.checked == true){
            item.color = color[4];
            newDiv.style.backgroundColor = item.color;
            }
        });

        btnGreen.addEventListener('click',  () => {
            if(item.checked == true){
            item.color = color[5];
            newDiv.style.backgroundColor = item.color;
            }
        });
}

const showTodo = (todoList) => {
    todoList.forEach(item => addTodo(item));
}


del.onclick = () => {
    todoList = todoList.filter((item) => !item.checked);
    clearyRender();
    showTodo(todoList);
}


const clearyRender = () => {
    const list = document.querySelector(".my_list");
    list.innerHTML = '';
}

$('#add').on('click', () => {
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
    }
    else alert('Input text');
    console.log(todoList);

})


// red.onclick = () => {
//     newColor = todoList.filter((item) => item.checked)
//     $(".clone").css("backgroundColor", "red");
//     console.log(todoList.filter((item) => item.checked));
// }

// orange.onclick = () => {
//     todoList = todoList.filter((item) => !item.checked);
//     $(".clone").css("backgroundColor", "orange");
//     showTodo(todoList);
// }

// blue.onclick = () => {
//     todoList = todoList.filter((item) => !item.checked);
//     $(".clone").css("backgroundColor", "blue");
//     showTodo(todoList);
// }

// green.onclick = () => {
//     todoList = todoList.filter((item) => !item.checked);
//     $(".clone").css("backgroundColor", "olive");
//     showTodo(todoList);
// }

// yellow.onclick = () => {
//     todoList = todoList.filter((item) => !item.checked);
//     $(".clone").css("backgroundColor", "yellow");
//     showTodo(todoList);
// }

// lightblue.onclick = () => {
//     todoList = todoList.filter((item) => !item.checked);
//     $(".clone").css("backgroundColor", "lightblue");
//     showTodo(todoList);
// }



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