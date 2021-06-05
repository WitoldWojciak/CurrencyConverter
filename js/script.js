{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.53;
        const rateUSD = 3.73;
        const rateGBP = 5.21;
        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, currency, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}



