export default {
  click: e => {
    console.log("click")
  },

  dblclick: e => {
    console.log("dbl")
  },

  dragenter: e => {
    console.log("dragenter")
  },

  dragleave: e => {
    console.log("dragleave")
  },

  dragover: e => {
    console.log("dragover")
  },

  keydown: e => {
    console.log("keydown")
  },

  keypress: e => {
    console.log("keypress")
  },

  keyup: e => {
    console.log("keyup")
  },

  mousedown: e => {
    console.log("mousedown")
  },

  mousemove: e => {
    console.log("mousemove")
    console.log(e)
    console.log(document.elementFromPoint(e.clientX,e.clientY))
    // console.log(e.clientX, e.clientY, e.movementX, e.movementY)
  },

  mouseout: e => {
    console.log("mouseout")
    console.log(e.clientX, e.clientY, e.movementX, e.movementY)
  },

  mouseover: e => {
    console.log("mouseover")
    console.log(e.clientX, e.clientY, e.movementX, e.movementY)
  },

  mouseup: e => {
    console.log("mouseup")
    console.log(e.clientX, e.clientY, e.movementX, e.movementY)
  },

  mousewheel: e => {
    console.log("mousewheel")
  },

  touchend: e => {
    console.log("touchend")
  },

  touchmove: e => {
    console.log("touchmove")
  },

  touchstart: e => {
    console.log("touchstart")
  },

  wheel: e => {
    console.log("wheel")
  }
}
