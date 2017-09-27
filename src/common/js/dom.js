/**
 * 判断是否有className
 * @export
 * @param {any} el
 * @param {any} className
 * @returns
 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

/**
 * 添加className
 * @export
 * @param {any} el
 * @param {any} className
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
