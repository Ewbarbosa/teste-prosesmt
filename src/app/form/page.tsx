"use client"

import styles from './page.module.scss'

// importação dos componentes
import Header from "@/components/Header/page";
import Input from '@/components/Input/page';

import { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';

interface FormData {
  estado: string;
  casos: number;
  confirmados: number;
  mortos: number;
  recuperados: number;
  data: string;
}

export default function Form() {

  function handle(event: FormEvent) {
    event.preventDefault(); // evita o carregamento da página

    // se os campos não forem preenchidos exibe um alerta e cancela a execução
    if (estado === '' || casos === '' || confirmados === '' || mortos === '' || recuperados === '' || data === '') {
      alert('Preencha todos os campos!')
      return
    }

    const formData: FormData = {
      estado: estado,
      casos: parseFloat(casos),
      confirmados: parseFloat(confirmados),
      mortos: parseFloat(mortos),
      recuperados: parseFloat(recuperados),
      data: data
    };

    // converte os dados para json e formata para melhor visualização
    const jsonData = JSON.stringify(formData, null, 2);

    alert('Dados enviados: \n' + jsonData);

    setEstado('');
    setCasos('');
    setConfirmados('');
    setMortos('');
    setRecuperados('');
    setData('');
  }

  const [estado, setEstado] = useState('');
  const [casos, setCasos] = useState('');
  const [confirmados, setConfirmados] = useState('');
  const [mortos, setMortos] = useState('');
  const [recuperados, setRecuperados] = useState('');
  const [data, setData] = useState('');

  return (
    <div className={styles.container}>

      <Header />

      <form className={styles.form} onSubmit={handle}>

        <Input
          placeholder="Estado"
          value={estado}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEstado(e.target.value)}
        />

        <Input
          placeholder="Casos"
          type='number'
          value={casos}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCasos(e.target.value)}
        />

        <Input
          placeholder="Confirmados"
          type='number'
          value={confirmados}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmados(e.target.value)}
        />

        <Input
          placeholder="Mortos"
          type='number'
          value={mortos}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMortos(e.target.value)}
        />

        <Input
          placeholder="Recuperados"
          type='number'
          value={recuperados}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setRecuperados(e.target.value)}
        />

        <Input
          type='date'
          value={data}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setData(e.target.value)}
        />

        <button className={styles.button} type='submit'>
          Enviar
        </button>

      </form>

    </div>
  )
}