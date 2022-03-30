const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    deNaarHet(tekst);
}

const deNaarHet = (tekst) => {
    let lastIndex = 0;
    while (tekst.indexOf('de', lastIndex) !== -1) {
        tekst = tekst.slice(0, tekst.indexOf('de', lastIndex))
            + 'het' 
            + tekst.slice(tekst.indexOf('de') + 2);
        console.log(tekst)
        lastIndex = tekst.indexOf('de', lastIndex);
    }
}

window.addEventListener("load", setup);