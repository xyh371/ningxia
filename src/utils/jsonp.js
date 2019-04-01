const getParams = (data) => {
  let params = ''
  for (let key in data) {
    params += '&' + key + '=' + data[key]
  }
  return params
}
const jsonp = (url, data) => {
  return new Promise((resolve, object) => {
    const script = document.createElement('script')
    document.body.appendChild(script)
    const callbackName = 'a' + (+new Date())
    const params = getParams(data)
    script.src = url + '?callback=' + callbackName + '&' + params
    window[callbackName] = (res) => {
      resolve(res)
      document.body.removeChild(script)
      window[callbackName] = null
    }
  })
}
export default jsonp
