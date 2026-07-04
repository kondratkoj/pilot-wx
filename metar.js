
let rawMETAR = "KRUE 010053Z AUTO 04005G20KT 10SM TS FEW060 VV002 SCT070 SCT085 29/23 A3001 RMK AO2"

let arr = rawMETAR.split(" ")

let station = arr[0];

let date = `Day of Month ${arr[1].slice(0,2)}, at ${arr[1].slice(2,7)}`;
//wind parsing
let wind = arr.find((token) => token.endsWith("KT"));let windDir = wind.slice(0,3);
let windVel = wind.slice(3,5);
let windGust = null

if (wind.includes("G")) {
  windGust = wind.slice(6,8);
}

let windLine = windGust != null ?
  `Wind Direction ${windDir}, Speed ${windVel}, Gusting ${windGust} KTs` :
  `Wind Direction ${windDir}, Speed ${windVel}`;
//visibility parsing
let vis = arr.find((token) => token.endsWith("SM"));
let vvis = arr.find((token) => token.startsWith("VV"));
let parseVis = null;
let visOption = null;

if (vis != null) {
  parseVis = vis.slice(0,-2);
  visOption = parseVis
};
//ceiling parcing 
let isClear = arr.some((token) => token === "CLR" || token === "SKC" || token === "NSC");
let obscured = arr.find((token) => token.startsWith("VV"));
let cig = arr.filter((token) => 
  token.startsWith("FEW") ||
  token.startsWith("BKN") ||
  token.startsWith("OVC") ||
  token.startsWith("SCT")
);
const cloudCodes = {
  FEW: "Few",
  SCT: "Scattered",
  BKN: "Broken",
  OVC: "Overcast"
};


console.log(arr);
console.log(`Station: ${station}`);
console.log(date);
console.log(windLine);
console.log(`Visibility ${visOption} SM`);
console.log(cig, isClear, obscured);