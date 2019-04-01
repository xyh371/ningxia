const offset = (el) => {
  let top = 0
  let left = 0
  const width = el.clientWidth
  const height = el.clientHeight

  while (el) {
    top += el.offsetTop
    left += el.offsetLeft
    el = el.offsetParent
  }

  top -= window.scrollY

  return {
    top,
    left,
    width,
    height
  }
}

const position = (el) => {
  let top = 0
  let left = 0
  const width = el.clientWidth
  const height = el.clientHeight

  while (el) {
    top += el.offsetTop
    left += el.offsetLeft
    el = el.offsetParent
  }

  return {
    top,
    left,
    width,
    height
  }
}

export {
  offset,
  position
}
