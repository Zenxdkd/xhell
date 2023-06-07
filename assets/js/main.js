console.log("x");

let counter = 0; let Title = 'hell'; let direction = false;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "" : Title.slice(0, counter);
    document.title =  'x' + newtitle;
}, 400)


window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

function audioPlay() {
  var audio = document.getElementById("audio");
  audio.volume = 0.3;
  audio.play()
}

function videoPlay() {
  var video = document.getElementById("video");
  video.play()
}

document.onkeypress = function (event) {
  event = (event || window.event);
  return keyFunction(event);
}
document.onmousedown = function (event) {
  event = (event || window.event);
  return keyFunction(event);
}
document.onkeydown = function (event) {
  event = (event || window.event);
  return keyFunction(event);
}

//Disable right click script 
var message="Sorry, right-click has been disabled"; 

function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false")

function keyFunction(event){
  //"F12" key
  if (event.keyCode == 123) {
      return false;
  }

  if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
  }
  //"J" key
  if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
      return false;
  }
  //"S" key
  if (event.keyCode == 83) {
     return false;
  }
  //"U" key
  if (event.ctrlKey && event.keyCode == 85) {
     return false;
  }
  //F5
  if (event.keyCode == 116) {
     return false;
  }
  
}
