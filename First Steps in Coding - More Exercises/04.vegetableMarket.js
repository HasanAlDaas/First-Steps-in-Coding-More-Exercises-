function vegetableMarket(input){
    let pricePerKiloVeg = Number(input[0]);
    let pricePerKiloFruit = Number(input[1]);
    let totalKilosVeg = Number(input[2]);
    let totalKilosFruits = Number(input[3]);

    let priceVeg = pricePerKiloVeg * totalKilosVeg;
    let priceFruits = pricePerKiloFruit * totalKilosFruits;

    console.log(((priceVeg + priceFruits) / 1.94).toFixed(2));


}
vegetableMarket([0.194,
    19.4,
    10,
    10
    ])