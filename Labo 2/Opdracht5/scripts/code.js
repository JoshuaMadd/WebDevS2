const setup = () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', changeValue);
    }
    
const changeValue = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);