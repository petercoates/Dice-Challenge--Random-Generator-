var randNum1 = Math.floor((Math.random() * 6) + 1);

var imgSource = "images/dice" + randNum1 + ".svg";

document.querySelectorAll("img")[0].setAttribute("src", imgSource);


var randNum2 = Math.floor((Math.random() * 6) + 1);

var imgSource2 = "images/dice" + randNum2 + ".svg";

document.querySelectorAll("img")[1].setAttribute("src", imgSource2);

if (randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "🎉Player1 Wins!"
}
else if (randNum2 > randNum1){
    document.querySelector("h1").innerHTML = "Player2 Wins!🎉"
}
else{
    document.querySelector("h1").innerHTML = "😌Draw!"
}