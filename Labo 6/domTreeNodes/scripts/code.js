const setup = () => {
    let pElement = document.getElementById('abc')
    let pParent = pElement.parentNode;
    let pChild = pElement.childNodes;
    let val1 = pChild[0].nodeValue;
    let val2 = pChild[2].nodeValue;

    let docP = document.parentNode;
    let docC = document.childNodes;

    let end = "end";
}
window.addEventListener("load", setup);