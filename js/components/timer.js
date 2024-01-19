// Time Component
export default class Time {
    constructor() {
        this.time = 30
        setInterval(() => {
            if (this.time > 0) {
                this.time--
            } else {
                clearInterval(interval)
                window.location.href = `../html/winner.html?score=${score}`
            }
        }, 1000)
    }
    draw() {
        ctx.font = "25px arial"
        ctx.fillStyle = "white"
        ctx.fillText(`Time: ${this.time}`, 25, 30)
    }
}