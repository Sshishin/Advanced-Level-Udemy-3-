"use strict";

// // GET запрос - получение
// // POST запрос - запрос на внесение изменений (постить)

// // JSON - это вид объекта(или массива и тд) для передачи на сервер (в двойных кавычках)
// // JavaScript Object Notation

// // Это объект
// const person = {
//     name: 'Alex',
//     tel: '+79004006565',
//     parents: {
//         mom: 'Anna',
//         dad: 'John'
//     }
// };


// // Это объект в формате JSON для передачи данных на сервер
// // console.log(JSON.stringify(person));       //Так преобразуем в формат
// // {"name":"Alex","tel":"+79004006565"}     //Так выглядит

// JSON.stringify(person)  //Так преобразуем данные с сервера снова в объект


// //Так можем делать глубокове клонирование объектов 
// const clone = JSON.parse(JSON.stringify(person));
// person.parents.mom = 'Kate';
// console.log(person);
// console.log(clone);



// ****************** AJAX (Asynchronous Javascript and XML) **********************

// AJAX - технология бесшовного обновления данных (обновляет только часть интерфейса)

// Получаем данные с сервера ***************************

// Калькулятор валют

const inputRub = document.querySelector('.rub');
const inputUsd = document.querySelector('.usd');

inputRub.addEventListener('input', () => {
    const request =  new XMLHttpRequest();
        // XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.
    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');     
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');   //Говорим какой именно файл нужно получить
    request.send();     //Отправляем запрос //Для POST запроса должен быть еще и аргумент body

    request.addEventListener('readystatechange', () => {    //При изменении стадии выполнения запроса будет что-то происходитьы // Но проще как обработчик использовать load, грубо говоря когда запрос готов
        if(request.readyState === 4 && request.status === 200) {    //Если запрос в стадии 'выполнено' и статус запроса 'хорошо' то что-то делаем
            console.log(request.response);  //Проверяем ответ сервера
            const data = JSON.parse(request.response);  //Получили уже стандартный объект
            inputUsd.value = inputRub.value / data.current.usd;     //Значение поля с долларом будет равно деленному значению введенному в рублевый инпут и делить на курс
        } else {
            inputUsd.value = 'Попробуйте еще раз';
        }
        
    });
    
});


// ****************************

// POST запросы и работа с MAMP в практическом уроке App Pratice #2

// ****************************


// **************************** Метод .map для массива 

// Map изменяет каждый айтем через работу со значение колбэк функции

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const squares = nums.map(function (num) {
//   return num * num
// })

// console.log(squares)
// // [1, 4, 9, 16, 25, 36, 49, 64, 81]


// **************************** Метод .filter для массива 

// Фильтрует значения массива через коллбэк функцию и убирает из массива неподходящие
// Но по сути это достаточно просто сделать с помощью цикла for
// Так хорошо фильтровать на трушные значения

// const arr = [1, 2, 3, 4, 5];

// const filt = arr.filter((n) => {
//     return n % 2 == 0;
// });

// console.log(filt);
// (2,4) - результат


// Функция предикат возвращает булевое значение