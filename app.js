const person = {
    firstname: document.getElementById("vname"),
    lastname: document.getElementById("nname"),
    address: document.getElementById("adress"),
    postalCode: document.getElementById("post"),
    birthday: document.getElementById("birthday"),
    gender: adress()
}

const pizza = {
    type: "",
    hotness: hotness(),
    extras: toping(),
    additional: ""
}

const adress = () => document.getElementById("gender") == 'm' ? 'Herr' : 'Frau';

const toping = () => {
    const cheese = document.querySelector('#cheese') ? 'Käse' : '';
    const tomato = document.querySelector('#tomato') ? 'Tomaten' : '';
    const sauce = document.querySelector('#sauce') ? 'extra Soße' : '';
    const ananas = document.querySelector('#ananas') ? 'Ananas' : '';
    const egg = document.querySelector('#egg') ? 'Ei' : '';
    const corn = document.querySelector('#corn') ? 'Mais' : '';

    const tp = { cheese, tomato, sauce, ananas, egg, corn };
    let out = '';

    for (const iterator of tp) {
        out += iterator + ', ';
    }
    return out;
};

const hotness = () => {
    wert = Number(wert);

    let reale_breite = (breite / 100) * wert;

    document.getElementById("colour").style.width = reale_breite + "px";

    document.getElementById("hotness").value = wert;

    document.getElementById("hotnessNumber").value = wert;

    const ht = wert / 4;

    if (ht > 3) {
        document.getElementById("nb").style.backgroundColor = "#00ff00";
        farbe = "#00ff00";
        return 'tödlich scharf';
    }
    if (ht > 3 && ht < 2) {
        document.getElementById("nb").style.backgroundColor = "#ffff00";
        farbe = "#ffff00";
        return 'scharf';
    }
    if (ht > 1 && ht < 2) {
        document.getElementById("nb").style.backgroundColor = "#ff8000";
        farbe = "#ff8000";
        return 'relativ scharf';
    }
    if (ht < 1) {
        document.getElementById("nb").style.backgroundColor = "#ff0000";
        farbe = "#ff0000";
        return 'mild';
    }
}