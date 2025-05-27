var r=Math.floor(Math.random()*6)+1;
if(r===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(r===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(r===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(r===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(r===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
var a=Math.floor(Math.random()*6)+1;
if(a===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(a===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(a===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(a===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(a===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
if(r>a){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(a>r){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
