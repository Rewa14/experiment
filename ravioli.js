var playerX = 0;
var playerY = 0;
document.onkeydown = checkKey;
document.getElementById("start").addEventListener("click",startGame);

//starts the game
function startGame() {
    ravioliRandom();
}

// Randomly Generate Ravioli on screen 
function ravioliRandom() {
    var ravioliPos = [];

for(i=0;i<30;i++){ravioliPos.push([Math.floor(Math.random()*15)-7,Math.floor(Math.random()*15)-7]);}
var pos1 = -7;
var pos2 = -7;
for(i=0;i<225;i++){
  console.log("spot"+pos1+pos2);
    document.getElementById("spot"+pos1+pos2).innerHTML = "";
    pos1++;
    if(pos1==8){
    pos1=-7;
    pos2++;
      if(pos2==8)pos2=0;
    }
}
for(i=0;i<ravioliPos.length;i++)document.getElementById("spot"+ravioliPos[i][0]+ravioliPos[i][1]).innerHTML="<img style='width:100%' src = 'http://img2.wikia.nocookie.net/__cb20130426172405/scribblenauts/images/8/83/Ravioli.png'/>";

}

// Movement of the player
function checkKey(e) {
    e = e || window.event;
    //up arrow
    if (e.keyCode == '38'&&playerY!=7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        playerY++;
    }
    //right arrow
    if (e.keyCode == '39'&&playerX!=7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        playerX++;
    }
    //down arrow
    if (e.keyCode == '40'&&playerY!=-7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        playerY--;
    }
    //left arrow
    if (e.keyCode == '37'&&playerX!=-7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        playerX--;
    }

    document.getElementById("spot" + playerX + playerY).innerHTML = "<img style='width:88%' src = 'http://www.montefiore.ulg.ac.be/~quinet/gif/garfield_head.gif'/>";
}
