
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", buttonHandle);
// }
document.querySelectorAll(".drum")[0].addEventListener("click", music1);
document.querySelectorAll(".drum")[1].addEventListener("click", music2);
document.querySelectorAll(".drum")[2].addEventListener("click", music3);
document.querySelectorAll(".drum")[3].addEventListener("click", music4);
document.querySelectorAll(".drum")[4].addEventListener("click", music5);
document.querySelectorAll(".drum")[5].addEventListener("click", music6);
document.querySelectorAll(".drum")[6].addEventListener("click", music7);

var x1 = document.getElementById("myAudio1");
var x2 = document.getElementById("myAudio2");
var x3 = document.getElementById("myAudio3");
var x4 = document.getElementById("myAudio4");
var x5 = document.getElementById("myAudio5");
var x6 = document.getElementById("myAudio6");
var x7 = document.getElementById("myAudio7");

function music1(){
  x1.play();
}
function music2(){
  x2.play();
}
function music3()
{
  x3.play();
}
function music4(){
  x4.play();
}
function music5(){
  x5.play();
}
function music6(){
  x6.play();
}
function music7(){
  x7.play();
}
