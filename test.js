// Die Anrede fuer Man oder Frau 👫
const gender = (gender) => gender == 'm' ? 'geehrter Herr' : ' geehrte Frau';

// Extra Zutaten fuer die Pizza 🍅
(function toping() {
    const cheese = 'cheese';
    const tomato = '';
    const sauce = 'sauce';
    const ananas = '';
    const egg = 'egg';
    const corn = 'corn';

    const tp = [cheese, tomato, sauce, ananas, egg, corn];
    let out = '';

    for (const iterator of tp) {
        if (iterator != '') {
            out += iterator + ', ';
        }
    }

    out = out.slice(0, out.length - 2);

    console.log(out);
    console.log(tp.length);
})();

// Schaerfe der Pizza 🥵
const hotness = () => {

    const schaerfe = 1;

    let out = '';

    switch (schaerfe) {
        case 1:
            out = 'mild';
            break;

        case 2:
            out = 'bischen scharf';
            break;

        case 3:
            out = 'scharf';
            break;

        case 4:
            out = 'tödlich scharf!';
            break;
    }

    return out;
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
        <br> Die Pizza sollte ${hotness} sein.
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
    pizza.hotness = hotness();
    pizza.additional = ['Käse', 'Tomato'];

    // 🔙
    console.log(address(person) + pizzaBestellung(pizza));
})();