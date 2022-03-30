const setup = () => {
    let btn = document.getElementById('toonResultaat');
    btn.addEventListener('click', toonResultaat)
}

const toonResultaat = () => {
    let isRoker = document.getElementById('isRoker');
    if(isRoker.checked) {
        console.log('is een roker')
    } else {
        console.log('is geen roker');
    }

    //----------------------------

    let moedertaalOpties = document.getElementsByName('moedertaal');
    let i = 0;
    let gevonden = false;
    while(!gevonden && i < moedertaalOpties.length) {
        if (moedertaalOpties[i].checked){
            gevonden = true;
            console.log(`moedertaal is ${moedertaalOpties[i].value}`);
        }
        i++;
    }

    //----------------------------

    let selectCountry = document.getElementById('buurland');
    let option = selectCountry.options[selectCountry.selectedIndex];
    console.log(`favoriete buurland is ${option.value}`)

    //----------------------------

    let optionsOrder = document.getElementById('bestelling').options;
    let selected = [];
    for (let j = 0; j < optionsOrder.length; j++) {
        if (optionsOrder[j].selected) {
            selected.push(optionsOrder[j].value)
        }
    }
    console.log(`bestelling bestaat uit ${selected}`)

}
window.addEventListener("load", setup);