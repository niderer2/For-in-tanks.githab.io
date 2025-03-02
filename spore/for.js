window.onload = () => {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const spore = urlParams.get('spore');
    console.log(spore);
    let spore1 = document.querySelector('.spore');
    spore1.textContent = spore
    let place1 = document.querySelector('.place');
    let txt = document.querySelector('.txt');

    if (spore >= 50000) {
        place1.textContent = 1
    } else if (spore >= 40550) {
        place1.textContent = 2
    } else if (spore >= 37000) {
        place1.textContent = 3
    } else if (spore >= 33000) {
        place1.textContent = 4
    } else if (spore >= 32000) {
        place1.textContent = 5
    } else if (spore >= 27000) {
        place1.textContent = 6
    } else if (spore >= 24950) {
        place1.textContent = 7
    } else if (spore >= 23750) {
        place1.textContent = 8
    } else if (spore >= 19000) {
        place1.textContent = 9
    } else if (spore >= 16000) {
        place1.textContent = 10
        place1.style.left = '40%'
    } else if (spore >= 15000) {
        place1.textContent = 11
        place1.style.left = '40%'
    } else if (spore >= 10500) {
        place1.textContent = 12
        place1.style.left = '40%'
    } else if (spore >= 10000) {
        place1.textContent = 13
        place1.style.left = '40%'
    } else if (spore >= 9000) {
        place1.textContent = Math.round(Math.random() * (20 - 14) + 14)
        place1.style.left = '40%'
    } else {
        txt.textContent = 'you are not included in the table, for this you need at least 9000 points'
    }

    let buttom = document.querySelector('.bottom');
    buttom.addEventListener('mouseenter', function () {
        buttom.style.transform = 'scale(1.5)';
        buttom.style.left = '33%'
        buttom.style.top = '65%'
    });

    buttom.addEventListener('mouseleave', function () {
        buttom.style.transform = 'scale(1)';
        buttom.style.left = '38.5%'
        buttom.style.top = '70%'
    });

    buttom.addEventListener('mousedown', function () {
        buttom.style.transform = 'scale(1)';
        buttom.style.left = '38.5%'
        buttom.style.top = '70%'
    });

    buttom.addEventListener('mouseup', function () {
        buttom.style.transform = 'scale(1.5)';
        buttom.style.left = '33%'
        buttom.style.top = '65%'
    });

    buttom.addEventListener('click', function () {
        window.location.href = '../game/start.html';
    });

};