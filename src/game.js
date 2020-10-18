import Character from './character.js'
import InputHandler from './input.js'
import Wall from './wall.js'

export default class Game {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.character = new Character(this);
        this.wall = new Wall(this, {x: 400, y: 400}, 200, 100);
        this.wall2 = new Wall(this, {x: 200, y: 200}, 200, 100);

        new InputHandler(this.character, this);
    }
    draw(ctx) {
        this.wall.draw(ctx);
        this.wall2.draw(ctx);
        this.character.draw(ctx);
    }
    update(deltaTime) {
        this.character.update(deltaTime);
        this.wall.update(deltaTime);
        this.wall2.update(deltaTime);
    };
};