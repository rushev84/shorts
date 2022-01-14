// Task 1
// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы в .out-1, которые меньше 5.
console.log('========= Task 1 =====================');
const a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const f1 = () => {
    // в лоб
    let out = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 5) out += a[i] + ' ';
    }
    console.log(out);
}
f1();

const f1_2 = () => {
    // через массив
    let res = a.filter(item => item < 5);
    console.log(res);
}
f1_2();

// Задача 2
// Даны списки:
// a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// Нужно вернуть список, который состоит из элементов, общих для этих двух списков.
console.log('========= Task 2 =====================');
const a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const b2 = [1, 7, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const f2 = () => {
    // в лоб
    // ! Коллизия
    let res = [];
    for (let i = 0; i < a2.length; i++) {
        if (b2.includes(a2[i])) res.push(a2[i]);
    }
    return res;
}
console.log(f2());

const f2_2 = () => {
    // в лоб
    // ! Коллизия
    let res = a2.filter(item => b2.includes(item));
    return res;
}
console.log(f2_2());

// Задача 3
// Отсортируйте словарь по значению в порядке возрастания и убывания.
// d = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
console.log('========= Task 3 =====================');
let d3 = {
    1: 22, 
    3: 4, 
    4: 3, 
    2: 1, 
    0: 0,
    9 : 9
}
// console.log(d3); // готово
// for (let key in d3) {
//     console.log(d3[key]);
// }

function ascFunc(a, b) {
    return a - b;
}

function descFunc(a, b) {
    return b - a;
}

const f3 = (obj, type = 'asc') => {
    let val = Object.values(obj);
    if (type === 'asc') return val.sort(ascFunc);
    if (type === 'desc') return val.sort(descFunc);
}

console.log(f3(d3, 'asc'));
console.log(f3(d3, 'desc'));

// Задача 4
// Напишите программу для слияния нескольких словарей в один.
// Допустим, вот наши словари:
console.log('========= Task 4 =====================');

const a4 = {1:10, 2:20}
const b4 = {3:30, 4:40}
const c4 = {5:50, 6:60}

const obj4 =  Object.assign({}, a4,b4,c4);
console.log(obj4);


// Задача 5
// Напишите код, который переводит целое число в строку
console.log('========= Task 5 =====================');

const a5 =  456;
const res5 = a5.toString()
console.log(res5);
console.log(typeof res5);

// Задача 6
// Напишите проверку на то, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.
console.log('========= Task 6 =====================');

const a6 = 'abba1';
const f6 = str => {
    return str === str.split('').reverse().join('');
}

console.log(f6(a6));

// Задача 7
// Выведите первый и последний элемент списка.
console.log('========= Task 7 =====================');

const a7 = [1, 2, 3, 4, 5];
console.log(a7[0], a7[a7.length -1]);

// Задача 8
// Напишите программу, которая принимает имя файла и выводит его расширение. Если расширение у файла определить невозможно, выбросите исключение.
console.log('========= Task 8 =====================');
const filename = 'only_adult_video.mp4';

const f8 = filename => {
    let res =  filename.split('.').pop();
    if (res !== filename) return res;
    throw new UserException("Extension not found");
}
console.log(f8(filename));

// Задача 9
// Напишите программу, которая выводит чётные числа из заданного списка и останавливается, если встречает число 237.
console.log('========= Task 9 =====================');
const a9 = [    
    386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 
    399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 
];

const f9 = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 237) return;
        if (arr[i] % 2 === 0) console.log(arr[i]);
    }
}

// f9(a9);

// Задача 10
// Напишите программу, которая принимает два списка и выводит все элементы первого, которых нет во втором.
console.log('========= Task 10 =====================');

const a10 =['White', 'Black', 'Red'];
const b10 = ['Red', 'Green'];

const f10 = (ar1, ar2) => {
    return ar1.filter(item => !ar2.includes(item));
}

console.log(f10(a10, b10));


// Задача 11
// Сложите цифры целого числа.
console.log('========= Task 11 =====================');
const a11 = 8947;
let res11 = a11.toString().split('').reduce((accum, item) => {return accum+=+item},0);
console.log(res11);

// Задача 12
// Посчитайте, сколько раз символ встречается в строке.
console.log('========= Task 12 =====================');

const s12 = 'z';
const str12 = 'azazabrazzaza';

const f12 = (str, s) => {
    let index = str.indexOf(s);
    let count = 0;
    while (index !== -1) {
        count++;
        index = str.indexOf(s, index + 1);
    }
    return count;
}

console.log(f12(str12, s12));


// Задача 13
// Нужно проверить, все ли числа в последовательности уникальны.
console.log('========= Task 13 =====================');
const a13 = [1,2,3,4,5,6,7];

let s13 = new Set(a13);
console.log(a13.length === s13.size);