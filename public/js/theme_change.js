function changeBlue() {
    document.querySelector(".form-container").classList.remove('pink', 'yellow');
    document.querySelector(".form-container").classList.add('blue');
}

function changeYellow() {
    document.querySelector(".form-container").classList.remove('pink', 'blue');
    document.querySelector(".form-container").classList.add('yellow');
}

function changePink() {
    document.querySelector(".form-container").classList.remove('yellow', 'blue');
    document.querySelector(".form-container").classList.add('pink');
}
