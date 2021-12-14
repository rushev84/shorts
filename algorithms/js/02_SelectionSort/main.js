function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    // находим индекс минимального элемента в массиве
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    // меняем итый и минимальный элемент местами
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
  }
  return arr
}

let testArray = [1, 5, 6, 8, 2, 4, 9, 0, 3, 7]

console.log(selectionSort(testArray))

// 1 итерация общего цикла
// min = 0
// после итераций мелкого цикла min = 7

// temp = arr[7], т.е. temp = 0
// arr[7] = arr[i], т.е. = arr[0], т.е. = 1
// arr[0] = 0

// итого получаем массив [0, 5, 6, 8, 2, 4, 9, 1, 3, 7]

// 2 итерация общего цикла
// min = 1
// после итераций мелкого цикла min = 7

// temp = arr[7], т.е. temp = 1
// arr[7] = arr[i], т.е. = arr[1], т.е. = 5
// arr[1] = 1

// итого получаем массив [0, 1, 6, 8, 2, 4, 9, 5, 3, 7]

// и т.д.
