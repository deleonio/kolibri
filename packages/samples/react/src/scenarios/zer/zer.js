function generiereZufallsVereinsdaten(anzahl) {
    const vereinsnamen = ["Sportfreunde", "Kulturverein", "Naturschützer", "Musikfreunde"];
    const orte = ["Berlin", "München", "Hamburg", "Köln"];
    const themen = ["Sport", "Kultur", "Natur", "Musik"];
    const vorsitzende = ["Max Mustermann", "Erika Musterfrau", "Klaus Klein", "Lisa Groß"];

    function zufallsElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generiereIBAN() {
        return 'DE' + Math.floor(10000000000000000 + Math.random() * 9000000000000000).toString();
    }

    let vereinsdaten = [];
    for (let i = 0; i < anzahl; i++) {
        vereinsdaten.push({
            Vereinsname: zufallsElement(vereinsnamen),
            Ort: zufallsElement(orte),
            Thema: zufallsElement(themen),
            Vorsitzender: zufallsElement(vorsitzende),
            IBAN: generiereIBAN()
        });
    }

    return vereinsdaten;
}

// Beispielaufruf
console.log(generiereZufallsVereinsdaten(5));

