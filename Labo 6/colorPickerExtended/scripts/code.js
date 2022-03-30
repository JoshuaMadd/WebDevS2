const setup = () => {
    update();
    let input=document.getElementsByClassName("input");
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener("change", update);
        input[i].addEventListener("input", update);
    }
    let save = document.getElementById('save');
    save.addEventListener('click', saveColor);


}

const update = () => {
    let input=document.getElementsByClassName("input");
    let output=document.getElementsByClassName("output");
    let value = [];
    for(let i = 0; i < input.length; i++){
        value.push(input[i].value);
        output[i].textContent = value[i];
    }
    let display=document.getElementsByClassName("display");
    display[0].style.backgroundColor="rgb(" + value[0] + "," + value[1] + "," + value[2] + ")";
}

const saveColor = () => {
    let outputColors = document.getElementsByClassName('output');
    let colors = [];
    for (let i = 0; i < outputColors.length; i++) {
        colors.push(parseInt(outputColors[i].innerText))
    }
    let savedColors = document.getElementById('savedColors');
    let newColor = document.getElementsByClassName('display')[0].cloneNode(true);
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerText = 'x';
    newColor.appendChild(remove);
    savedColors.appendChild(newColor);
    newColor.addEventListener('click', loadColor);
    remove.addEventListener('click', removeColor);
}

const loadColor = (event) => {
    let display = event.target;
    let color = []
    let displayStyle = display.getAttribute('style')
    color.push(parseInt(displayStyle.slice(displayStyle.indexOf('(')+1, displayStyle.indexOf(','))));
    color.push(parseInt(displayStyle.slice(displayStyle.indexOf(',')+2, displayStyle.lastIndexOf(','))));
    color.push(parseInt(displayStyle.slice(displayStyle.lastIndexOf(',')+1, displayStyle.indexOf(')'))));

    let sliders = document.getElementsByClassName('input')
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].value = color[i];
    }
    update();

}

const removeColor = (event) => {
    event.stopPropagation();
    let display = event.target.parentElement;
    display.remove();
}

window.addEventListener("load", setup);