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
// Возвращает новый массив

// const arr = [1, 2, 3, 4, 5];

// const filt = arr.filter((n) => {
//     return n % 2 == 0;
// });

// console.log(filt);
// (2,4) - результат


// Функция предикат возвращает булевое значение




// **************************** Метод .every и .some для массива 
// Some вернет тру если хоть какой-то элемент соответствует услвоиям
// Every вернет true если все элементы соответствуют условию

// const arr = [1, 'John', 3, 4, 5];

// const arr2 = arr.some(item => typeof(item) === 'number');
// const arr3 = arr.every(item => typeof(item) === 'number');

// console.log(arr2);
// console.log(arr3);




// **************************** Метод .reduce для массива 
// Очень похож на предыдущие методы map и filter, но здесь добаляется значение аккумулятор (накапливает изменения каждой итерации)
// Аргумент аккумулятора всегда стоит первый и может быть или не быть с начальным значением

// const bankAccounts = [
//     { id: "123", amount: 19 },
//     { id: "345", amount: 33 },
//     { id: "567", amount: 4 },
//     { id: "789", amount: 20 },
//   ]
  
//   const totalAmount = bankAccounts.reduce(

//     // Аргумент sum является аккумулятором,
//     // в нём храним промежуточное значение

//     function (sum, currentAccount) {

//       // Каждую итерацию берём текущее значение
//       // и складываем его с количеством денег
//       // на текущем счету

//       return sum + currentAccount.amount
//     },
//     0 // Начальное значение аккумулятора
//   )
  
//   console.log(totalAmount)
//   // 76


// **************************** Деструктуризация (...arr) 
// Разбивает элемент например массив на отдельные объекты

// Так можно легко сделать массив из строки
// var str = "hello";
// var chars = [...str];

// console.log(chars);
  

// var mid = [3, 4];
// var arr = [1, 2, ...mid, 5, 6];

// console.log(arr);

// [1, 2, 3, 4, 5, 6]



// **************************** Метод .find для массива 
// Вернет значение подходящее под условия поиска
// В метод find аргументом передается функция с нужным условием которая возвращает true || false
// В отличие от filter возвращает не все подходящие элементы, а только первый


// **************************** Метод .indexOf для массива 
// Возвращает индекс первого найденного элемента переданного в аргумент или вернет -1 если ничего нет
// Всегда пишется с проверкой
// В основном для строк

// const example = ['чебурашка', 'гена', 'шапокляк', 'лариска']

// console.log(example.indexOf('гена'))
// // 1


// **************************** Метод .indexOf для массива 
// Больше подходит для массивов
// Если нашел то вернет true
// С объектами могут быть проблемы и если они похожи то не значит что это одно и тоже и вернется false

// const dead = ['Джофри', 'Нед Старк', 'Король ночи']
// const isJonDead = dead.includes('Джон Сноу')
// console.log(isJonDead)
// // false

// const isJoffreyDead = dead.includes('Джофри')
// console.log(isJoffreyDead)
// // true



// **************************** Метод .splice и .slice для массива 

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// Удаляем 2 элемента у 4-ого элемента
// var deleItems = arr.splice (3, 2);

// Добавляем 2 элемента начиная со второго элемента массива и говорим что к удаленю 0 элементов
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// var arr2 = arr.splice (2, 0, 100, 101);

// Используем тогда когда нам нужна только часть массива
// Тут говорим что вырезаем блок начиная со второго элемента и заканчиваем до 6-ого
// var slicedArr = arr.slice (2, 6);




// **************************** Коллекция Set - для хранения данных любого типа, но хранит только уникальные значения 

// Создается через конструктор
// Получить напрямую элемент из коллекции нельзя, но можно получить в "обход" использую например forEach()
// Объекты если и выглядят одинаково не удут равны друг другу так как храняться по ссылке

// const uniqueIds = new Set()

// uniqueIds.add(123)
// uniqueIds.add(456)
// uniqueIds.add(111)
// uniqueIds.add(123)

// console.log(uniqueIds.size)
// // 3

// console.log(uniqueIds.has(111))
// // true

// uniqueIds.delete(111)
// console.log(uniqueIds.size)
// // 2

// uniqueIds.clear()
// console.log(uniqueIds.size)
// // 0


// Легкий способ преобразования уникального массива из неуникального 

