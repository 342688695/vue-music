import originJsonp from 'jsonp'

/**
 * Promise 二次封装 jsonp 方法
 * @export
 * @param {String} url
 * @param {Object} data
 * @param {Object} option
 * @returns
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * 将对象参数，转换为 URLQuery 参数
 * @export
 * @param {Object} data
 * @returns {String}
 */
export function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
