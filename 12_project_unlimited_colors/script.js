// Generate a random color

const randomColor = function () {
    //* There are not random numbers these are HEX Code : 0123456789ABCDEF 
    const hex = "0123456789ABCDEF";//* total hex length is 16 
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
//console.log(Math.floor(Math.random() * 16))
//console.log(randomColor());
let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    //intervalId = setInterval(changeBgColor, 1000);
    //document.body.style.backgroundColor = randomColor();
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)
