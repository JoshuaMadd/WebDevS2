const setup = () => {
    let string1 = 'aardappel';
    let string2 = 'aardappel';
    if (string1 == string2 && string1 === string2) {
        console.log('Test 1 geslaagd');
    }
    let string3 = 'een aardappel schijfje';
    if (string1 == string3.slice(4,13) && string1 === string3.slice(4,13)){
        console.log('Test 2 geslaagd');
    }
    let string4 = '';
    if (string1 == string4.concat('aardappel') && string1 === string4.concat('aardappel')) {
        console.log('Test 3 geslaagd');
    }
}
window.addEventListener("load", setup);