// const nonUnique = [1, 2, 3, 4, 5, 4, 5, 1, 1]
// const uniqueValuesArr = [...new Set(nonUnique)]

// console.log(uniqueValuesArr)
// // [1, 2, 3, 4, 5]



// **************************** Promise - дословно это обещание
// Если произошло что-то, то мы обещаем, что выполниться какое-то действия
// Инструмент работы с асинхронным кодом
// Огромным плюсов промисов является то, что мы можем работать с ними по четкой цепочки действий
// Resolve и then - это связующие звенья цепи и 
// Resolve и reject перед стеком сначала попадают в окружение webAPI

// *Без промисов

// console.log('Запрос данных');

// setTimeout(() => {
//     console.log('Подготоввка данных...')

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'ordered';
//         console.log(product);
//     }, 2000);
// }, 2000);


// *С промисами

// console.log('Запрос данных');

// const req = new Promise(function(resolve, reject) {     //Первый аргумент если выполнилось действие, второй если не выполнилось
//     setTimeout(() => {
//         console.log('Подготоввка данных...')
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });

// // Последовательное вытекание одних запросов в другие при успешном исходе

// req2.then(data => {
//     console.log(data);
// });

// });     //Это тот метод который будет выполняться на промисе в случае положительного исхода, то есть на resolve()

// С помощью промисов мы добиваемся четкого выполнения когда друг за другом даже при смеси синхронного и асинхронного кода

