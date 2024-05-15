import { create } from "zustand"; // lib responsável por gerenciamento de estados

import axios from 'axios' // lib responsável pela comunicação entre o front e a api

// definindo o tipo para o estado
interface Estado {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
}

// definição do tipo sum
interface SumProps {
  cases: number;
  deaths: number;
  suspects: number;
}

// definição do tipo Store
interface EstadoStore {
  estados: Estado[];  
  sum: SumProps;  
  getEstados: () => Promise<void>;
}

interface EstadoDataStore {
  estados: Estado[];  
  sum: SumProps;  
  getEstadosData: (dt: string) => Promise<void>;
}

// iniciando o axios e configurando a BASEURL
const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh'
});

// Função para criar o estado e as funções associadas
export const useEstadosStore = create<EstadoStore>((set) => ({
  estados: [],  
  sum: { cases: 0, deaths: 0, suspects: 0 }, // inicializa com valores padrão  
  getEstados: async () => {
    try {     

      // realiza um GET no end-point da api
      const response = await api.get('/api/report/v1');

      const data = response.data.data;

      // lógica simples para um resumo dos dados obtidos
      var sum1 = 0;
      var sum2 = 0;
      var sum3 = 0;

      for (let i = 0; i <= data.length - 1; i++) {
        sum1 = sum1 + data[i].cases;
        sum2 = sum2 + data[i].deaths;
        sum3 = sum3 + data[i].suspects;
      }

      set({ estados: data, sum: { cases: sum1, deaths: sum2, suspects: sum3 } }); // atualiza o estado a lista obtida da api              

    } catch (error) {
      console.log('Erro: ', error);
    }
  }
}));

// Função para criar o estado e as funções associadas
export const useEstadosDataStore = create<EstadoDataStore>((set) => ({
  estados: [],  
  sum: { cases: 0, deaths: 0, suspects: 0 }, // inicializa com valores padrão  
  getEstadosData: async (dt: string) => {
    try {

      if(dt === '') {
        alert('A data informada é inválida!');
        return
      }

      // remove os hifens da data obtida pelo input
      const newDate = dt.replace(/-/g, '');

      const response = await api.get('/api/report/v1/brazil/' + newDate);      

      const data = response.data.data;
      
      if(data.length <= 0) {
        alert('Dados não encontrados!');
        return        
      }

      // lógica simples para um resumo dos dados obtidos
      var sum1 = 0;
      var sum2 = 0;
      var sum3 = 0;

      for (let i = 0; i <= data.length - 1; i++) {
        sum1 = sum1 + data[i].cases;
        sum2 = sum2 + data[i].deaths;
        sum3 = sum3 + data[i].suspects;
      }

      set({ estados: data, sum: { cases: sum1, deaths: sum2, suspects: sum3 } }); // atualiza o estado a lista obtida da api              

    } catch (error) {
      console.log('Erro: ', error);
    }
  }
}));