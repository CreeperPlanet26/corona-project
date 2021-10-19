import { CountriesDataDTO } from "./types/CountriesDataDTO";
import { StatesDataDTO } from "./types/StatesDataDTO";
const { API_KEY: K } = process.env;

export class CoronaClient {
    private async _get<T = any>(uri: RequestInfo, options?: RequestInit): Promise<T> {
        return await (await fetch(uri, options)).json();
    }

    public async getTodayCountryCases() {
        const countries = await this._get<CountriesDataDTO[]>("https://coronavirus-19-api.herokuapp.com/countries");

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

    public async GetTotalCountryCases() {
        const countries = await this._get<CountriesDataDTO[]>("https://coronavirus-19-api.herokuapp.com/countries");
        // const test = <CountryData[]>await (await fetch(`https://api.covidactnow.org/v2/counties.timeseries.json?apiKey=${process.env.API_KEY}`)).json();
        const states = await this._get<StatesDataDTO[]>(`https://api.covidactnow.org/v2/states.json?apiKey=${K}`);

        console.log(states);

        states.forEach(e => console.log(e.state))

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
}

export const coronaClient = new CoronaClient();