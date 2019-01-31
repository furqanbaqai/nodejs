const axios = require('axios');

// USD, CAD, 20
// 20 USD is worth 26 CAD, you can spend this in the following countries: Canada

// API key: 3a06d3e638fdb23edafb3724350f9acc
// http://data.fixer.io/api/latest?access_key=3a06d3e638fdb23edafb3724350f9acc
// https://restcountries.eu/rest/v2/all
// https://restcountries.eu/rest/v2/currency/CAD

// Relies on standard promises
// const getExchangeRate = (from, to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=3a06d3e638fdb23edafb3724350f9acc')
//         .then((response) => {
//             const euro = 1 / response.data.rates[from];
//             const rate = euro * response.data.rates[to];
//             return rate;
//         });
// };

// Create Async version
const getExchangeRate = async (from, to) => {
    try{
        const response = await axios.get('http://data.fixer.io/api/latest?access_key=3a06d3e638fdb23edafb3724350f9acc');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        if(isNaN(rate)){
            throw new Error();
        }

        return rate;
    }catch(e){
        throw new Error(`Unable to get exchange rates for ${from} and ${to}`);
    }
 
};

// const getCountries = (currencyCode) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
//         .then((response) => {
//             return response.data.map((country) => country.name);
//         });
// };

const getCountries = async (currencyCode) => {
    try{
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    }catch(e){
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
    
};


const convertCurrency = (from, to, amount) => {
    let convertedAmount;
    return getExchangeRate(from,to).then((rate) => {
        convertedAmount  = (amount * rate).toFixed(2);
        
        return getCountries(to);
    }).then((countries) => {
        
        return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend to following countries: ${countries.join(', ')}`;
    });
};

const convertCurrencyAlt = async (from,to,amount) => {
    const rate = await getExchangeRate(from,to);
    const convertedAmount = (amount * rate).toFixed(2);
    const countries = await getCountries(to);

    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend to following countries: ${countries.join(', ')}`;
}

convertCurrencyAlt('USD', 'USD', 20).then((message) =>{
    console.log(message);
}).catch((e) => {
    console.log(e.message);
});

// const add = async (a,b) => {
//     return a+b+c;
// };



// const doWork = async() => {
//     try{
//         const result = await add(12,13);
//         // return myNumber;
//         return result;
//     }catch(e){
//         console.log(e.message);
//     }
    
// };

// doWork().then((data)=> {
//     console.log(data);
// }).catch((e) =>{
//     console.log('Something went wrong');
// });

// convertCurrency('USD','USD', 20).then((message) => console.log(message));

// getExchangeRate('USD', 'CAD').then((rate) => {
//     console.log(rate);
// });

// getCountries('AED').then((countries) => {
//     console.log(countries);
// })