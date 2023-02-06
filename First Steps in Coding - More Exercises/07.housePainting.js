function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let windows = 1.50*1.50;

    let sideWalls = (x * y * 2) - windows;
    let backWall = x * x;
    let frontWall = backWall - (1.2*2);

    let total = sideWalls + frontWall + backWall - windows
    let greenPaint = total / 3.4
    console.log(greenPaint.toFixed(2));
    
    let roof = 2 * x * y 
    let triangles = 2 * (x * h/2) 
    let totalRoof = (roof + triangles) / 4.3
     
    console.log(totalRoof.toFixed(2));

}

housePainting([6,10,5.2])