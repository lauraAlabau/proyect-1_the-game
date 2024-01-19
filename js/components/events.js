// Input Component
export default class Input {
    constructor() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "a":
                case "ArrowLeft":
                    player.moveLeft()
                    break
                case "d":
                case "ArrowRight":
                    player.moveRight()
                    break
                case "w":
                case "ArrowUp":
                    player.moveUp()
                    break
                case "s":
                case "ArrowDown":
                    player.moveDown()
                    break
            }
        })
    }
}