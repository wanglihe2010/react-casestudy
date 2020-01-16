export default  function convertArrayToObject(array) {
  return array.reduce((object, item, index) => ({...object, [item.id || index]: item}), {})
}