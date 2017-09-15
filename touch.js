window.onload = function () {
  var rect;
  rect = document.getElementById('rectangle');
  console.log(rect);
  rect.addEventListener("touchstart", touchStart, false);
  rect.addEventListener("touchend", touchEnd, false);
}

function touchStart () {
  document.getElementById('rectangle').style.background = '#00f';
}

function touchEnd () {
  document.getElementById('rectangle').style.background = '#f00';
}
