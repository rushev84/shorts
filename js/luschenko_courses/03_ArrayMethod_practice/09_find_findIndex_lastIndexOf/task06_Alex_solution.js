// TASK 06
//  По нажатию b-6 выполняется функция f6. Функция с помощью findIndex должна найти ПОСЛЕДНИЙ индекс элемента массива a6, значение которого лежит от a6_from до a6_to (больше a6_from но меньше a6_to). Вывести найденный индекс в out-6. Если значение не найдено то выводить false.


let a6 = [13, 15, 22, 23, 26, 35, 72];
let a6_from = 23;
let a6_to = 67;

const f6 = () => {
  // !!! проблема. Эта операция reverse поменяет и исходный масси
    // let reversedArray = a6.reverse();
    let a6_res = [...a6];// делаем копию
    a6_res.reverse(); // делаем разворот массива
    let index = a6_res.findIndex((item, index) => {
        if (item > a6_from && item < a6_to) {
            return true;
        }
    });
    console.log(a6);
    console.log(a6_res);
    console.log(index);
    document.querySelector('.out-6').textContent = index === -1 ? -1 : a6_res.length - index - 1;
}
document.querySelector('.b-6').addEventListener('click', f6);