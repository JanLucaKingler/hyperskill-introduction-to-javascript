let water = input("Write how many ml of water the coffee machine has:");
let milk = input("Write how many ml of milk the coffee machine has:");
let beans = input("Write how many grams of coffee beans the coffee machine has:");
let cupsNeeded = input("Write how many cups of coffee you will need:");


const waterPerCup = 200;
const milkPerCup = 50;
const beansPerCup = 15;

let cupsFromWater = Math.floor(water / waterPerCup);
let cupsFromMilk = Math.floor(milk / milkPerCup);
let cupsFromBeans = Math.floor(beans / beansPerCup);
let maxCupsPossible = Math.min(cupsFromWater, cupsFromMilk, cupsFromBeans);

if (maxCupsPossible >= cupsNeeded) {
    let extra = maxCupsPossible - cupsNeeded;
    if (extra == 0) {
        console.log("Yes, I can make that amount of coffee");
    } else {
        console.log(`Yes, I can make that amount of coffee (and even ${extra} more than that)`);
    }
} else {
    console.log(`No, I can make only ${maxCupsPossible} cup(s) of coffee`);
}
