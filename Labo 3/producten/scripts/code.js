const setup = () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', herbereken);
}

const herbereken = () => {
    let prijs = document.getElementsByClassName('prijs');
    let aantal = document.getElementsByClassName('aantal');
    let btw = document.getElementsByClassName('btw');
    let subtotaal = document.getElementsByClassName('subtotaal');
    let eindtotaal = 0;
    for (let i = 0; i < aantal.length; i++) {
        let prijsVal = parseFloat(prijs[i].textContent);
        let aantalVal = aantal[i].value;
        let btwVal = parseFloat(btw[i].textContent);
        let berekening = prijsVal * aantalVal * ((btwVal / 100) + 1);
        eindtotaal += berekening;
        subtotaal[i].textContent = berekening.toFixed(2) + ' Eur';
    }
    subtotaal[subtotaal.length - 1].textContent = eindtotaal.toFixed(2) + ' Eur';
}
window.addEventListener("load", setup);