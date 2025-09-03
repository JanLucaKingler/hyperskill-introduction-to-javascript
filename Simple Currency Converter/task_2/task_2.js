const input = require("sync-input");
const availableCurrencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
const rates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");


function main() {
    const fromCurrency = "USD";
    const toCurrency = input("To: ").toUpperCase();


    if (!availableCurrencies.includes(toCurrency)) {
        console.log("Unknown currency");
        return;
    }
    const amountInput = input("Amount: ");
    const amount = Number(amountInput);


    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return;
    }
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return;
    }
    const convertedAmount = amount * rates[toCurrency];
    console.log(`Result: ${amount} USD equals ${convertedAmount.toFixed(4)} ${toCurrency}`);
}
main();
