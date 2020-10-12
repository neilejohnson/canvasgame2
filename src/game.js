export default class Game {
    constructor(){
        const characterImg = document.createElement('img');
        characterImg.src = 'assets/images/bluesprite.png';
        this.character = characterImg;
    }
    draw(ctx) {
        ctx.drawImage(this.character, 10, 10);
    }
    update(deltaTime) {
    }
}