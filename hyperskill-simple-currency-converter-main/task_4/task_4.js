let input = require("sync-input");
const greeting = "Welcome to Currency Converter!";
const prompt = "1-Convert currencies 2-Exit program";
const currencies = [
    {currency: "USD", exchangeRate: 1.0},
    {currency: "JPY", exchangeRate: 113.5},
    {currency: "EUR", exchangeRate: 0.89},
    {currency: "RUB", exchangeRate: 74.36},
    {currency: "GBP", exchangeRate: 0.75},
];

function exchangeRate(currencyObj1, currencyObj2) {
    return  1 / currencyObj1.exchangeRate * currencyObj2.exchangeRate;
}

function currencyConversion(currencyObj1, currencyObj2, amount=1) {
    return amount * exchangeRate(currencyObj1, currencyObj2);
}


function printExchangeRate(currencyObj1, currencyObj2) {
    let exchangeRate = currencyConversion(currencyObj1, currencyObj2);
    console.log(`${currencyObj1.exchangeRate} ` +
        `${currencyObj1.currency} equals ${exchangeRate} ` +
        `${currencyObj2.currency}`);
}

function inputCurrency(promptStr) {
    let currencyObj;
    let currency;
    while (currencyObj === undefined) {
        if (promptStr === "From: ") {
            console.log("What do you want to convert?");
        }
        currency = input(promptStr).toUpperCase();
        currencyObj = currencies.find(obj => obj.currency === currency);
        if (currencyObj === undefined) {
            console.log("Unknown currency");
        }
    }
    return currencyObj;

}

function convertCurrencies() {

    let currencyObj1 = inputCurrency("From: ");
    let currencyObj2 = inputCurrency("To: ");

    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return 1;
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return 1;
    }

    let exchangeRate = currencyConversion(currencyObj1, currencyObj2, amount).toFixed(4);
    console.log(`Result: ${amount} ` +
        `${currencyObj1.currency} equals ${exchangeRate} ` +
        `${currencyObj2.currency}`);
}

function mainApp() {
    let runApp = 0;
    console.log(greeting);
    let currencyObj1 = currencies.find(obj => obj.currency === "USD");
    currencies.forEach((obj) => printExchangeRate(currencyObj1, obj));

    while (runApp === 0) {
        console.log("What do you want to do?");
        console.log(prompt);
        let usersChoice = input();
        switch (usersChoice) {
            case "1":
                convertCurrencies();
                break;
            case "2":
                console.log("Have a nice day!");
                runApp = 1;
                break;
            default:
                console.log("Unknown input");
                break;
        }
    }
}
mainApp();
