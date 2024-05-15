import { create } from 'zustand'

import axios from 'axios'

interface Countries {
  country: string;
  confirmed: number;
  deaths: number;
  updated_at: string;
}

// definição do tipo sum
interface SumProps {
  confirmed: number;
  deaths: number;
}

interface CountriesStore {
  countries: Countries[];
  sum: SumProps;
  getCountries: () => Promise<void>;
}

// iniciando o axios e configurando a BASEURL
const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh'
});

export const useCountriesStore = create<CountriesStore>((set) => ({
  countries: [],
  sum: { confirmed: 0, deaths: 0, updated_at: '' },
  getCountries: async () => {

    const response = await api.get('/api/report/v1/countries');

    const data = response.data.data;

    var sum1 = 0;
    var sum2 = 0;
    var newDate = new Date();

    for (let i = 0; i <= data.length - 1; i++) {
      sum1 = sum1 + data[i].confirmed;
      sum2 = sum2 + data[i].deaths;
    }

    set({ countries: data, sum: { confirmed: sum1, deaths: sum2 } })
  }
}))