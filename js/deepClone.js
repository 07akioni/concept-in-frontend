function shallowClone (source) {
  const target = {}
  for (let key in source) {
    if (source.hasOwnProperty(i)) target[key] = source[key]
  }
}

function shallowClone2 (source) {
  const target = {}
  for (let key of Object.getOwnPropertyNames()) {
    /*
     * symbol key is not considered
     * property descriptor is not correctly set
     * array source is not considered
     */
    target[key] = source[key]
  }
}

/*
 * this method come's from MDN
 */
function shallowClone3 (source) {
  if (Object.prototype.toString.call(source) === '[object Object]')
  return Object.create(
    Object.getPrototypeOf(source),
    Object.getOwnPropertyDescriptors(source)
  )
}

shallowClone3({ 1: 1 })