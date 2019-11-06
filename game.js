const decisionGame = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    obstacles: [],
    framesCounter: 0,
    score: undefined,

    keys: {
        A_KEY: 65,
        W_KEY: 87,
        D_KEY: 68,
        RIGHT_ARROW: 39,
        LEFT_ARROW: 37,
        UP_ARROW: 38
    },
    init() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.height = window.innerHeight * 0.98
        this.width = window.innerWidth * 0.98
        this.canvas.height = this.height
        this.canvas.width = this.width
        this.start()
    },
    start() {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++
            this.generateObstacles()
            this.drawAll()
            this.moveAll()
            // console.log(this.obstacles30)
            this.clearObstacles()


        }, 1000 / this.fps)
    },
    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.cannonLeft = new Cannonleft(this.ctx, this.width, this.height)
        this.cannonRight = new Cannonright(this.ctx, this.width, this.height)
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

        if (this.framesCounter % 700 == 0) {
            this.obstacles50.push(new Enemies(this.ctx, this.width, this.height, "img/enemie2.png", randomNum, 100, 60))
            this.obstacles50.push(new Enemies(this.ctx, this.width, this.height, "img/enemie1.png", randomNum2, 60, 75))
        }
        if (this.framesCounter % 500 == 0) {
            this.obstacles30.push(new Enemies(this.ctx, this.width, this.height, "img/enemie3.png", randomNum3, 60, 75))
            this.obstacles30.push(new Enemies(this.ctx, this.width, this.height, "img/enemie4.png", randomNum4, 60, 75))
        }
        if (this.framesCounter % 300 == 0) {
            this.obstacles20.push(new Enemies(this.ctx, this.width, this.height, "img/enemie5.png", randomNum5, 75, 60))
            this.obstacles20.push(new Enemies(this.ctx, this.width, this.height, "img/enemie6.png", randomNum6, 75, 75))
        }
        if (this.framesCounter % 200 == 0) {
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
                this.obstacles50.splice(idx, 1);
            }
        })
        this.obstacles30.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles30.splice(idx, 1);
            }
        })
        this.obstacles20.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles20.splice(idx, 1);
            }
        })
        this.obstacles10.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles10.splice(idx, 1);
            }
        })
        this.obstacles5.forEach((obs, idx) => {
            if (obs.posY >= this.height) {
                this.obstacles5.splice(idx, 1);
            }
        })
    },
    



}