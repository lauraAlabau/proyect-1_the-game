// Collision Detection Component
export default class CollisionDetection {
    static playerDog(player, dog) {
        let isPlayerAtRightToObst = player.x > dog.x + dog.width
        let isPlayerAtLeftToObst = player.x + player.width < dog.x
        let isPlayerAtBottomToObst = player.y > dog.y + dog.height
        let isPlayerAboveToObst = player.y + player.height < dog.y
        if (isPlayerAtRightToObst || isPlayerAtLeftToObst || isPlayerAtBottomToObst || isPlayerAboveToObst) {
        } else {
            window.location.href = '../html/loser.html'
        }
    }
    static playerRat(player, rat, score) {
        let isPlayerAtRightToRat = player.x > rat.x + rat.width
        let isPlayerAtLeftToRat = player.x + player.width < rat.x
        let isPlayerAtBottomToRat = player.y > rat.y + rat.height
        let isPlayerAboveToRat = player.y + player.height < rat.y
        if (isPlayerAtRightToRat || isPlayerAtLeftToRat || isPlayerAtBottomToRat || isPlayerAboveToRat) {
        } else {
            ratArray.splice(ratArray.indexOf(rat), 1)
            score.addScore()
        }
    }
}