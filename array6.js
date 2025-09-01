/*const personer = [
  { fornamn: "Anna", efternamn: "Andersson", stad: "Stockholm" },
  { fornamn: "Erik", efternamn: "Eriksson", stad: "Göteborg" },
  { fornamn: "Sara", efternamn: "Svensson", stad: "Malmö" },
  { fornamn: "Lars", efternamn: "Larsson", stad: "Stockholm" },
  { fornamn: "Emma", efternamn: "Ek", stad: "Göteborg" },
  { fornamn: "Nils", efternamn: "Nilsson", stad: "Malmö" },
  { fornamn: "Lisa", efternamn: "Lindberg", stad: "Stockholm" },
  { fornamn: "Johan", efternamn: "Johansson", stad: "Göteborg" },
  { fornamn: "Maria", efternamn: "Månsson", stad: "Malmö" },
  { fornamn: "Per", efternamn: "Persson", stad: "Stockholm" }
];

const vipStatus = personer.map(person => ({
    fullName: person.fornamn + " " + person.efternamn,
    stad: person.stad,
    vip: person.efternamn[0] === "A" || person.efternamn[0] === "E"
}));


const vipGöteborg = vipStatus
.filter(person => person.vip && person.stad === "Göteborg")
.map(person => person.fullName);

const endastVip = vipStatus.filter(person => person.vip);

console.log("In-värde: Array med vip-personer:", endastVip);
console.log("Ut-värde: VIP från göteborg ", vipGöteborg);
*/
