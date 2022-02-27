const setup = () => {
    let btnSubstring = document.getElementById("btn");
    btnSubstring.addEventListener("click", voegToe);
}

const voegToe = () => {
    let woord = document.getElementById("woordInput");
    let index1 = document.getElementById("index1");
    let index2 = document.getElementById("index2");
    let output = document.getElementById("output");
    /*
    Het is ook mogelijk om zowel een variabele te maken voor de value van
    woord, index1 en index2 en deze dan te gebruiken.
     */
    output.innerHTML = woord.value.substring(index1.value,index2.value);
}

window.addEventListener('load',setup);
