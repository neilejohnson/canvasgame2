export default class InputHandler {
    constructor(character, game) {
        document.addEventListener('keydown', (event) => {
            // alert(event.key);
            switch (event.key) {
                case 'ArrowLeft':
                    character.moveLeft();
                    break;
                case 'ArrowRight':
                    character.moveRight();
                    break;
                case 'ArrowUp':
                    character.moveUp();
                    break;
                case 'ArrowDown':
                    character.moveDown();
                    break;
            };
        });
        document.addEventListener('keyup', (event) => {
            // alert(event.key);
            switch (event.key) {
                case 'ArrowLeft':
                    if(character.speed.x < 0) character.stopX();
                    break;
                case 'ArrowRight':
                    if(character.speed.x > 0) character.stopX();
                    break;
                case 'ArrowUp':
                    if(character.speed.y < 0) character.stopY();
                    break;
                case 'ArrowDown':
                    if(character.speed.y > 0) character.stopY();
                    break;
            }
            
        });
    };
};