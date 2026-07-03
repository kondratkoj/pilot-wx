let rawMETAR = "KRUE 010053Z AUTO 04005G20KT 10SM TS FEW060 SCT070 SCT085 29/23 A3001 RMK AO2"

let arr = rawMETAR.split(" ")

let station = arr[0];

let date = `Day of Month: ${arr[1].slice(0,2)}, at ${arr[1].slice(2,7)}`;

let wind = arr.find((token) => token.endsWith("KT"));

let windDir = wind.slice(0,3);
let windVel = wind.slice(3,5);
let windGust = null

if (wind.includes("G")) {
  windGust = wind.slice(6,8);
}

let windLine = windGust != null ?
  `Wind Direction ${windDir}, Speed ${windVel}, Gusting ${windGust} KTs` :
  `Wind Direction ${windDir}, Speed ${windVel}`;

console.log(arr);
console.log(`Station: ${station}`);
console.log(date);
console.log(windLine);