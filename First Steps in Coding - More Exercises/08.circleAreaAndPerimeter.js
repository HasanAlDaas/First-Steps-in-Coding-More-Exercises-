function circleAreaAndPerimeter(input){
let r = Number(input[0]);

let area = Math.PI * Math.pow(r,2);
console.log(area.toFixed(2));

let parameter = 2 * Math.PI * r
console.log(parameter.toFixed(2));

}
circleAreaAndPerimeter([3])