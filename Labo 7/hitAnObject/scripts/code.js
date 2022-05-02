let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    startBtn.addEventListener('click',startGame);
};

const startGame = () => {
    startBtn.remove();
    playField = document.getElementById('playField');
    let target = document.getElementById('target');
    let interval = setInterval(refreshImg,global.MOVE_DELAY);
    global.timeOutId = interval;
    refreshImg()
    target.addEventListener('click', clickEvent);
}

const clickEvent = () => {
    let target = document.getElementById('target');
    imgId = getImgId(target);
    if(imgId === 0) {
        gameOver();
    } else {
        global.score++;
        let scoreOut = document.getElementById('scoreOutput')
        scoreOut.textContent = global.score;
        refreshImg();
        clearInterval(global.timeoutId)
        interval = setInterval(refreshImg,global.MOVE_DELAY);
    }
}

const refreshImg = () => {
    target.src = global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX;
    
}

const gameOver = () => {
    window.alert("Game Over");
}

const getImgId = (img) => {
    let imgId = img.getAttribute('src')
    return parseInt(imgId.charAt(imgId.indexOf(global.IMAGE_PATH_SUFFIX) - 1));
}




window.addEventListener("load", setup);


