export default class Character {
    constructor(game) {
        const characterImg = document.createElement('img');
        characterImg.src = 'assets/images/bluesprite.png';

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.characterImage = characterImg;
        this.position = {x: 5, y: 5};

        this.width = 100;
        this.height = 100;

        this.maxSpeed = 7;
        this.speed = {x: 0, y: 0};
    }
    moveLeft() {
        this.speed.x = -this.maxSpeed;
    }
    moveRight() {
        this.speed.x = this.maxSpeed;
    }
    moveUp() {
        this.speed.y = -this.maxSpeed;
    }
    moveDown() {
        this.speed.y = this.maxSpeed;
    }
    stopX() {
        this.speed.x = 0;
    }
    stopY() {
        this.speed.y = 0;
    }
    draw(ctx) {
        ctx.drawImage(this.characterImage, this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //wall borders
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
        if(this.position.y > this.gameHeight - this.height) this.position.y = this.gameHeight - this.height;
    }
}