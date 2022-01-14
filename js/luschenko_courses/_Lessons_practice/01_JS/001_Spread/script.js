const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']

// Merge

const arrMerge = [...arr1, ...arr2]
console.log(arrMerge) // [1, 2, 3, 'a', 'b', 'c']

// Clone

const arrClone = [...arr1]
console.log(arrClone) // [1, 2, 3]

// string -> array

const arr3 = [...'hello']
console.log(arr3) // ['h','e','l','l','o']

// set -> array

const arr4 = [...new Set([1, 1, 2, 3, 4, 2])]
console.log(arr4) // [1, 2, 3, 4]

// Function arguments

function test() {
  console.log([...arguments])
}

test(3, 4, 5, 6, 7) // [3, 4, 5, 6, 7]

// node list -> array

let p = document.querySelectorAll('p')
console.log([...p]) // array
