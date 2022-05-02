const setup = () => {

    let jsonString =  '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}'
    let student1 = JSON.parse(jsonString);
    console.log('Voornaam: ' + student1.voornaam);
}
window.addEventListener("load", setup);