const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.20
const euro = 5.59
const bitcoin = 90740.03

const convertValues = () => {
    const inputReais = document.getElementById("input-value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)

    if(select.value === "US$ Dólar Americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar)
    }

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro)
    }

    if(select.value === "₿ Bitcon"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputReais / bitcoin)
    }
}

const changeCurrency = () =>{
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.getElementById ("currency-img")

    if (select.value === "US$ Dólar Americano"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/estados-unidos.png"
    }

    if (select.value === "€ Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }

    if (select.value === "₿ Bitcon"){
        currencyName.innerHTML = "Bitcon"
        currencyImg.src = "./img/bitcoin.png"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)



