// Score Component
export class Score {
    constructor() {
        this.score = 0
    }
    draw() {
        ctx.font = "25px arial"
        ctx.fillStyle = "white"
        ctx.fillText(`Rats Eaten: ${this.score}`, 150, 30)
    }
    addScore() {
        this.score++
    }
}