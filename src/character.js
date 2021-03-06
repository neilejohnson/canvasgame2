export default class Character {
    constructor(game) {
        const characterImg = document.createElement('img');
        
        this.directions = [
            'assets/images/bluesprite.png',
            'assets/images/bluespriteRIGHT.png',
            'assets/images/bluespriteLEFT.png',
            'assets/images/bluespriteBACK.png'
        ];

        characterImg.src = this.directions[0];
        this.characterImage = characterImg;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;


        this.position = {x: 5, y: 5};

        this.width = 100;
        this.height = 100;

        this.currentDirection = 0;

        this.maxSpeed = 7;
        this.speed = {x: 0, y: 0};
    }
    moveDown() {
        this.setDirection(0);
        this.speed.y = this.maxSpeed;
    }
    moveRight() {
        this.setDirection(1);
        this.speed.x = this.maxSpeed;
    }
    moveLeft() {
        this.setDirection(2);
        this.speed.x = -this.maxSpeed;
    }
    moveUp() {
        this.setDirection(3);
        this.speed.y = -this.maxSpeed;
    }
    stopX() {
        this.speed.x = 0;
    }
    stopY() {
        this.speed.y = 0;
    }
    setDirection(moveDirection) {
        if(this.currentDirection !== moveDirection) {
            this.currentDirection = moveDirection;
            this.characterImage.src = this.directions[moveDirection];  
        }
    }
    draw(ctx) {
        ctx.drawImage(this.characterImage, this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        this.centerPosition = {x: this.position.x + (this.width/2), y: this.position.y + (this.height/2)}
    
        //wall borders
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
        if(this.position.y > this.gameHeight - this.height) this.position.y = this.gameHeight - this.height;
    }
}