import { CountryData } from "./CountriesData";

export const getTodayData = async () => {
    const countries = <CountryData[]>await (await fetch("https://coronavirus-19-api.herokuapp.com/countries")).json();

    // Put all the country names into an array
    const names = countries.map(c => c.country);

    // Remove the first "World" element
    names.shift()

    // Put all the country today cases into an array
    const cases = countries.map(c => c.todayCases);

    // remove the first "World" element
    cases.shift();


    return { names, cases };

}