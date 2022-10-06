for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", clicked);
}

function clicked() {
  var btn = this.innerHTML;
  play_music(btn);
  animation(btn);

}
function play_music(key){
  switch (key) {
    case 'w':
      music("sounds/tom-1.mp3");

      break;
    case 'a':
      music("sounds/tom-2.mp3");

      break;
    case 's':
      music("sounds/tom-3.mp3");

      break;
    case 'd':
      music("sounds/tom-4.mp3");

      break;
    case 'j':
      music("sounds/snare.mp3");

      break;
    case 'k':
      music("sounds/crash.mp3");

      break;
    case 'l':
      music("sounds/kick-bass.mp3");

      break;

    default:

  }
}
function animation(key){
  var anm=document.querySelector("."+key);
  anm.classList.add("pressed");
  setTimeout(function(key){
    anm.classList.remove("pressed");
  },100);
}
function music(source) {
  var aud = new Audio(source);
  aud.play();
}
document.addEventListener("keydown",function (event){
  play_music(event.key);
  animation(event.key);
})
// or use this
// document.querySelector("button").addEventListener("click",function (){
//   alert("hieeee i am here ");
// });
