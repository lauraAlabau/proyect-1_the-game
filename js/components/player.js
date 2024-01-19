export class Player {
    constructor(imgPath) {
        this.width = 50
        this.height = 50
        this.x = (canvas.width / 2) - (this.width / 2)
        this.y = (canvas.height / 2 + 50) - (this.height / 2)
        this.img = new Image()
        this.img.src = imgPath
        this.img.onload = () => {
            this.draw()
        }
    }
    moveLeft() {
        if (this.x > 0)
            this.x -= (this.width / 2)
    }
    moveRight() {
        if (this.x < (canvas.width - this.width))
            this.x += (this.width / 2)
    }
    moveUp() {
        if (this.y > 50)
            this.y -= (this.height / 2)
    }
    moveDown() {
        if (this.y < (canvas.height - this.height))
            this.y += (this.height / 2)
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}