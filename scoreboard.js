const ScoreBoard = {
    ctx: undefined,

    init(ctx) {
        this.ctx = ctx
        this.ctx.font = "25px vcr osd mono"
    },

    update(score, posX, posY) {
        this.ctx.fillStyle = "white"
        this.ctx.fillText(Math.floor(score), posX, posY)
        // this.ctx.fillText(Math.floor(score), 115, 136)
    }
}