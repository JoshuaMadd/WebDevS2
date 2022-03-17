const setup = () => {
    let btn = document.getElementById('btn');
    let input = document.getElementById('input');
    btn.addEventListener('click', logInputMetSpaties );
}

const logInputMetSpaties = () => {
    console.log(maakMetSpaties(input.value));
    // let text = input.value;
    // let output = '';
    // for (let i = 0; i < text.length; i++) {
    //     if (text.charAt(i) !== ' ')
    //         output += text.charAt(i) + ' '
    // }
    // console.log(output);
}

const maakMetSpaties = (inputText) => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) !== ' ')
            result += inputText.charAt(i) + ' '
    }
    return result;
}

window.addEventListener("load", setup);