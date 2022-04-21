const clubs = ["", "1c.png", "2c.png", "3c.png", "4c.png", "5c.png", "6c.png", "7c.png", "8c.png", "9c.png", "10c.png", "11c.png", "12c.png", "13c.png"];
const diamonds = ["", "1d.png", "2d.png", "3d.png", "4d.png", "5d.png", "6d.png", "7d.png", "8d.png", "9d.png", "10d.png", "11d.png", "12d.png", "13d.png"];
const hearts = ["", "1h.png", "2h.png", "3h.png", "4h.png", "5h.png", "6h.png", "7h.png", "8h.png", "9h.png", "10h.png", "11h.png", "12h.png", "13h.png"];
const spades = ["", "1s.png", "2s.png", "3s.png", "4s.png", "5s.png", "6s.png", "7s.png", "8s.png", "9s.png", "10s.png", "11s.png", "12s.png", "13s.png"];

document.querySelector(".btn").addEventListener("click", function () {

    let deck1 = [];
    let deck2 = [];

    for (let index = 0; index < 4; index++) {
        let randomNumber1 = Math.floor(Math.random() * 13) + 1;
        let randomNumber2 = Math.floor(Math.random() * 13) + 1;
        deck1.push(randomNumber1);
        deck2.push(randomNumber2);
    }

    let deck1Sum = deck1.reduce((accum, curr) => accum + curr);
    let deck2Sum = deck2.reduce((accum, curr) => accum + curr);

    if (deck1Sum > deck2Sum) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (deck2Sum > deck1Sum) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }

    document.querySelector("#d11").setAttribute("src", "images/" + clubs[deck1[0]]);
    document.querySelector("#d12").setAttribute("src", "images/" + diamonds[deck1[1]]);
    document.querySelector("#d13").setAttribute("src", "images/" + hearts[deck1[2]]);
    document.querySelector("#d14").setAttribute("src", "images/" + spades[deck1[3]]);
    document.querySelector("#d21").setAttribute("src", "images/" + clubs[deck2[0]]);
    document.querySelector("#d22").setAttribute("src", "images/" + diamonds[deck2[1]]);
    document.querySelector("#d23").setAttribute("src", "images/" + hearts[deck2[2]]);
    document.querySelector("#d24").setAttribute("src", "images/" + spades[deck2[3]]);
});