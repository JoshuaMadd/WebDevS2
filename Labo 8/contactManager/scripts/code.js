let personen = [];
let selectedPerson = -1;

const getVeldenMetValidatie = () => {
    let velden = document.querySelectorAll('form div input');
    for (let i = 0; i < velden.length; i++) {
        if (velden[i].classList.contains('invalid')) {
            return null;
        }
    }
    return velden;
}

const bewaarBewerktePersoon = () => {
    valideer();
    let velden = getVeldenMetValidatie();

    if (velden === null) {
        return;
    }

    let veldNr = 0;
    let contactPersoon = {
        voornaam: velden[veldNr++].value,
        familienaam: velden[veldNr++].value,
        geboorteDatum: velden[veldNr++].value,
        email: velden[veldNr++].value,
        kinderen: velden[veldNr++].value
    }


    if (selectedPerson === -1) {
        let lstPersonen = document.getElementById('lstPersonen');

        let option = document.createElement("option");
        option.id = `${personen.length}`;
        option.textContent = contactPersoon.voornaam + ' ' + contactPersoon.familienaam;
        lstPersonen.appendChild(option);

        selectedPerson = personen.length;
        personen.push(contactPersoon)
    } else {
        let option = document.getElementById(selectedPerson);
        option.textContent = contactPersoon.voornaam + ' ' + contactPersoon.familienaam;
        personen[selectedPerson] = contactPersoon;
    }
};

const bewerkNieuwePersoon = () => {
    let form = document.getElementsByTagName('form')[0];
    form.reset();
    selectedPerson = -1;
};

const laadBestaandPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let person = personen[lstPersonen.selectedIndex];
    selectedPerson = lstPersonen.selectedIndex;

    //geen validatie nodig want de inhoud is niet meer belangrijk
    let velden = document.querySelectorAll('form div input');

    let veldNr = 0;
    velden[veldNr++].value = person.voornaam;
    velden[veldNr++].value = person.familienaam;
    velden[veldNr++].value = person.geboorteDatum;
    velden[veldNr++].value = person.email;
    velden[veldNr++].value = person.kinderen;
    
    valideer();
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener('change', laadBestaandPersoon)
};

window.addEventListener("load", setup);