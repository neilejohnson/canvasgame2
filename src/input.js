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
            };
        });
        document.addEventListener('keyup', (event) => {
            // alert(event.key);
            switch (event.key) {
                case 'ArrowLeft':
                    if(character.speed < 0) character.stop();
                    break;
                case 'ArrowRight':
                    if(character.speed > 0) character.stop();
                    break;
            }
            
        });
    };
};