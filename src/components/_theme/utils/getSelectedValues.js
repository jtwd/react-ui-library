/**
 * Returns an array of selected values
 * @param {Array} list - Array of objects
 * @param {String} selector - key of object that can return boolean to mark selected (eg checked: true)
 * @param {String} returnSelector - key of object that should be returned as a selected value (eg value or id)
 * @return {Array}
 */
export default function getSelectedValues(list, selector, returnSelector) {
  const selected = []
  for (let i = 0, x = list.length; i < x; i+=1) {
    if (list[i][selector]) {
      selected.push(list[i][returnSelector])
    }
  }
  return selected
}
