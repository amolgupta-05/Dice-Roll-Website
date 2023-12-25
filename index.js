var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceSrc= "./images/dice"+randomNumber1+".png";
var image1= document.querySelector(".img1");
image1.setAttribute("src",randomDiceSrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceSrc2= "./images/dice"+randomNumber2+".png";
var image2= document.querySelector(".img2");
image2.setAttribute("src",randomDiceSrc2);
// var randomNumber2 = Maths.floor(Math.random()*6)+1;
// var randomDiceSrc2 = "./images/dice"+randomNumber2+".png";
// var image2= document.querySelectorAll(".img2");
// image2.setAttribute("src", randomDiceSrc);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins !";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins !";
}
else {document.querySelector("h1").innerHTML= "Draw!";}