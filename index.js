function getRandomInt() {
  
  return Math.ceil(Math.random() * 6);
}
a = getRandomInt()
b = getRandomInt()

if (a==1){
document.querySelector(".img1").setAttribute("src", "images/dice1.png")
}else if(a == 2){
document.querySelector(".img1").setAttribute("src", "images/dice2.png")
}else if(a == 3){
document.querySelector(".img1").setAttribute("src", "images/dice3.png")
}else if(a == 4){
document.querySelector(".img1").setAttribute("src", "images/dice4.png")
}else if(a == 5){
document.querySelector(".img1").setAttribute("src", "images/dice5.png")
}else if(a == 6){
document.querySelector(".img1").setAttribute("src", "images/dice6.png")
}

if (b==1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png")
  }else if(b == 2){
  document.querySelector(".img2").setAttribute("src", "images/dice2.png")
  }else if(b == 3){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png")
  }else if(b == 4){
  document.querySelector(".img2").setAttribute("src", "images/dice4.png")
  }else if(b == 5){
  document.querySelector(".img2").setAttribute("src", "images/dice5.png")
  }else if(b == 6){
  document.querySelector(".img2").setAttribute("src", "images/dice6.png")
  }

if (a>b){
document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if(b>a){
document.querySelector("h1").innerHTML = "Player 2 wins!"
}else{
document.querySelector("h1").innerHTML = "Draw!"
}