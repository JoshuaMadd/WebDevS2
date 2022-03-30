const setup = () => {
    let stop = false;
    let gemeentes = [];
    while (stop === false) {
        let gemeente = prompt('Gemeente:');
        if (gemeente === 'stop') {
            stop = true;
        } else {
            gemeentes.push(gemeente);
        }
    }
    let keuzelijst = document.getElementById('keuzelijst');
    for (let i = 0; i < gemeentes.length; i++) {
        keuzelijst.innerHTML += '<option value="' + gemeentes[i] + '">' + gemeentes[i] + '</option>';
    }
    
}
window.addEventListener("load", setup);