// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let v1 = 'hello'
console.log(v1)
let v2 = 'owu'
console.log(v2)
let v3 = 'com'
console.log(v3)
let v4 = 'ua'
console.log(v4)
let v5 = 1
console.log(v5)
let v6 = 10
console.log(v6)
let v7 = -999
console.log(v7)
let v8 = 123
console.log(v8)
let v9 = 3.14
console.log(v9)
let v10 = 2.7
console.log(v10)
let v11 = 16
console.log(v11)
let v12 = true
console.log(v12)
let v13 = false
console.log(v13)

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//

let firstName= 'Dmytro'
let middleName= 'Yuriyovich'
let lastName='Chubenko'

let person = `${firstName} ${middleName} ${lastName}`
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100
let b = '100'
let c = true
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let first = prompt('enter your name');
let last = prompt('enter your lastName');
let age = prompt('age');
console.log(`first: ${first} last: ${last} age: ${age}`)



