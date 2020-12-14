// Die Anrede fuer Man oder Frau 👫
const gender = (gender) => gender == 'm' ? 'geehrter Herr' : ' geehrte Frau';

// Extra Zutaten fuer die Pizza 🍅
const toping = () => {
    const cheese = document.querySelector('#cheese') ? 'Käse' : '';
    const tomato = document.querySelector('#tomato') ? 'Tomaten' : '';
    const sauce = document.querySelector('#sauce') ? 'extra Soße' : '';
    const ananas = document.querySelector('#ananas') ? 'Ananas' : '';
    const egg = document.querySelector('#egg') ? 'Ei' : '';
    const corn = document.querySelector('#corn') ? 'Mais' : '';

    const tp = [cheese, tomato, sauce, ananas, egg, corn];
    let out = '';

    for (const iterator of tp) {
        out += iterator + ', ';
    }
    return out;
};

// Schaerfe der Pizza 🥵
const hotness = (wert) => {

    let breite = 500;
    let reale_breite = (breite / 100) * wert;

    wert = Number(wert);

    const ht = wert / 4;

    if (ht > 3) {
        farbe = "#00ff00";
        return 'tödlich scharf';
    } else if (ht > 3 && ht < 2) {
        farbe = "#ffff00";
        return 'scharf';
    } else if (ht > 1 && ht < 2) {
        farbe = "#ff8000";
        return 'relativ scharf';
    } else if (ht < 1) {
        farbe = "#ff0000";
        return 'mild';
    }
}

// Personen Objekt mit allen Attributen der Bestellung 🕺
const person = {
    firstname: 'jan',
    lastname: 'Kammellander',
    adress: 'Alleebreiten 11',
    postalCode: 2573,
    birthday: '11.12.2020',
    gender: 'geehrter Herr'
}

// Pizza Objekt mit allen Attributen der Bestellung 🍕
const pizza = {
    type: 'Margaritha',
    hotness: 1,
    extras: ['Käse', 'Soße'],
    additional: 'Viel Käse'
}

// Anrede der Person 📝
const address = (person) => {
    const { firstname, lastname, adress, postalCode, birthday, gender } = person;
    return `Sehr ${gender} ${firstname} ${lastname}
         <br> geboren am ${birthday}
          <br> ${adress}, ${postalCode} <br>`;
}

// Rueckgabe der Bestellung als Text 📋
const pizzaBestellung = (pizza) => {
    const { type, hotness, extras, additional } = pizza;
    return `Sie haben folgende Pizza bestellt
        <br> ${type} mit ${extras} and zusätzlich wollten Sie noch ${additional}
        <br> Vielen Dank für Ihre Bestellung!`;
}

// Funktion zur Rueckgabe aller Infos der Bestellung an den Nutzer 🔙
(function output() {
    // Person 🕺
    person.firstname = 'Jan';
    person.lastname = 'Kammellander';
    person.adress = 'Alleebreiten 11';
    person.postalCode = '2473';
    person.birthday = '11.12.2020';
    person.gender = gender('m');

    // 🍕
    pizza.type = 'Margraitha';
    pizza.extras = ['Yes'];
    pizza.hotness = hotness(75);
    pizza.additional = ['Käse', 'Tomato'];

    // 🔙
    console.log(address(person) + pizzaBestellung(pizza));
})();