function map(arr, key) {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    res[arr[i][key]] = arr[i]
  }
  return res
}

export default map
