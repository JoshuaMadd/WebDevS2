const setup = () => {
    update();
    let input=document.getElementsByClassName("input");
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener("change", update);
        input[i].addEventListener("input", update);
    }
}

const update = () => {
    let input=document.getElementsByClassName("input");
    let output=document.getElementsByClassName("output");
    let value = [];
    for(let i = 0; i < input.length; i++){
        value.push(input[i].value);
        output[i].textContent = value[i];
    }
    let display=document.getElementById("display");
    display.style.backgroundColor="rgb(" + value[0] + "," + value[1] + "," + value[2] + ")";
}
window.addEventListener("load", setup);