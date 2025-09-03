const input = require('sync-input')

const coffeeTypes = {
    1: {
        name: 'espresso',
        water: 250,
        milk: 0,
        beans: 16,
        price: 4
    },
    2: {
        name: 'latte',
        water: 350,
        milk: 75,
        beans: 20,
        price: 7
    },
    3: {
        name: 'cappuccino',
        water: 200,
        milk: 100,
        beans: 12,
        price: 6
    }
}

const supplies = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
};

const printMachineState = () => {
    const { water, milk, beans, cups, money } = supplies;

    console.log('The coffee machine has:');
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
}

const takeMoney = () => {
    console.log(`I gave you $${supplies.money}`);
    supplies.money = 0;
}

const buyCoffee = () => {
    const type = Number(input('What do you want to buy ? 1 - espresso, 2 - latte, 3 - cappuccino: '));
    const { water, milk, beans, price } = coffeeTypes[type];

    supplies.water -= water;
    supplies.milk -= milk;
    supplies.beans -= beans;
    supplies.cups -= 1;
    supplies.money += price;
}

const topUp = () => {
    const water = Number(input('Write how many ml of water you want to add: '));
    const milk = Number(input('Write how many ml of milk you want to add: '));
    const beans = Number(input('Write how many grams of coffee beans you want to add: '));
    const cups = Number(input('Write how many disposable coffee cups you want to add: '));

    supplies.water += water;
    supplies.milk += milk;
    supplies.beans += beans;
    supplies.cups += cups;
}

const printEmptyString = (n = 1) => {
    for (let i = 0; i < n; i++) {
        console.log('');
    }
}

const readCmd = () => {
    const action = input('Write action (buy, fill, take): ');

    switch (action) {
        case 'buy':
            buyCoffee();
            break;
        case 'fill':
            topUp();
            break;
        case 'take':
            takeMoney();
            break;
        default:
            break;
    }
}

printMachineState();
printEmptyString();
readCmd();
printEmptyString();
printMachineState();
