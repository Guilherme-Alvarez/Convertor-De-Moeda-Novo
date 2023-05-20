const button = document.querySelector('button')
const currencyAll = document.querySelector('#select-moeda')

const dolar = 5
const bitcoin = 134 
const euro = 5.4
const libra = 6.2

const buttonClick = () =>{
    const value = document.querySelector('#input-value').value
    const realValue = document.querySelector('#real-value')
    const valueFinal = document.querySelector('#value-final')

    realValue.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);

    if (currencyAll.value === 'US$ Dólar Americano') {
        valueFinal.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value / dolar)
    }

    if (currencyAll.value === '€ Euro') {
        valueFinal.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(value / euro)
    }

    if (currencyAll.value === 'BTC Bitcoin') {
        valueFinal.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(value / bitcoin)
    }

    if (currencyAll.value === '£ Libra') {
        valueFinal.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(value / libra)
    }
}



const change = () =>{
    const nameMoeda = document.querySelector('#name-moeda')
    const flag = document.querySelector('#flag')

    if(currencyAll.value === 'US$ Dólar Americano'){
        nameMoeda.innerHTML = 'US$ Dólar Americano'
        flag.src = './assets/estados-unidos (1) 1.png'
    }

    if(currencyAll.value === 'BTC Bitcoin'){
        nameMoeda.innerHTML = 'BTC Bitcoin'
        flag.src = './assets/bitcoin 1.png'
    }

    if(currencyAll.value === '£ Libra'){
        nameMoeda.innerHTML = '£ Libra'
        flag.src = './assets/libra 1.png'
    }

    if(currencyAll.value === '€ Euro'){
        nameMoeda.innerHTML = '€ Euro'
        flag.src = './assets/euro.png'
    }

    buttonClick()
}

currencyAll.addEventListener('change', change)
button.addEventListener('click', buttonClick)