// req.then((product) => {     //ПР
//         return new Promise((resolve, reject) => {     //Через колбэк возвращам результат resolve
//             setTimeout(() => {
//                 product.status = 'ordered';
//                 resolve(product);    //Вариант когда все успешно
//                 reject();   //Если срабатывает reject, то скрипт пропускает элементы then и сразу переходит к catch
//             }, 2000);
//         });
// }).then(data => {
//     data.modify = true;     //Изменили объект 
//     return data;    //Вернули измененный объект
// }).then(data => {   //Передали модифицированный объект синхронным кодом для четкого выполнения друг за другом
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {      //Срабатывает при любом исходе и здесь например может быть функция по очищению кода
//     console.log('Процесс завершен');
// });

// const test = time => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(2000).then(() => {
// //     console.log('2000ms');
// // });
// // test(4000).then(() => {
// //     console.log('4000ms');
// // });

// //Может быть полезно например когда нужно сначала загрузить все картинки на странице и только после этого выполнять какие-то действия
// Promise.all([test(1000), test(2000)]).then(() => console.log('Все загружено'));     //Срабатывает тольо тогда, когда все указанные промисы загружены

// Promise.race([test(1000), test(2000)]).then(() => console.log('Самый быстрый загружен'));     //Так действие произойдет тогда, когда выполниться самый быстрый промис




// **************************** Основы асинхронности

// Главная проблема синхронного кода, то, что строки могут выполняться только по очереди и не может обрабатываться ничего более

// * Синхронная задержка

// function greet() {
//     console.log('Hello!')
//   }
  
//   delay(5000)
//   greet()
  
// 5 секунд потребуется на выполнение и ничем больше заняться не получиться


// * Асинхронная задержка

// setTimeout(function greet() {
//     console.log('Hello!')
//   }, 5000)
  
//   console.log("I'm being called before greet function.")
  
// Сначала выполниться последний консоль лог


// * Стек вызова убирает последний элемент первым и так по очереди как стопка книг 

// function outer() {
//     function inner() {
//       // Функция 3
//       console.log('Hello!')
//     }
  
//     // Функция 2
//     inner()
//   }
  
//   // Функция 1
//   outer()
  

// * Стек вызова асинхронной функции

// function main() {
//     setTimeout(function greet() { //setTimeout то насдстройка над Js которая позволяет правильно интерпретировать поведение асинхронной функции в стеке   //setTimeout сразу выполняется и за ним следуют консоль bye, но webAPI запоминает что в таймауте есть колбэк функция которую нужно вызвать через 2 секунды
//       console.log('Hello!')
//     }, 2000)
  
//     console.log('Bye!')
//   }
  
//   main()
  



  // ****** fetch API
// API -это доступ к свойствам и методам какого-то продукта и возможность получить частичное управление
// Результатом вызова будет специальный объект Response
// У Response есть 2 важных поля, ok со значениями тру или фалс что говорит о успешности запроса и метод json который возвращает json
// Любой ответ на запрос через fetch() (например HTTP-код 400, 404 или 500) переводит Promise в состояние fulfilled. Промис перейдёт в состояние rejected только если запрос не случился из-за сбоя сети или что-то помешало выполнению fetch().



// fetch('https://jsonplaceholder.typicode.com/todos/1')   //Используем метод fetch который возвращает промис
//   .then(response => response.json())    //Используем для преобразование из Json в объект внутренний метод для fetch json который тоже возвращает промис
//   .then(json => console.log(json));     





// *************** Практика работы с массивами



// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];


// function showGoodFilms(arr) {
//     const rateOfObj = arr.filter(item => {
//         if(item.rating >= 8) {
//             return item;
//         }
//     });
//     return rateOfObj;

// }
// console.log(showGoodFilms(films));



// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);  
// }   //Была ошибка так как не польовался костылек через удаление объекта

// // function showListOfFilms(arr) {
// //     return arr.map(item => item.name).reduce((sum, current) => `${sum}, ${current}`);
// // }
// // console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//     return arr.map((item, i) => {   //Была ошибка так как пытался вернуть именно item.id и не получал объект
//         item.id = i;    //Здесь создаем ключ значение
//         return item;    //А здесь возвращаем целый объект
//     });
// }

// console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(item => {
//         if(item.id || item.id === 0) {      //Была ошибка так как снова решил что это костыль
//             return item;
//         }
//     });
// }

// console.log(checkFilms(tranformedArray));


// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//    return data.filter(item => item.amount > 0).reduce((sum, current) => typeof(sum) === 'object' ? sum.amount + current.amount : sum + current.amount);
// };  //При использовании reduce нужно явно указывать еще и значение else, так как при использовании if reduce всегда вовращает какое-либо значение;

// console.log(getPositiveIncomeAmount(funds));

// const getTotalIncomeAmount = (data) => {
//     const result = data.some(item => {
//         if(item.amount < 0) {
//             return item;
//         }
//     });
//     if(result === true) {
//         return data.reduce((sum, current) => typeof(sum) === 'object' ? sum.amount + current.amount : sum + current.amount);
//     } else {
//         getPositiveIncomeAmount();
//     }
// };

// console.log(getTotalIncomeAmount(funds));




// ********************* axios
// Ббилиотека работы с запросами 
// Многое автоматизировано и не нужно будет переписывать лишние строчки кода







// ********************* RegExp (Регулярные выраженияы)


// // Первый варинт создания
// new RegExp('pattern', 'flags')   //Паттерн это то что мы ищем

// // Второй и наиболее популярный вариант
// /pattern/f

// Метод search - достаточно простой и с g уже не работает

// const ans = prompt('Введите текст');

// const reg = /n/;


// Flags
// i - поиск вне зависимости от регистра
// g - поиск сразу нескольки вхождений
// m - многострочный режим

// console.log(ans.search(reg));   //Получаем позицию заданного паттерна в строке либо если паттерна нет тогда получаем -1


// const reg = /n/igm;
// console.log(ans.match(reg));    //Уже работает со многими флагами


// Метод replace с RegExp

// const pass = prompt('Password, please');

// console.log(pass.replace(/./g, '*'));       //Точка это значит все элементы    //Первым подставляем то что хотим заменить, второе на что именно
// console.log(pass.replace(/\./g, '*'));      //А так с помощью обратного слэша мы говорим что это не спецсимввол а просто точка


// console.log('12-34-56'.replace(/-/g, ':'));


// Методы только регулярных выражений

// const ans = prompt('Введите текст');

// const reg = /n/gi;

// console.log(reg.test(ans));


// Поиск по типу символа

// \d - поиск цифр
// \w - ищем все буквы
// \s - ищем все пробелы

// const ans = prompt('Введите число');

// const reg = /\d/g;

// console.log(ans.match(reg));


// Более сложные конструкции

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));

// console.log(str.match(/r2d2/gi));


// Обратные классе (НЕ что-то)

// \D - не цифра
// \W - не буква
// \M - не пробел

// const str = 'My name is R2D2';

// console.log(str.match(/\D/gi));







// ********************* Геттеры и Сеттеры

// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
  
//   // set fullName запустится с данным значением
//   user.fullName = "Alice Cooper";
  
