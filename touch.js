var touchLog = {};

window.onload = function () {
  var rect;
  rect = document.getElementById('rectangle');
  rect.addEventListener("touchstart", touchStart, false);
  rect.addEventListener("touchend", touchEnd, false);
}

function touchStart (event) {
  touchLog.startX = event.changedTouches[0].screenX;
}

function touchEnd (event) {
  touchLog.endX = event.changedTouches[0].screenX;
  console.log(touchLog.startX, touchLog.endX)
  if (touchLog.endX < touchLog.startX) {
    document.getElementById('rectangle').style.background = '#00f';
  } else if (touchLog.endX > touchLog.startX){
    document.getElementById('rectangle').style.background = '#f00';
  }
}
