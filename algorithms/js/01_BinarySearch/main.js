const myArr = [1, 3, 5, 6, 12, 14, 19, 23, 24]

function binarySearch(arr, item) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = (low + high) / 2
    mid = Math.floor(mid)

    let guess = arr[mid]
    if (guess === item) {
      return mid
    }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

let result = binarySearch(myArr, 11)
console.log(result)

// Работа функции binarySearch аналогична работе метода indexOf

console.log(myArr.indexOf(11))
