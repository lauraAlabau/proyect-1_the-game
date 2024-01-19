// Obstacle Component
export class Obstacle {
    constructor(imgPath, width, height, x, y, speed) {
        this.img = new Image()
        this.img.src = imgPath
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.speed = speed
        this.img.onload = () => {
            this.draw()
        }
    }
    update() {
        this.x -= this.speed
        this.draw()
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

// Dog Obstacle Component
export class Dog extends Obstacle {
    constructor(x, y) {
        super("../images/obstacleImg.png", 100, 100, x, y, 5)
    }
}

// Rat Obstacle Component
export class Rat extends Obstacle {
    constructor(x, y) {
        super("../images/ratImg.png", 30, 25, x, y, 0)
    }
}

