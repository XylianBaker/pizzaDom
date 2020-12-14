const person = {
    firstname: 'jan',
    lastname: 'Kammellander',
    adress: 'Alleebreiten 11',
    postalCode: 2573,
    birthday: '11.12.2020',
    gender: 'geehrter Herr'
}

const personText = (person) => {
    const { firstname, lastname, adress, postalCode, birthday, gender } = person;

    console.log(`Sehr ${gender} ${firstname} ${lastname}
    <br> geboren am ${birthday}
     <br> ${adress}, ${postalCode} <br>`);

    return `Sehr ${gender} ${firstname} ${lastname}
     <br> geboren am ${birthday}
      <br> ${adress}, ${postalCode} <br>`;
}

personText(person);

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
    } else if (ht > 3 && ht < 2) {
        document.getElementById("nb").style.backgroundColor = "#ffff00";
        farbe = "#ffff00";
        return 'scharf';
    } else if (ht > 1 && ht < 2) {
        document.getElementById("nb").style.backgroundColor = "#ff8000";
        farbe = "#ff8000";
        return 'relativ scharf';
    } else if (ht < 1) {
        document.getElementById("nb").style.backgroundColor = "#ff0000";
        farbe = "#ff0000";
        return 'mild';
    }

    const toping = () => {
        const cheese = 'cheese';
        const tomato = 'tomato';
        const sauce = 'sauce';
        const ananas = 'ananas';
        const egg = 'egg';
        const corn = 'corn';

        const tp = { cheese, tomato, sauce, ananas, egg, corn };
        let out = '';

        for (const iterator of tp) {
            out += iterator + ', ';
        }
        return out;
    };

    const pizza = {
        type: 'Margaritha',
        hotness: hotness(),
        extras: toping(),
        additional: 'Viel Käse'
    }

    const address = () => document.getElementById("gender") == 'm' ? 'geehrter Herr' : ' geehrte Frau';

    const personText = (person) => {
        const { firstname, lastname, adress, postalCode, birthday, gender } = person;
        return `Sehr ${gender} ${firstname} ${lastname}
         <br> geboren am ${birthday}
          <br> ${adress}, ${postalCode} <br>`;

        console.log(`Sehr ${gender} ${firstname} ${lastname}
          <br> geboren am ${birthday}
           <br> ${adress}, ${postalCode} <br>`);
    }

    const pizzaBestellung = (pizza) => {
        const { type, hotness, extras, additional } = pizza;
        return `Sie haben folgende Pizza bestellt
        <br> ${type} mit ${extras} and zusätzlich wollten Sie noch ${additional}
        <br> Vielen Dank für Ihre Bestellung`;
    }

    function ausgabe() {
        document.getElementById("id").innerHTML = personText(person) + pizzaBestellung(pizza);
    };

    console.log(personText(person))
}