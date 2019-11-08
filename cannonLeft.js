class Cannonleft {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h

        this.image = new Image()
        this.image.src = "img/cannon.png"
        this.image2 = new Image()
        this.image2.src = "img/base.png"
        this.image3 = new Image()
        this.image3.src = "img/player1.png"

        this.sounds = new Audio("./music/rubber.duck.wav")

        this.width = 50
        this.height = 50

        this.score = 0

        this.posX = 140
        this.posY = 440

        this.directions = {
            a: false,
            d: false,
            w: false
        }

        this.angle = 0

        this.keys = keys

        this.bullets = []

        this.setListeners()
    }
    draw() {
        this.bullets.forEach(bullet => bullet.draw())

        this.ctx.save()
        this.ctx.translate(this.posX, this.posY)
        this.ctx.rotate(this.angle * Math.PI / 180)
        this.ctx.translate(-this.width / 2, -this.height / 2)
        this.ctx.drawImage(this.image, -this.posX / 25, -this.posY / 25, this.width, this.height)
        this.ctx.restore()

        this.ctx.drawImage(this.image2, 115, 436, this.width, this.height) //BASE CAÑON
        this.ctx.drawImage(this.image3, 18, 377, 90, 110) //PLAYER1
    }
    move() {
        if (this.directions.right) {
            if (this.angle > 0)
                this.angle -= 5
        }
        if (this.directions.left) {
            if (this.angle < 110)
                this.angle += 5
        }
        //console.log(this.angle)
        this.bullets.forEach(bullet => bullet.move())
    }
    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case 65:
                    // console.log(this.angle)
                    this.directions.right = true
                    break;
                case 68:
                    // console.log(this.angle)
                    this.directions.left = true
                    break;
                case 87:
                    // console.log("yay")
                    this.shoot()
                    this.sounds.volume = 0.3
                    this.sounds.play()
                    break;
            }
        })
        document.addEventListener("keyup", e => {
            switch (e.keyCode) {
                case 65:
                    this.directions.right = false
                    break;
                case 68:
                    this.directions.left = false
                    break;
                case 87:
                    this.shoot()
                    this.sounds.volume = 0.3
                    this.sounds.play()
                    break;
            }
        })
    }
    shoot() {
        this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.velX, this.velY, this.angle))
    }
}