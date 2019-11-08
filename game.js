const decisionGame = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    obstacles: [],
    framesCounter: 0,
    score: undefined,
    time: undefined,
    opt1: undefined,
    opt2: undefined,
    mainMusic: new Audio("./music/bgsoundtrack.wav"),
    keys: {
        A_KEY: 65,
        W_KEY: 87,
        D_KEY: 68,
        RIGHT_ARROW: 39,
        LEFT_ARROW: 37,
        UP_ARROW: 38
    },
    init() {
        this.opt1 = document.getElementById('opt1').value //PLAYER1 INPUT
        this.opt2 = document.getElementById('opt2').value //PLAYER2 INPUT

        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.height = window.innerHeight * 0.98
        this.width = window.innerWidth * 0.98
        this.canvas.height = this.height
        this.canvas.width = this.width
        this.start()
        this.mainMusic.play()
    },
    start() {
        this.reset()
        this.interval = setInterval(() => {
            this.time--
            this.framesCounter++
            this.generateObstacles()
            // console.log(this.obstacles50)
            this.clear()
            this.drawAll()
            this.moveAll()
            if (this.time == 0) {
                this.gameOver()
            }

            this.isCollision(this.obstacles50, this.cannonLeft.bullets, this.cannonLeft)
            this.isCollision(this.obstacles30, this.cannonLeft.bullets, this.cannonLeft)
            this.isCollision(this.obstacles20, this.cannonLeft.bullets, this.cannonLeft)
            this.isCollision(this.obstacles10, this.cannonLeft.bullets, this.cannonLeft)
            this.isCollision(this.obstacles5, this.cannonLeft.bullets, this.cannonLeft)
            this.isCollision(this.obstacles50, this.cannonRight.bullets, this.cannonRight)
            this.isCollision(this.obstacles30, this.cannonRight.bullets, this.cannonRight)
            this.isCollision(this.obstacles20, this.cannonRight.bullets, this.cannonRight)
            this.isCollision(this.obstacles10, this.cannonRight.bullets, this.cannonRight)
            this.isCollision(this.obstacles5, this.cannonRight.bullets, this.cannonRight)
            this.clearObstacles()
        }, 1000 / this.fps)
    },
    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.cannonLeft = new Cannonleft(this.ctx, this.width, this.height)
        this.cannonRight = new Cannonright(this.ctx, this.width, this.height)
        this.scoreboard = ScoreBoard
        this.scoreboard.init(this.ctx)
        this.score = 0
        this.timer = CountdownBoard
        this.timer.init(this.ctx)
        this.time = 2500
        this.obstacles50 = []
        this.obstacles30 = []
        this.obstacles20 = []
        this.obstacles10 = []
        this.obstacles5 = []

    },
    drawAll() {
        this.background.draw()
        this.cannonLeft.draw()
        this.cannonRight.draw()
        this.obstacles50.forEach(obs => obs.draw())
        this.obstacles30.forEach(obs => obs.draw())
        this.obstacles20.forEach(obs => obs.draw())
        this.obstacles10.forEach(obs => obs.draw())
        this.obstacles5.forEach(obs => obs.draw())
        this.drawScore()
        this.drawCountdown()
    },
    moveAll() {
        this.cannonLeft.move()
        this.cannonRight.move()
        this.obstacles50.forEach(obs => obs.move())
        this.obstacles30.forEach(obs => obs.move())
        this.obstacles20.forEach(obs => obs.move())
        this.obstacles10.forEach(obs => obs.move())
        this.obstacles5.forEach(obs => obs.move())

    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    generateObstacles() {
        let randomNum = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum2 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum3 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum4 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum5 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum6 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum7 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum8 = Math.floor(Math.random() * (1000 - 300)) + 300
        let randomNum9 = Math.floor(Math.random() * (1000 - 300)) + 300

        if (this.framesCounter % 300 == 0) {
            this.obstacles50.push(new Enemies(this.ctx, this.width, this.height, "img/enemie2.png", randomNum, 100, 60))
            this.obstacles50.push(new Enemies(this.ctx, this.width, this.height, "img/enemie1.png", randomNum2, 60, 75))
        }
        if (this.framesCounter % 250 == 0) {
            this.obstacles30.push(new Enemies(this.ctx, this.width, this.height, "img/enemie3.png", randomNum3, 60, 75))
            this.obstacles30.push(new Enemies(this.ctx, this.width, this.height, "img/enemie4.png", randomNum4, 60, 75))
        }
        if (this.framesCounter % 200 == 0) {
            this.obstacles20.push(new Enemies(this.ctx, this.width, this.height, "img/enemie5.png", randomNum5, 75, 60))
            this.obstacles20.push(new Enemies(this.ctx, this.width, this.height, "img/enemie6.png", randomNum6, 75, 75))
        }
        if (this.framesCounter % 150 == 0) {
            this.obstacles10.push(new Enemies(this.ctx, this.width, this.height, "img/enemie7.png", randomNum7, 60, 75))
            this.obstacles10.push(new Enemies(this.ctx, this.width, this.height, "img/enemie8.png", randomNum8, 60, 75))
        }
        if (this.framesCounter % 100 == 0) {
            this.obstacles5.push(new Enemies(this.ctx, this.width, this.height, "img/enemie9.png", randomNum9, 50, 75))
        }
    },
    clearObstacles() {
        this.obstacles50.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles50.splice(idx, 1)
            }
        })
        this.obstacles30.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles30.splice(idx, 1)
            }
        })
        this.obstacles20.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles20.splice(idx, 1)
            }
        })
        this.obstacles10.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles10.splice(idx, 1)
            }
        })
        this.obstacles5.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles5.splice(idx, 1)
            }
        })
    },
    isCollision(obstaclesArray, player, personaje) {
        // console.log(personaje)
        for (let i = 0; i < obstaclesArray.length; i++) {
            for (let j = 0; j < player.length; j++) {

                if (player.length > 0 &&
                    obstaclesArray.length > 0 &&
                    obstaclesArray[i].posY + obstaclesArray[i].height >= player[j].posY &&
                    obstaclesArray[i].posX + obstaclesArray[i].width >= player[j].posX &&
                    obstaclesArray[i].posX <= player[j].posX + player[j].width &&
                    obstaclesArray[i].posY <= player[j].posY + player[j].height) {
                    //console.log(personaje)
                    if (obstaclesArray[i].image.src.includes("enemie1") || obstaclesArray[i].image.src.includes("enemie2")) {
                        personaje.score += 50
                    }
                    if (obstaclesArray[i].image.src.includes("enemie3") || obstaclesArray[i].image.src.includes("enemie4")) {
                        personaje.score += 30
                    }
                    if (obstaclesArray[i].image.src.includes("enemie5") || obstaclesArray[i].image.src.includes("enemie6")) {
                        personaje.score += 20
                    }
                    if (obstaclesArray[i].image.src.includes("enemie7") || obstaclesArray[i].image.src.includes("enemie8")) {
                        personaje.score += 10
                    }
                    if (obstaclesArray[i].image.src.includes("enemie9")) {
                        personaje.score -= 5
                    }
                    obstaclesArray.splice(i, 1)
                }
            }
        }
    },
    drawScore() {
        this.scoreboard.update(this.cannonRight.score, 1155, 136)
        this.scoreboard.update(this.cannonLeft.score, 115, 136)
        // console.log(this.cannonRight.score)
        // console.log(this.cannonLeft.score)
    },
    drawCountdown() {
        this.timer.update(this.time)
    },
    gameOver() {
        clearInterval(this.interval)
        this.ctx.font = "300px vcr osd mono"
        this.ctx.fillStyle = "#99CC33"
        this.ctx.fillText(("TIMESUP!"), 0, 450)
        this.youWin()
        this.stopMusic()

    },
    youWin() {
        this.tadaSound = document.createElement("audio")
        this.tadaSound.src = "./music/ta-da.wav"
        this.tadaSound.volume = 0.5
        this.tadaSound.play()
        setTimeout(() => {
            if (this.cannonLeft.score > this.cannonRight.score) {
                alert(`PLAYER1 HA GANADO! HA LUCHADO A MUERTE POR SU OPCION ${this.opt1.toUpperCase()}`)
                // console.log(this.opt1)
            }
            if (this.cannonLeft.score < this.cannonRight.score) {
                alert(`PLAYER2 HA GANADO! HA LUCHADO MUERTE POR SU OPCION ${this.opt2.toUpperCase()}`)
            }
        }, 1000)
    },
    musicBG() {
        this.mainMusic.volume = 0.5
        this.mainMusic.loop = true
        this.mainMusic.play()
    },
    stopMusic() {
        this.mainMusic.pause()
    }
}