export function getValue(arr, key) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][key])
  }
  return res
}

export function mapArray(arr, key) {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    res[arr[i][key]] = arr[i]
  }
  return res
}
