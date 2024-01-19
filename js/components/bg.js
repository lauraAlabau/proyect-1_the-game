// Background Component
export default class Background {
    constructor(imgPath) {
        this.img = new Image()
        this.img.src = imgPath
        this.img.onload = () => {
            this.width = canvas.width
            this.height = canvas.height
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, 0, 0, this.width, this.height)
    }
}