const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen()
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();

	if (voornaam.length > 30) {
		reportError(txtVoornaam, errVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam, errVoornaam);
	}
}

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();

	if(familienaam === '') {
		reportError(txtFamilienaam, errFamilienaam, "verplicht veld");
	} else if (familienaam.length > 50) {
		reportError(txtFamilienaam, errFamilienaam, "max. 50 karakters");
	} else {
		clearError(txtFamilienaam, errFamilienaam)
	}
}

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById('txtGeboortedatum');
	let errGeboortedatum = document.getElementById('errGeboortedatum');
	let geboortedatum = txtGeboortedatum.value.trim();

	if (geboortedatum === '') {
		reportError(txtGeboortedatum, errGeboortedatum, "verplicht veld");
	} else if (
		geboortedatum.length !== 10 ||
		!isGetal(geboortedatum.slice(0, 4)) ||
		!isGetal(geboortedatum.slice(5,7)) ||
		!isGetal(geboortedatum.slice(8,10)) ||
		geboortedatum.charAt(4) !== '-' ||
		geboortedatum.charAt(7) !== '-'
	) {
		reportError(txtGeboortedatum, errGeboortedatum, "formaat is niet jjjj‐mm‐dd");
	} else {
		clearError(txtGeboortedatum,errGeboortedatum);
	}
}

const valideerEmail = () => {
	let txtEmail = document.getElementById('txtEmail');
	let errEmail = document.getElementById('errEmail');
	let email = txtEmail.value.trim();

	if (email === '') {
		reportError(txtEmail, errEmail, "verplicht veld");
	} else if (!(
		email.includes('@') &&
		email.slice(0, email.indexOf('@')) !== '' &&
		email.slice(email.indexOf('@')+1) !== ''
	)) {
		reportError(txtEmail,errEmail, "geen geldig email adres");
	} else {
		clearError(txtEmail,errEmail);
	}
}

const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById('txtAantalKinderen');
	let errAantalKinderen = document.getElementById('errAantalKinderen');
	let aantalKinderen = txtAantalKinderen.value.trim();

	if (aantalKinderen === '') {
		reportError(txtAantalKinderen, errAantalKinderen, "verplicht veld");
	} else if (!isGetal(aantalKinderen) || parseInt(aantalKinderen) < 0) {
		reportError(txtAantalKinderen,errAantalKinderen, "is geen positief getal");
	} else if (parseInt(aantalKinderen) >= 99) {
		reportError(txtAantalKinderen,errAantalKinderen, "is te vruchtbaar");
	} else {
		clearError(txtAantalKinderen,errAantalKinderen);
	}

}

const isGetal = (tekst) => {
	return !isNaN(tekst);
}

const reportError = (element, errElement, message) => {
	element.className="invalid";
	errElement.innerHTML = message;
}

const clearError = (element, errElement) => {
	element.className="";
	errElement.innerHTML = "";
}

window.addEventListener("load", setup);