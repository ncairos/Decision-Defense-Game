class Enemies {
    constructor(ctx, w, h, src, random, imgWidth, imgHeight) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h

        this.posX = random
        this.posY = 0

        this.width = imgWidth
        this.height = imgHeight

        this.image = new Image()
        this.image.src = src

        this.vel = 2
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
    move() {
        this.posY += this.vel
    }
}