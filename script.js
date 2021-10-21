const zoneVal = document.querySelector("#valeur");
let valCursor = document.querySelector('.valAngle');
const banner1 = document.querySelector('.banner1');
const banner2 = document.querySelector('.banner2');
const banner3 = document.querySelector('.banner3');
const panels0 = document.querySelectorAll('.panel0');
const panels1 = document.querySelectorAll('.panel1');
const panels2 = document.querySelectorAll('.panel2');
const screen = document.querySelector('.screen')
const hautImg = -200;
const modal = document.querySelector('.modal');

function AffVal() {
    valCursor = document.querySelector('.valAngle');
    zoneVal.textContent = Math.floor(valCursor.value / 3.6) + '%';
    banner1.setAttribute('style', 'transform:rotateY(' +
        valCursor.value + 'deg) translateY(' +
        (hautImg+(valCursor.value / 3.6) * -1) + 'px);');
    banner2.setAttribute('style', 'transform:rotateY(' +
        valCursor.value + 'deg) translateY(' +
        (hautImg + (valCursor.value / 3.6) * -1) + 'px);');
    banner3.setAttribute('style', 'transform:rotateY(' +
        valCursor.value + 'deg) translateY(' +
        (hautImg + (valCursor.value / 3.6) * -1) + 'px);');
    // screen.setAttribute('style', 'transform:translate( -50%, ' +
        // (((valCursor.value / 3.6) * -1) - 146) + 'px);');
}

banner1.addEventListener('mouseover', () => {
    panels0.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(0); cursor:pointer;');
    });
});
banner2.addEventListener('mouseover', () => {
    panels1.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(0); cursor:pointer;');
    })
});
banner3.addEventListener('mouseover', () => {
    panels2.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(0); cursor:pointer;');
    })
});

banner1.addEventListener('mouseleave', () => {
    panels0.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(1); transition:filter 4s ease-in;');
    });
});
banner2.addEventListener('mouseleave', () => {
    panels1.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(1); transition:filter 4s ease-in;');
    });
});
banner3.addEventListener('mouseleave', () => {
    panels2.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(1); transition:filter 4s ease-in;');
    });
});

banner1.addEventListener('click', () => {
    modal.setAttribute('style', 'visibility:visible; background-color:#0009; transform:scale(10) translateZ(500px);');
});

modal.addEventListener('click', () => {
    modal.setAttribute('style', 'background-color:transparent; transform:scale(1); visibility:hidden;');
});