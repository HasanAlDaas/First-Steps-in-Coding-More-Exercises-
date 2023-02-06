function trainingLab (input){
let w = Number(input[0]);
let h = Number(input[1]) - 1;

let wInCm = w * 100;
let hInCm = h * 100; 

let wPlaces = Math.trunc(wInCm / 120);
let hPlaces = Math.trunc(hInCm / 70);

let total = (wPlaces * hPlaces) ;
console.log(total - 3);

}

trainingLab([15,8.9])