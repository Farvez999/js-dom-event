console.log('Hello Event');
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})
