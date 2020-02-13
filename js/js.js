"use strict";
/*

function color_randon( max, min){
    return Math.floor(Math.random() * (max - min)) + min;
}
*/
// check off specific todos by clicking 
$('#add').click(function(){
    $("ul").after("<li><input type='checkbox' /></li>");
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