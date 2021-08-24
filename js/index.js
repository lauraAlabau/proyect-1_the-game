window.onload = () => {
  //document.getElementById('start-button').onclick = () => {
    startGame();
  //}

  function startGame() {

    /* CANVAS */
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")

    /* BACKGROUND CANVAS IMG */
    const bgImg = new Image()
    bgImg.src = "../images/bgImg.png"
    bgImg.onload = function() {
      ctx.drawImage(bgImg, 0, 0,canvas.width,canvas.height);
    };

    /* PLAYER OBJECT */
    class Player{
      constructor(){
        this.playerW = 50
        this.playerH = 50
        this.playerX = (canvas.width/2) - (this.playerW/2)
        this.playerY = (canvas.height/2 + 50) - (this.playerH/2)
        this.playerImg = new Image();
        this.playerImg.src = "../images/playerImg.png";
      }
      moveLeft(){
        if(this.playerX > 0)
        this.playerX -= (this.playerW/2)
      }
      moveRight(){
        if(this.playerX < (canvas.width - this.playerW))
        this.playerX += (this.playerW/2)
      }
      moveUP(){
        if(this.playerY > 50)
        this.playerY -= (this.playerH/2)
      }
      moveDown(){
        if(this.playerY < (canvas.height - this.playerH))
        this.playerY += (this.playerH/2)
      }

      drawPlayer(){
        ctx.drawImage(this.playerImg, this.playerX, this.playerY, this.playerW, this.playerH)
      }
    }
    const newPlayer = new Player
    //console.log(newPlayer)

    /* OBSTACLE DOG OBJECT */
    class Obstacle {
      constructor(){
        this.obstacleW = 100
        this.obstacleH = 100
        this.obstacleX = canvas.width
        this.obstacleY = (Math.random()*(canvas.height-100)+50)
        this.obstacleImg = new Image();
        this.obstacleImg.src = "../images/obstacleImg.png"
      }
      obstacleUpdate(){
        this.obstacleX -= 5
      }
      drawObstacle(){
        ctx.drawImage(this.obstacleImg, this.obstacleX, this.obstacleY, this.obstacleW, this.obstacleH)
      }
    }
    const obstaclesArray = []
    setInterval(() => {obstaclesArray.push(new Obstacle); console.log(obstaclesArray)}, 1000)
    //console.log(obstaclesArray)

    /* RAT OBJECT */
    class Rat {
      constructor(){
        this.ratW = 30
        this.ratH = 25
        this.ratX = (Math.random()*(canvas.width-30))
        this.ratY = (Math.random()*(canvas.height-75)+50)
        this.ratImg = new Image();
        this.ratImg.src = "../images/ratImg.png"
      }
      drawRat(){
        ctx.drawImage(this.ratImg, this.ratX, this.ratY, this.ratW, this.ratH)   
        console.log(this.ratImg, this.ratX, this.ratY, this.ratW, this.ratH)     
      }
    }
    const ratArray = []
    setInterval(() => {ratArray.unshift(new Rat()); console.log(ratArray)}, 2000)
    //console.log(ratArray)

    
    /* Time */
    let time = 30
    const interval = setInterval(() => {
      if(time > 0){
        time --;
      }else{
        clearInterval(interval);
        alert(`Congratulations, your belly is full \nYou ate ${score} rats`)
        window.location.href = '/index.html'; 
      }
    }, 1000)

    const drawtime = (number) =>{
      ctx.font = "25px arial"; 
      ctx.fillStyle = "white"
      ctx.fillText(`Time :${number}`, 25, 30)
    }
    /* Score */
    let score = 0
    const drawscore = (number) =>{
      ctx.font = "25px arial"
      ctx.fillStyle = "white"
      ctx.fillText(`Rats eaten:${number}`, 150, 30)
    }

    /* CRUSH */
    const isPlayerCrashedDog = (player,obstacle) =>{
      const isPlayerAtRightToObst = player.playerX > obstacle.obstacleX + obstacle.obstacleW
      const isPlayerAtLeftToObst = player.playerX + player.playerW < obstacle.obstacleX
      const isPlayerAtBottomToObst = player.playerY > obstacle.obstacleY + obstacle.obstacleH
      const isPlayerAboveToObst = player.playerY + player.playerH < obstacle.obstacleY
      if(isPlayerAtRightToObst || isPlayerAtLeftToObst || isPlayerAtBottomToObst || isPlayerAboveToObst){         
      }else{

        alert(`You are now in kitten's heaven \nYou ate ${score} rats`)
        window.location.href = '/index.html'; 
        stopDraw()
      }
    }
    const isPlayerCrashedRat = (player,rat) =>{
      const isPlayerAtRightToRat = player.playerX > rat.ratX + rat.ratW
      const isPlayerAtLeftToRat = player.playerX + player.playerW < rat.ratX
      const isPlayerAtBottomToRat = player.playerY > rat.ratY + rat.ratH
      const isPlayerAboveToRat = player.playerY + player.playerH < rat.ratY
      if(isPlayerAtRightToRat || isPlayerAtLeftToRat || isPlayerAtBottomToRat || isPlayerAboveToRat){         
      }else{
        ratArray.splice(new Rat())
        score+= 1
      }
    }

    /* ANIMATION */
      /* Background */
      const bgDraw = () =>{
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(bgDraw)
      }
      /* Player */
      const playerUpdate = () =>{
        ctx.clearRect(newPlayer.playerX, newPlayer.playerY, 0, 0)
        newPlayer.drawPlayer()
        drawtime(time)
        drawscore(score)
        requestAnimationFrame(playerUpdate)
      }
      /* Obstacle Dog */
      const animateObstacle = () =>{
        obstaclesArray.forEach( obstacle => obstacle.obstacleUpdate() )
        obstaclesArray.forEach( obstacle => obstacle.drawObstacle() )
        for(let i = 0; i < obstaclesArray.length; i++){
          isPlayerCrashedDog(newPlayer, obstaclesArray[i]) 
        }
        requestAnimationFrame(animateObstacle)
      }

      /* Obstacle Rat */
      const animateRat = () =>{
        console.log('Rat here')
        ratArray.forEach( rat => rat.drawRat() )
        for(let i = 0; i < ratArray.length; i++){
          isPlayerCrashedRat(newPlayer, ratArray[i]) 
        }
        requestAnimationFrame(animateRat)
      }

    /* KEY EVENT */
    document.addEventListener("keydown", (e) =>{
      switch(e.key){
        case "a":
        case "ArrowLeft":
          newPlayer.moveLeft()
          console.log("left")
          break;
        case "d":
        case "ArrowRight":
          newPlayer.moveRight()
          console.log("right")
          break;
        case "w":
        case "ArrowUp":
          newPlayer.moveUP()
          console.log("up")
          break;
        case "s":
        case "ArrowDown":
          newPlayer.moveDown()
          console.log("down")
          break;
      }
      playerUpdate()
    })

    
    bgDraw()
    animateRat()
    animateObstacle()
    playerUpdate()
    
  }//Cierra startGame
}//Cierra window
  

