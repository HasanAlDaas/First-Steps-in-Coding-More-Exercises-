function fishland(input){
let skumriaPrice = Number(input[0]);
let cacaPrice = Number(input[1]);
let palamudKg = Number(input[2]);
let safridKg = Number(input[3]);
let shellsKg = Number(input[4]);

let palamudPrice =skumriaPrice + skumriaPrice * 0.6;
let safridPrice =cacaPrice + cacaPrice * 0.8;
let shellsPrice = 7.50;

let totalPalamud = palamudKg * palamudPrice;
let totalSafrid = safridKg * safridPrice;
let totalShells = shellsKg * 7.50;

let totalSum = totalPalamud + totalSafrid + totalShells;
console.log(totalSum.toFixed(2));


}
fishland([6.90, 4.20 ,1.5 ,2.5, 1])