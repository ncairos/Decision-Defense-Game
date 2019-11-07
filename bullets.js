class Bullets {
    constructor(ctx, posX, posY, velX, velY, angle) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY

        this.angle = angle - 90

        this.width = 30
        this.height = 30

        this.image = new Image()
        this.image.src = "img/bullets.png"

        this.velX = 5
        this.velY = 5
    }
    draw() {
        this.move()
        this.ctx.drawImage(this.image, (this.posX - 20), (this.posY - 20), this.width, this.height)
    }
    move() {
        this.posX += this.velX * Math.cos(this.angle * (Math.PI / 180))
        this.posY += this.velY * Math.sin(this.angle * (Math.PI / 180))
    }
}