alert("Hello Drum Kit Website");


//Detecting button press


$(".drum").click(function()
{
  var x = this.innerHTML;
  makeSound(x);
  btnAnimation(x);
});


//Detecting keyboard press

$(document).keypress(function(event)
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
  $("."+currentKey).addClass("pressed");

  setTimeout(function(){
    $("."+currentKey).removeClass("pressed");
  }, 50);
}

function rightAnimation()
{
  $(".right").addClass("hidden");

  setTimeout(function(){
    $(".right").removeClass("hidden");
  }, 250);
}
