import { detectCollision } from './collisionDetection.js'

export default class Wall {
    constructor(game, position, width, height) {
        this.game = game;

        this.position = position;

        this.width = width;
        this.height = height;
    }
    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        if(detectCollision(this.game.character, this)) {
            //if character hits on its right side and walls left side, then speed x = 0
            //if character approachs from top or bottom, speed y = 0;
            this.game.character.position.x = 0;
        }
    }
}