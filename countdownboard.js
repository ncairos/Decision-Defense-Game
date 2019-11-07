const CountdownBoard = {
    ctx: undefined,

    init(ctx) {
        this.ctx = ctx
        this.ctx.font = "25px vcr osd mono"
    },

    update(time) {
        this.ctx.fillStyle = "white"
        this.ctx.fillText(Math.floor(time), 660, 775)
        // this.ctx.fillText(Math.floor(score), 115, 136)
    }
}