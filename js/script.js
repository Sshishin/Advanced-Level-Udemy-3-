"use strict";

// GET запрос - получение
// POST запрос - запрос на внесение изменений (постить)

// JSON - это вид объекта(или массива и тд) для передачи на сервер (в двойных кавычках)
// JavaScript Object Notation

// Это объект
const person = {
    name: 'Alex',
    tel: '+79004006565',
    parents: {
        mom: 'Anna',
        dad: 'John'
    }
};


// Это объект в формате JSON для передачи данных на сервер
// console.log(JSON.stringify(person));       //Так преобразуем в формат
// {"name":"Alex","tel":"+79004006565"}     //Так выглядит

JSON.stringify(person)  //Так преобразуем данные с сервера снова в объект


//Так можем делать глубокове клонирование объектов 
const clone = JSON.parse(JSON.stringify(person));
person.parents.mom = 'Kate';
console.log(person);
console.log(clone);