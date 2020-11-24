
//Detecting button press

$(".drum").click(function()
{
  var x = this.innerHTML;
  makeSound(x);
  btnAnimation(x);
});


//Detecting keyboard press

$(document).keypress((event) => 
{
  makeSound(event.key);
  btnAnimation(event.key);
});


function makeSound(key)
{

  switch (key)
  {
    case 'a':
    new Audio("sounds/tom-1.mp3").play();
    break;

    case 'b':
    new Audio("sounds/tom-2.mp3").play();
    break;

    case 'c':
    new Audio("sounds/tom-3.mp3").play();
    break;

    case 'd':
    new Audio("sounds/tom-4.mp3").play();
    break;

    case 'e':
    new Audio("sounds/kick-bass.mp3").play();
    break;

    case 'f':
    new Audio("sounds/snare.mp3").play();
    break;

    case 'g':
    new Audio("sounds/crash.mp3").play();
    break;

    default:
    rightAnimation();
    break;
  }

}


function btnAnimation(currentKey)
{
  $("."+currentKey).addClass("pressed");

  setTimeout(function()
  {
    $("."+currentKey).removeClass("pressed");
  }, 50);
}

function rightAnimation()
{
  $(".right").addClass("hidden");

  setTimeout(function()
  {
    $(".right").removeClass("hidden");
  }, 250);
}
