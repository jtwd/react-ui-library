import shortid from 'shortid'

function arrayOfObjects(arr, param) {
  return arr.map(item => {
    const obj = {}
    obj[param] = item
    return obj
  })
}

export default function keyIndex(arr) {
  if (!arr.length) return []
  const objArray = (typeof arr[0] === 'object') ? arr : arrayOfObjects(arr, 'value')
  return objArray.map(objItem => {
    const newObj = objItem
    newObj.key = shortid.generate()
    return newObj
  })
}