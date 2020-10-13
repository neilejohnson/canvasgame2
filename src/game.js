import Character from './character.js'
import InputHandler from './input.js'

export default class Game {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.character = new Character(this);
        new InputHandler(this.character, this);
    }
    draw(ctx) {
        this.character.draw(ctx);
    }
    update(deltaTime) {
        this.character.update(deltaTime);
    }
}