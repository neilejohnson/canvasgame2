export function detectCollision(gameObject1, gameObject2) {
    let gameObject1Borders = {
        top: gameObject1.position.y,
        bottom: gameObject1.position.y + gameObject1.height,
        left: gameObject1.position.x,
        right: gameObject1.position.x + gameObject1.width
    }
    let gameObject2Borders = {
        top: gameObject2.position.y,
        bottom: gameObject2.position.y + gameObject2.height,
        left: gameObject2.position.x,
        right: gameObject2.position.x + gameObject2.width
    }

    if(gameObject1Borders.right > gameObject2Borders.left 
        && gameObject1Borders.bottom > gameObject2Borders.top
        && gameObject1Borders.top < gameObject2Borders.bottom
        && gameObject1Borders.left < gameObject2Borders.right
        && gameObject1Borders.right > gameObject2Borders.left
        ) { return true } else { return false };

    // if(gameObject1Borders.bottom > gameObject2Borders.top &&
    //     gameObject1Borders.left < gameObject2Borders.right &&
    //     gameObject1Borders.top < gameObject2Borders.bottom &&
    //     gameObject1Borders.right > gameObject2Borders.left) { return true } else { return false };
}

