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
            //right-hand collision
            //1. if the difference between the x center positions is less than the sum of their vectors
            if( (character.center.x - collisionObject.center.x) < (character.width/2 + collisionObject.width/2) ) {
                console.log('hit')
            // if (character.left > (collisionObject.right/2)) {
            //     console.log('on right side', (collisionObject.right/2))
            //     this.game.character.position.x = collisionObject.right;
            // } else if(character.bottom > collisionObject.bottom && character.top > collisionObject.bottom) {
            //     console.log()
            //     this.game.character.position.y = collisionObject.bottom;
            // } else if(character.right > collisionObject.right) {
            //     this.game.character.position.x = collisionObject.right;
            } else {
                this.game.character.position = {x: 200, y: 300};
            }
        }      
    }
}
