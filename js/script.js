let currencyPLN = document.querySelector(".js-formPLN");
let currencyNotPLN = document.querySelector(".js-formNotPLN");
let formElement = document.querySelector(".js-form");
let formOutcome = document.querySelector(".js-formOutcome");

let rateEUR = 4.53
let rateUSD = 3.73
let rateGBP = 5.21

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let PLN = currencyPLN.value;
    let notPLN = currencyNotPLN.value;
    let outcome;
    switch (notPLN) {
        case "EUR":
            outcome = PLN / rateEUR;
            break;
        case "USD":
            outcome = PLN / rateUSD;
            break;
        case "GBP":
            outcome = PLN / rateGBP;
            break;
    }

    formOutcome.innerText = outcome.toFixed(2) + " PLN"

})



