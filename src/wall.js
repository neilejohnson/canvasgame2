import { detectCollision } from './collisionDetection.js'

export default class Wall {
    constructor(game, position, width, height) {
        this.game = game;

        this.position = position;

        this.width = width;
        this.height = height;

        this.centerPosition = {x: this.position.x + (this.width/2), y: this.position.y + (this.height/2)}
    }
    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        //detect collision checks if there is a collision.
        //the update function within the class handles how that collision is dealt with
        if(detectCollision(this.game.character, this)) {
            let character = {
                center: {x: this.game.character.centerPosition.x, y: this.game.character.centerPosition.y},
                top: this.game.character.position.y,
                right: this.game.character.position.x + this.game.character.width,
                bottom: this.game.character.position.y + this.game.character.height,
                left: this.game.character.position.x
            }
            let collisionObject = {
                center: {x: this.centerPosition.x, y: this.centerPosition.y},
                top: this.position.y,
                right: this.position.x + this.width,
                bottom: this.position.y + this.height,
                left: this.position.x
            }
            //hit from left
            if(character.right - (this.game.character.maxSpeed + 1) < collisionObject.left ) {
                this.game.character.position.x = this.position.x - this.game.character.width;
            //hit from bottom
            } else if(character.top + (this.game.character.maxSpeed + 1) > collisionObject.bottom) {
                this.game.character.position.y = this.position.y + this.height;
            //hit from right
            } else if(character.left + (this.game.character.maxSpeed + 1) > collisionObject.right) {
                this.game.character.position.x = this.position.x + this.width;
            //hit from top
            } else if(character.bottom - (this.game.character.maxSpeed + 1) < collisionObject.top) {
                this.game.character.position.y = this.position.y - this.game.character.height;
            }
        }      
    }
}
