const num1 = Math.ceil(Math.random() * 6);
const num2 = Math.ceil(Math.random() * 6);

var img1 = document.getElementsByClassName("img1");
var imageSrc1 = "/images/" + "dice" + num1 + ".png";
img1[0].setAttribute("src", imageSrc1);

var img2 = document.getElementsByClassName("img2");
var imageSrc2 = "/images/" + "dice" + num2 + ".png";
img2[0].setAttribute("src", imageSrc2);

var heading = document.querySelector("h1");

if (num1 > num2) {
  heading.innerHTML = "Player 1 wins!!!";
} else {
  if (num1 < num2) {
    heading.innerHTML = "Player 2 wins!!!";
  } else {
    heading.innerHTML = "Draw!!!!!";
  }
}
