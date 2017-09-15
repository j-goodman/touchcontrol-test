window.onload = function () {
  var rect;
  rect = document.getElementById('rectangle');
  console.log(rect);
  rect.addEventListener("touchstart", touchStart, false);
  rect.addEventListener("touchend", touchEnd, false);
}

function touchStart (event) {
  document.getElementById('rectangle').style.background = '#00f';
  document.getElementById('paragraph').innerText = JSON.stringify(event);
}

function touchEnd (event) {
  document.getElementById('rectangle').style.background = '#f00';
  document.getElementById('paragraph').innerText = JSON.stringify(event);
}
