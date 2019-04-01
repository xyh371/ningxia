const size = 200
const screen = 375

const flexFn = () => {
  const windowWidth = window.outerWidth
  const ratio = windowWidth / screen
  const newSize = ratio * (size / 2)
  document.querySelector('html').style.fontSize = newSize + 'px'
}
flexFn()

window.addEventListener('resize', () => {
  flexFn()
}, false)
