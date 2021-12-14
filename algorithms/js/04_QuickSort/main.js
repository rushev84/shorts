function quickSort(arr) {
  if (arr.length < 2) return arr

  const pivot = arr[0]
  let less = []
  let greater = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater))
}

console.log(quickSort([3, 5, 4, 8, 9, 1, 0]))
