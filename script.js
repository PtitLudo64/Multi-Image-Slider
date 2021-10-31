const zoneVal = document.querySelector("#valeur");
let valCursor = document.querySelector('.valAngle');
const banner1 = document.querySelector('.banner1');
const banner2 = document.querySelector('.banner2');
const banner3 = document.querySelector('.banner3');
const banner4 = document.querySelector('.banner4');
const panels0 = document.querySelectorAll('.panel0');
const panels1 = document.querySelectorAll('.panel1');
const panels2 = document.querySelectorAll('.panel2');
const panels3 = document.querySelectorAll('.panel3');
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
    banner4.setAttribute('style', 'transform:rotateY(' +
        valCursor.value + 'deg) translateY(' +
        (hautImg + (valCursor.value / 3.6) * -1) + 'px);');
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
banner4.addEventListener('mouseover', () => {
    panels3.forEach(element => {
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
banner4.addEventListener('mouseleave', () => {
    panels3.forEach(element => {
        element.setAttribute('style', 'filter:grayscale(1); transition:filter 4s ease-in;');
    });
});

banner1.addEventListener('click', () => {
    const modTitle = document.querySelector('.modal .titre');
    modTitle.textContent = 'Titre Banner 1';
    const modSubTitle = document.querySelector('.modal .sousTitre');
    modSubTitle.textContent = 'Sous Titre Banner 1';
    const modImage = document.querySelector('.modal .image');
    modImage.innerHTML='<img src="./img/0a.jpg">';
    modal.setAttribute('style', 'visibility:visible; background-color:#000b; transform:scale(1) translate3D(-50%, -50%, 500px);');
});

banner2.addEventListener('click', () => {
    const modTitle = document.querySelector('.modal .titre');
    modTitle.textContent = 'Titre Banner 2';
    const modSubTitle = document.querySelector('.modal .sousTitre');
    modSubTitle.innerHTML = 'Sous Titre Banner 2 <a href="https://dark.pajor.go.yn.fr/" target=_blank>Voir</a>';
    const modImage = document.querySelector('.modal .image');
    modImage.innerHTML = '<img src="./img/1a.jpg">';
    modal.setAttribute('style', 'visibility:visible; background-color:#0009; transform:scale(1) translate3D(-50%, -50%, 500px);');
});

banner3.addEventListener('click', () => {
    const modTitle = document.querySelector('.modal .titre');
    modTitle.textContent = 'Titre Banner 3';
    const modSubTitle = document.querySelector('.modal .sousTitre');
    modSubTitle.textContent = 'Sous Titre Banner 3';
    const modImage = document.querySelector('.modal .image');
    modImage.innerHTML = '<img src="./img/2a.jpg">';
    modal.setAttribute('style', 'visibility:visible; background-color:#0009; transform:scale(1) translate3D(-50%, -50%, 500px);');
});
banner4.addEventListener('click', () => {
    const modTitle = document.querySelector('.modal .titre');
    modTitle.textContent = 'Titre Banner 4';
    const modSubTitle = document.querySelector('.modal .sousTitre');
    modSubTitle.textContent = 'Sous Titre Banner 4';
    const modImage = document.querySelector('.modal .image');
    modImage.innerHTML = '<img src="./img/3a.jpg">';
    modal.setAttribute('style', 'visibility:visible; background-color:#000c; transform:scale(1) translate3D(-50%, -50%, 500px);');
});


modal.addEventListener('click', () => {
    modal.setAttribute('style', 'background-color:transparent; transform:translate3D(-50%, -50%, 0px) scale(0.01); visibility:hidden;');
});