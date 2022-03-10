const setup = () => {
    let inputRed=document.getElementById("inputRed");
    let inputGreen=document.getElementById("inputGreen");
    let inputBlue=document.getElementById("inputBlue");
    
    inputRed.addEventListener("change", update);
    inputRed.addEventListener("input", update);
    inputGreen.addEventListener("change", update);
    inputGreen.addEventListener("input", update);
    inputBlue.addEventListener("change", update);
    inputBlue.addEventListener("input", update);

    // maak het blokje rood
    //color[0].style.backgroundColor="red";
}

const update = () => {
    let display=document.getElementById("display");
    let inputRed=document.getElementById("inputRed");
    let inputGreen=document.getElementById("inputGreen");
    let inputBlue=document.getElementById("inputBlue");
    let valueR=inputRed.value;
    let valueG=inputGreen.value;
    let valueB=inputBlue.value;
    let outputR=document.getElementById("outputRed")
    let outputG=document.getElementById("outputGreen")
    let outputB=document.getElementById("outputBlue")

    outputR.innerHTML = valueR;
    outputG.innerHTML = valueG;
    outputB.innerHTML = valueB;
    display.style.backgroundColor="rgb(" + valueR + "," + valueG + "," + valueB + ")";
}
window.addEventListener("load", setup);