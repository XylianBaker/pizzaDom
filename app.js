// Die Anrede fuer Man oder Frau 👫
const gender = (gender) => gender == 'm' ? 'geehrter Herr 🤵' : ' geehrte Frau 💃';

// Extra Zutaten fuer die Pizza 🍅
const toping = () => {
    const cheese = document.querySelector('#cheese:checked') ? 'Käse 🧀' : '';
    const tomato = document.querySelector('#tomato:checked') ? 'Tomaten 🍅' : '';
    const sauce = document.querySelector('#sauce:checked') ? 'extra Soße 🍝' : '';
    const ananas = document.querySelector('#ananas:checked') ? 'Ananas 🍍' : '';
    const egg = document.querySelector('#egg:checked') ? 'Ei 🥚' : '';
    const corn = document.querySelector('#corn:checked') ? 'Mais 🌽' : '';

    const tp = [cheese, tomato, sauce, ananas, egg, corn];
    let out = '';

    for (const iterator of tp) {
        if (iterator != '') {
            out += iterator + ', ';
        }
    }

    // Letzte Komma der Extras wird mit einem "und" ersetzt 🔁
    out = out.slice(0, out.length - 2);
    const lastComma = out.lastIndexOf(',');
    let andRepl = out.substr(lastComma);
    andRepl = andRepl.substr(1, andRepl.length - 1);

    return out.substr(0, lastComma) + ' und ' + andRepl;
};

// Schaerfe der Pizza 🥵
const hotness = () => {
    const schaerfe = document.getElementById("hotness").value * 1;
    window.document.bform.scoville.value = schaerfe;
    let out = 'test';

    switch (schaerfe) {
        case 1:
            document.getElementById("out").style.backgroundColor = '#00aeef';
            out = 'mild 🥶';
            break;

        case 2:
            document.getElementById("out").style.backgroundColor = '#f9ed32';
            out = 'bischen scharf 🌶';
            break;

        case 3:
            document.getElementById("out").style.backgroundColor = '#f7941d';
            out = 'scharf 🧨';
            break;

        case 4:
            document.getElementById("out").style.backgroundColor = '#ef4136';
            out = 'tödlich scharf! 🥵';
            break;
    }

    return out;
}

// Personen Objekt mit allen Attributen der Bestellung 🕺
const person = {
    firstname: 'Jan',
    lastname: 'Kammellander',
    adress: 'Alleebreiten 11',
    postalCode: 2573,
    birthday: '11.12.2020',
    gender: 'geehrter Herr'
}

// Pizza Objekt mit allen Attributen der Bestellung 🍕
const pizza = {
    type: 'Margaritha',
    hotness: 'mild',
    extras: ['Käse', 'Soße'],
    additional: 'Viel Käse'
}

// Anrede der Person 📝
const address = (person) => {
    const { firstname, lastname, adress, postalCode, birthday, gender } = person;
    return `Sehr ${gender} ${firstname} ${lastname}
         <br><br> geboren am ${birthday} 👶
          <br> ${adress}, ${postalCode} 🏡 <br><br>`;
}

// Rueckgabe der Bestellung als Text 📋
const pizzaBestellung = (pizza) => {
    const { type, hotness, extras, additional } = pizza;
    return `Sie haben folgende Pizza 🍕 bestellt:
        <br> ${type} mit ${extras} and zusätzlich wollten Sie noch ${additional}
        <br> Die Pizza sollte ${hotness} sein.
        <br><br> Vielen Dank für Ihre Bestellung! 🤙`;
}

// Funktion zur Rueckgabe aller Infos der Bestellung an den Nutzer 🔙
function output() {
    // Person 🕺
    person.firstname = window.document.bform.vname.value;
    person.lastname = window.document.bform.nname.value;
    person.adress = window.document.bform.adress.value;
    person.postalCode = window.document.bform.post.value;
    person.birthday = window.document.bform.birthday.value;
    person.gender = gender(window.document.bform.gender.value);

    // Pizza 🍕
    let typePizza = window.document.bform.pizzaType;
    pizza.type = typePizza.options[typePizza.selectedIndex].text;
    pizza.extras = toping();
    pizza.hotness = hotness();
    pizza.additional = document.getElementById("wishes").value;

    // Out 🔙
    document.getElementById("out").innerHTML = address(person) + pizzaBestellung(pizza);
};