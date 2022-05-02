const setup = () => {
    let now = new Date();
    let birthday = new Date(2003, 1, 8);
    let timeInMs = now - birthday;
    let timeInDays = Math.floor(timeInMs / (24*60*60*1000));
    console.log(timeInDays);
    
}
window.addEventListener("load", setup);