//   alert(user.name); // Alice
//   alert(user.surname); // Cooper






// ********************* Инкапсуляция
// Закрытый доступ к внутренностям архитектуры
// То есть пользователи могут например изменить значения объекта
// Безопасность

// Пример без инкапсуляции

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name = 'Alex';

// ivan.say();


// Пример инкапсуляции


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// console.log(ivan.getAge());

// ivan.say();




// class User{
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;    //Нижнее подчеркивание говорит о том что такое свойство должно быть скрыто для доступа из вне
//     }
    
//    #surname = 'shishin'     //Приватное свойство которое влияет на код внутри конструктора но недоступно из вне

//     say() {
//         console.log(`Имя пользователя: ${this.name},${this.#surname}, возраст: ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.age);
// ivan.age = 99;      //Меняем через сеттер, без него это свойство будет недоступно
// console.log(ivan.age);
// ivan.say();




// ********************* Modules 
// Позволяет сохранять чистоту в глобальной области видимости

// const app = 123;

// const number = 1;

// (function(){    //Анонимная самовызывающаяся функция (IIFE)
//     let number = 2;
//     console.log(3);
//     console.log(number + 3);
// }());


// const user = (function(){
//     const privat = function() {     //Так мы создаем функцию которая не доступна снаружи
//         console.log('I am privat');
//     };

//     return {  
//         sayHello: privat    //Но с помощью возвращенного обхекта с методом который вызывает функцию мы можем выборочно давать доступ к элементам программы
//     };
// }());

// user.sayHello();





// ********************* Webpack



// function myModule() {
//     this.hello = function() {
//         console.log('Hello');
//     };

//     this.bye = function() {
//         console.log('Bye');
//     };
// }

// // myModule.export = myModule;

// // Стандрат ES6

// export default myModule;




// ********************* Errors (try, catch)




// try {   //Если все ок то просто выполняется этот блок кода и пропускается catch
//     console.log('Normal');
// } catch (error) {   //Если при выполнении try вылезла ошибка, тогда мы идем в блок catch
//     console.log('Error');
// } finally {
//     // Код который в конце вполниться вне зависимости был до этого try или catch
// }

// console.log(123);   //При использовании конструкции try/catch этот блок кода в любом случае выполниться





// ********************* es5,Babel
// Трансплитор переводит код в старый формат (Babel)
// Полифилы это участки кода которые эмулируют поведение новых стандартнов





// SPA - Single Page Applications 
//Это страницы в браузеры которые ведут себя как приложения, то есть все дкйствия происходят на одной странице






// ********************* jQuery

// import $ from 'jquery';

// // Примеры кода библиотеки

// //Получения элемента со страницы
// $('#btn');    //Это аналог для document.querySelector('#btn')

// $(document).ready(function() {  //Когда документ прогрузиться
//     $('.list-item:first').hover(function() {    //То для первого элемента при наведении
//         $(this).toggleClass('active');  //То меняем класс на active
//     });  

//     $('.list-item:eq(2)').on('click', function() {  //Вешаем обработчик событий on на 3-ий элемент
//         $('.image:even').fadeToggle('slow');   //И меняем все нечетные картинки с помощью анимации
//     });   
// });




// ********************* Функции генераторы
//Результат выдается последовательно
// То есть каждый новый вызов функции будет давать новый результат


// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }  

// const str = generator();
// console.log(str.next()); 
// console.log(str.next()); 
// console.log(str.next().value);
// console.log(str.next()); 
// console.log(str.next());
// console.log(str.next()); 
// console.log(str.next()); 


// function* count(n) {
//     for(let i = 0; i <= n; i++) {
//         yield i;
//     }
// }

// // const counter = count(7);

// // console.log(counter.next());
// // console.log(counter.next());
// // console.log(counter.next());


// for(let k of count(8)) {
//     console.log(k);
// }






// ************* Event loop
// Сначала все асинхронные операции попадают в веб апи потоп в очередь и потом в стек вызова

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 2000);

// setTimeout(() => {
//     console.log('timeout');
// }, 4000);

// console.log(2);




// ************* Макро и микро задачи
// После выполенения макрозадачи (почти все действия) выполнются все микрозадача
// К микрозадачам относятся then catch finally

// function addX(x) {
//     return function(n) {
//        return n + x
//     }
//   }
   
//   const addThree = addX(3);
   
