export default class Character {
    constructor(game) {
        const characterImg = document.createElement('img');
        characterImg.src = 'assets/images/bluesprite.png';

        this.gameWidth = game.gameWidth;

        this.characterImage = characterImg;
        this.position = {x: 5, y: 5};

        this.maxSpeed = 7;
        this.speed = 0;
    }
    moveLeft() {
        this.speed = -this.maxSpeed;
    }
    moveRight() {
        this.speed = this.maxSpeed;
    }
    stop() {
        this.speed = 0;
    }
    draw(ctx) {
        ctx.drawImage(this.characterImage, this.position.x, this.position.y);
    }
    update(deltaTime) {
        this.position.x += this.speed;
    }
}