console.log('Hello Event');
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}