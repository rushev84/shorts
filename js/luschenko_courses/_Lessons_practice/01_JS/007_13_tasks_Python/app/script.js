// Task 1
// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы которые меньше 5.
console.log('========= Task 1 =====================');
const a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];


// Задача 2
// Даны списки:
// a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// b2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// Нужно вернуть список, который состоит из элементов, общих для этих двух списков.
console.log('========= Task 2 =====================');
const a2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const b2 = [1, 7, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];


const f2_2 = () => {
    return a2.filter(item => b2.includes(item));
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


// Задача 4
// Напишите программу для слияния нескольких словарей в один.
// Допустим, вот наши словари:
console.log('========= Task 4 =====================');

const a4 = {1:10, 2:20};
const b4 = {3:30, 4:40};
const c4 = {5:50, 6:60};



// Задача 5
// Напишите код, который переводит целое число в строку
console.log('========= Task 5 =====================');

const a5 =  456;


// Задача 6
// Напишите проверку на то, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.
console.log('========= Task 6 =====================');

const a6 = 'abba1';


// Задача 7
// Выведите первый и последний элемент списка.
console.log('========= Task 7 =====================');

const a7 = [0, 1, 2, 3, 4, 5, 6];


// Задача 8
// Напишите программу, которая принимает имя файла и выводит его расширение. Если расширение у файла определить невозможно, выбросите исключение.
console.log('========= Task 8 =====================');
const filename = 'only_adult_video.mp3';


// Задача 9
// Напишите программу, которая выводит чётные числа из заданного списка и останавливается, если встречает число 237.
console.log('========= Task 9 =====================');
const a9 = [    
    386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 
    399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 
];


// Задача 10
// Напишите программу, которая принимает два списка и выводит все элементы первого, которых нет во втором.
console.log('========= Task 10 =====================');

const a10 =['White', 'Black', 'Red'];
const b10 = ['Red', 'Green'];


// Задача 11
// Сложите цифры целого числа.
console.log('========= Task 11 =====================');
const a11 = 8947; // 8+9+4+7



// Задача 12
// Посчитайте, сколько раз символ встречается в строке.
console.log('========= Task 12 =====================');

const s12 = 'z';
const str12 = 'azazabrazzaza';




// Задача 13
// Нужно проверить, все ли числа в последовательности уникальны.
console.log('========= Task 13 =====================');
const a13 = [1,2,3,4,5,6,7];
