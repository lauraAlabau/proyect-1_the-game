import Time from './components/timer'
import Player from './components/player'
import Background from './components/background'
import Score from './components/score'
import Input from './components/input'
import { Dog, Rat } from './components/obstacle'


// Create Instances
const bg = new Background("../images/bgImg.png")
const player = new Player("../images/playerImg.png")
const time = new Time()
const score = new Score()
const input = new Input()

let obstacleDogArray = []
let obstacleRatArray = []

setInterval(() => {
    obstacleDogArray.push(new Dog(canvas.width, Math.random() * (canvas.height - 150) + 50))
}, 1000)
setInterval(() => {
    obstacleRatArray.unshift(new Rat(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 50) + 50))
}, 2000)

// Animation Function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bg.draw()
    player.draw()
    time.draw()
    score.draw()

    obstacleDogArray.forEach((obstacle) => {
        obstacle.update()
        CollisionDetection.playerDog(player, obstacle)
    })

    obstacleRatArray.forEach((obstacle) => {
        obstacle.draw()
        CollisionDetection.playerRat(player, obstacle, score)
    })

    requestAnimationFrame(animate)
}

animate()