//   let d = addThree(c);
//   let res = addThree(c);
   
//   console.log(res)



// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     arr.forEach(elem => {
//         result.push(elem);
//     });

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }

// console.log(firstTask())


// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // Пишем решение вот тут
//     const newArr = data.map(elem => {
//         if(typeof(elem) === 'number') {
//            return elem * 2;
//         }

//         return elem + ' - done';
//     });
    
    
//     // Не трогаем
//     return newArr;
// }

// console.log(secondTask() )



// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = (data.length - 1); i >= 0; i--) {
//         result.push(data[i]);
//     }
    
//     // Не трогаем
//     return result;
// }

// console.log(thirdTask())




// function sayHello(name) {
//     return `Привет,${name}!`; 
// }

// function returnNeighboringNumbers(n) {
//     return [(n - 1), n , n + 1];
// }

// function getMathResult(base, multi) {
//     let sum = 0;
//     let finalStr = '';

// if(base === 0 || base < 0 || typeof(base) !== 'number') {
//     return base;
// }

// for(let i = 0; i < multi; i++) {
//     sum += base;

//     if(i < 1) {
//         finalStr += sum;
//     } else {
//         finalStr += '---' + sum;
//     }
// }

//     return finalStr;
// }

// console.log(getMathResult(3, 10));



// function getTimeFromMinutes(hour) {
//     let result = [];

    

//     if(hour < 60 && hour > 0) {
//         result.push(0);
//         result.push(Math.floor(hour) % 60);
//     } else if(hour < 0) {
//         return 'Ошибка, проверьте данные';
//     } else {
//         result.push(Math.floor(hour / 60));
//         result.push(Math.floor(hour) % 60);
//     }

//     if(result[0] > 0 && result[0] != 1) {
//         return `Это ${result[0]} часа и ${result[1]} минут`;
//     } else if(result[0] === 1) {
//         return `Это ${result[0]} час и ${result[1]} минут`;
//     } else {
//         return `Это ${result[0]} часов и ${result[1]} минут`; 
//     }
// }

// console.log(getTimeFromMinutes(50.1));


// function findMaxNumber(arr1, arr2, arr3, arr4) {
//     const array = [];
//     array.push(arr1);
//     array.push(arr2);
//     array.push(arr3);
//     array.push(arr4);

//     const total = array.sort(function(a, b) {
//         return b - a;
//     });
//     return total[0];
// }

// console.log(findMaxNumber('10', 1, 5, 3)); 



// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

// function sortStudentsByGroups(arr) {
//     const newArr = arr.sort();
//     const mainArr = [];

//     for(let i = 0; i < 3; i++) {
//         mainArr.push([]);
//     }

//     newArr.forEach((elem, ind) => {
//         if(ind <= 2) {
//             mainArr[0].push(elem);
//         } else if(ind <= 5) {
//             mainArr[1].push(elem);
//         } else if(ind <= 8) {
//             mainArr[2].push(elem); 
//         }
//     });

//     if(arr.length < 10) {
//         mainArr.push('Оставшиеся студенты: -');
//         return mainArr;
//     }
                
//     if(arr.length > 9) {
//         let str = 'Оставшиеся студенты: ';
            
//         for(let j = 9; j < arr.length; j++) {
//             if(arr.slice(-1) == arr[j]) {
//                 str += arr[j];
//             } else {
//                 str += arr[j] +', ';
//             }
//         }
    
//     mainArr.push(str);
//     return mainArr;
//    }
// }
// console.log(sortStudentsByGroups(students))



// Еще один вариант решения задачи основанный на изменении самого массива
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

// console.log(students.splice(0,3));   //Удалили элементы
// console.log(students);   //Следующие элементы встали на место прошлых



// function fib(num) {
//     let str = '';
//     const arr = [0, 1];

//     if(num % 1 !== 0 && num % 2 !== 0) {
//         return '';
//     }

//     if(num === 1) {
//         return '0';
//     }

//     if(typeof(num) !== 'number' || num === 0) {
//         return '';
//     }

//     for(let i = 0; i < (num - 2); i++) {
//        arr.push((arr[i] + arr[i + 1]));
//     }

//     arr.forEach((elem, ind) => {
//         ind === (arr.length - 1) ? str += elem : str += (elem + ' ');
//     });
//     return str;
// }

// console.log(fib(7.3));