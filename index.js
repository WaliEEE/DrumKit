alert("Hello Drum Kit Website");

var noButtons=document.querySelectorAll(".drum").length;
var a=0;

//Detecting button press

while (a<noButtons)
{
  document.querySelectorAll(".drum")[a].addEventListener("click", function()
  {
    var x = this.innerHTML;
    makeSound(x);
    btnAnimation(x);
  });
  a++;
}

//Detecting keyboard press

document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  btnAnimation(event.key);
})


function makeSound(key){

  switch (key)
  {
    case 'a':
    var aud1 = new Audio("sounds/tom-1.mp3");
    aud1.play();
    break;

    case 'b':
    var aud2 = new Audio("sounds/tom-2.mp3");
    aud2.play();
    break;

    case 'c':
    var aud3 = new Audio("sounds/tom-3.mp3");
    aud3.play();
    break;

    case 'd':
    var aud4 = new Audio("sounds/tom-4.mp3");
    aud4.play();
    break;

    case 'e':
    var aud5 = new Audio("sounds/kick-bass.mp3");
    aud5.play();
    break;

    case 'f':
    var aud6 = new Audio("sounds/snare.mp3");
    aud6.play();
    break;

    case 'g':
    var aud7 = new Audio("sounds/crash.mp3");
    aud7.play();
    break;

    default:
    rightAnimation();
    break;
  }

}

function btnAnimation(currentKey)
{
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 50);
}

function rightAnimation() {

  document.querySelector(".right").classList.add("hidden");
  setTimeout(function(){
    document.querySelector(".right").classList.remove("hidden");
  }, 250);


}