let playerHealth = 3;
let arrow = 1;
let score = 0;

document.addEventListener('keydown', (e) => {

  var myAudio = new Audio('music/music.wav');
  var myAudio2 = new Audio('music/failMusic.wav');

    
    if(playerHealth<=0){
      document.getElementById("reloadButtonDiv").style.visibility = "visible";
      
    }else{
    
    if(arrow == 1){
      if (e.code === "ArrowRight") {
          console.log("Doğru 1");
          arrow = Math.floor(Math.random() * 4) + 1;
          score +=1;
          myAudio.play();
      
          arrowCount();
     
        }else{
          console.log("Yanlış")
          playerHealth -= 1
          myAudio2.play();
          arrowCount();
        }
      
  }else if(arrow == 2){
      if (e.code === "ArrowDown") {
          console.log("Doğru 2");
          arrow = Math.floor(Math.random() * 4) + 1;
          score +=1;
          myAudio.play();
          arrowCount();
        }else{
          console.log("Yanlış")
          playerHealth -= 1
          myAudio2.play();
          arrowCount();
        }
  }
  else if(arrow == 3){
      if (e.code === "ArrowUp") {
          console.log("Doğru 3");
          arrow = Math.floor(Math.random() * 4) + 1;
          score +=1;
          myAudio.play();
          arrowCount();
        }else{
          console.log("Yanlış")
          playerHealth -= 1
          myAudio2.play();
          arrowCount();
        }
  }
  else if(arrow == 4){
      if (e.code === "ArrowLeft") {
          console.log("Doğru 4");
          arrow = Math.floor(Math.random() * 4) + 1;
          score +=1;
          myAudio.play();
          arrowCount();
        }else{
          console.log("Yanlış")
          playerHealth -= 1
          myAudio2.play();
          arrowCount();
        }
  }
 
      document.getElementById('can').innerHTML =  playerHealth;
      document.getElementById('score').innerHTML =  score;
    }
});

function arrowCount(){
   if(arrow==1){
   
    document.getElementById("icon").style.visibility = "visible";
    document.getElementById("icon2").style.visibility = "hidden";
    document.getElementById("icon3").style.visibility = "hidden";
    document.getElementById("icon4").style.visibility = "hidden";
   }else if(arrow==2){
    document.getElementById("icon").style.visibility = "hidden";
    document.getElementById("icon2").style.visibility = "visible";
    document.getElementById("icon3").style.visibility = "hidden";
    document.getElementById("icon4").style.visibility = "hidden";
   }else if(arrow==3){
    document.getElementById("icon").style.visibility = "hidden";
    document.getElementById("icon2").style.visibility = "hidden";
    document.getElementById("icon3").style.visibility = "visible";
    document.getElementById("icon4").style.visibility = "hidden";
   }else if(arrow==4){
    document.getElementById("icon").style.visibility = "hidden";
    document.getElementById("icon2").style.visibility = "hidden";
    document.getElementById("icon3").style.visibility = "hidden";
    document.getElementById("icon4").style.visibility = "visible";
   }
}

const btn = document.getElementById("reloadButton")
btn.addEventListener("click", () =>{
  location.reload();
})