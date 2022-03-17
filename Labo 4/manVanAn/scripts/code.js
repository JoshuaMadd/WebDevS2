const setup = () => {
    let text = document.getElementById('text').innerText;
    console.log(countAnUsingIndexOf(text));
    console.log(countAnUsingLastIndexOf(text));
    
}

const countAnUsingIndexOf = (text) => {
    text = text.toLowerCase();
    let lastIndex = 0;
    let count = 0;
    while (text.indexOf('an',lastIndex) !== -1){
        lastIndex = text.indexOf("an",lastIndex) + 1;
        count++;
    }
    return count;
}

const countAnUsingLastIndexOf = (text) => {
    text = text.toLowerCase();
    let lastIndex = text.length;
    let count = 0;
    while (text.lastIndexOf('an',lastIndex) !== -1){
        lastIndex = text.lastIndexOf("an",lastIndex) - 1;
        count++;
    }
    return count;
}


window.addEventListener("load", setup);