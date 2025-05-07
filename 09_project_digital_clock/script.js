// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

//let date = new Date()
//console.log(date.toLocaleTimeString());

//setInterval(function () {
//    let date = new Date()
//    //console.log(date.toLocaleTimeString());
//    clock.innerHTML = date.toLocaleTimeString();

//}, 1000)

setInterval(function () {
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: "2-digit",
        second: "2-digit",
        hour12: true // this ensure AM/MP is shown 
    })

}, 1000)