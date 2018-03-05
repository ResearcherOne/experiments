var retimer = require('retimer')
var timer = retimer(function () {
  throw new Error('this should never get called!')
}, 20)
 
setTimeout(function () {
  timer.reschedule(50)
  setTimeout(function () {
    timer.clear()
  }, 10)
}, 10)