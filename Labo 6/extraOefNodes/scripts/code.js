const setup = () => {
    //Opdracht 1
    let pElement = document.querySelectorAll('p');
    pElement[0].innerText = 'Good Job!';

    //Opdracht 2
    let liElements = document.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].classList.add('listitem');
        liElements[i].style.color = 'red';
    }
    let opdr2 = document.getElementById('opdracht2');
    let image = document.createElement('img');
    let imageOnPage = opdr2.appendChild(image);
    imageOnPage.setAttribute('src','images/photo.jpg');

    //Opdracht 3
    let myDiv = document.getElementById('myDIV');
    let p = document.createElement('p');
    p.innerText = 'Some random text';
    myDiv.appendChild(p);
}
window.addEventListener("load", setup);