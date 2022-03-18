const setup = () => {
    changeState();
    window.addEventListener('hashchange', changeState);
}

const changeState = () => {
    let oldState = document.getElementsByClassName('changeState');
    if(oldState[0]){
        oldState[0].className = '';
    }
    let current = 0;
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            current = i;
        }
    }
    document.links[current].className = 'changeState';
}
window.addEventListener("load", setup);