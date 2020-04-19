const inpNavn = document.querySelector("inpNavn");
const inpAlder = document.querySelector("inpAlder");
const btn = document.querySelector("#btn");

let venneliste = document.querySelector("#venneliste");

let venner = [
    { navn : "Ine", alder: 23 },
    { navn : "Ludvik", alder: 27 },
    { navn : "Caroline", alder: 22 }
];

function visVenner() {
    vennelisten.innerHTML = "<div><strong>Navn</strong></div><div><strong>Alder</strong></div>";

    for(const venn of venner) {
        venneliste.innerHTLM += `
            <div>${venn.navn}</div>
            <div>${venn.alder}</div>
        `
    }
}

visVenner()

function leggTilVenn() {
    const nyVenn = { navn: inpNavn.value, alder: inpAlder.value }
    venner = [nyVenn, ...venner]

    visVenner();
}

btn.onclick = leggTilVenn;