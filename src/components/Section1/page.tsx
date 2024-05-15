"use client"

import styles from './page.module.scss'

import { useEstadosStore } from '@/store/estado';

import { useEffect } from 'react';

export default function Section1() {

  const { estados, sum, getEstados } = useEstadosStore();

  useEffect(() => {
    getEstados();

  }, [getEstados]);

  return (
    <>
      <div className={styles.section}>

        <h3>Casos no Brasil em cada estado</h3>

        <div className={styles.content}>

          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Estado</th>
                <th className={styles.th}>Casos</th>
                <th className={styles.th}>Mortes</th>
                <th className={styles.th}>Suspeitos</th>
              </tr>
            </thead>

            <tbody>
              {estados.map(item => (
                <tr key={item.uid}>
                  <td className={styles.td}>{item.state}</td>
                  <td className={styles.td}>{item.cases.toLocaleString()}</td>
                  <td className={styles.td}>{item.deaths.toLocaleString()}</td>
                  <td className={styles.td}>{item.suspects.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.card}>
            <h3 className={styles.cardItem}>Casos: {sum.cases.toLocaleString()}</h3>
            <h3 className={styles.cardItem}>Mortes: {sum.deaths.toLocaleString()}</h3>
            <h3 className={styles.cardItem}>Suspeitos: {sum.suspects.toLocaleString()}</h3>
          </div>

        </div>
      </div>
    </>
  )
}