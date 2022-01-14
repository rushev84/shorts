const helpers = {
  getValue: function (arr, key) {
    console.log(arr)
    let res = []
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i][key])
    }
    return res
  },
  mapArray: function (arr, key) {
    let res = {}
    for (let i = 0; i < arr.length; i++) {
      res[arr[i][key]] = arr[i]
    }
    return res
  },
}

export const getValue = helpers.getValue
export const mapArray = helpers.mapArray
