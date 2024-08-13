var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6 + 1); //1-6

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6 + 1); //1-6

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="It's a Draw!";
}