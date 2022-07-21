const canvasApp = {
    description: 'Canvas app for basic shapes controlling',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    ball: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createAll()
        this.drawAll()
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.ball.moveLeft()
                    break;
                case 'ArrowRight':
                    this.ball.moveRight()
                    break;
            }
        }
    },
    createAll() {
        this.ball = new Ball(this.ctx, 100, 100, 200, 200, 'ball.png')
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.ball.draw()
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}