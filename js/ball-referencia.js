class Ball {

    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, ballImage) {

        this.ctx = ctx
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballImage = ballImage
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.ballImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    moveLeft() {
        this.ballPos.x -= 20
    }

    moveRight() {
        this.ballPos.x += 20
    }

}