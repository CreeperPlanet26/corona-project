import { CountryData } from "./CountriesData";

export const getTotalData = async () => {
    const countries = <CountryData[]>await (await fetch("https://coronavirus-19-api.herokuapp.com/countries")).json();
    // const test = <CountryData[]>await (await fetch(`https://api.covidactnow.org/v2/counties.timeseries.json?apiKey=${process.env.API_KEY}`)).json();
    const test = <CountryData[]>await (await fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${process.env.API_KEY}`)).json();

    console.log(test)

    // Put all the country names into an array
    const names = countries.map(c => c.country);

    // Remove the first "World" element
    names.shift()

    // Put all the country total cases into an array
    const cases = countries.map(c => c.cases);

    // remove the first "World" element
    cases.shift();


    return { names, cases };

}