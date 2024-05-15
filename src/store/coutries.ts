import { create } from 'zustand' // lib responsável por gerenciamento de estados

import axios from 'axios' // lib responsável pela comunicação entre o front e a api

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

// funcao para criar o estado e as funções associadas
export const useCountriesStore = create<CountriesStore>((set) => ({
  countries: [],
  sum: { confirmed: 0, deaths: 0, updated_at: '' },
  getCountries: async () => {

    const response = await api.get('/api/report/v1/countries');

    const data = response.data.data;

    // lógica para exibir um resumo dos dados obtidos
    var sum1 = 0;
    var sum2 = 0;    

    for (let i = 0; i <= data.length - 1; i++) {
      sum1 = sum1 + data[i].confirmed;
      sum2 = sum2 + data[i].deaths;
    }

    set({ countries: data, sum: { confirmed: sum1, deaths: sum2 } })
  }
}))