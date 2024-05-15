"use client"

import styles from './page.module.scss'

import { useCountriesStore } from '@/store/coutries';

import { useEffect } from 'react';

export default function Section3() {
  
  const { countries, sum, getCountries} = useCountriesStore();

  useEffect(() => {
    getCountries();

  }, [getCountries]);
  return (
    <>
      <div className={styles.section}>

        <div className={styles.title}>
          <h3>Casos mundialmente</h3>
        </div>

        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>País</th>
                <th className={styles.th}>Confirmados</th>
                <th className={styles.th}>Mortes</th>                
              </tr>
            </thead>

            <tbody>
              {countries.map(item => (
                <tr key={item.country}>
                  <td className={styles.td}>{item.country}</td>
                  <td className={styles.td}>{item.confirmed.toLocaleString()}</td>
                  <td className={styles.td}>{item.deaths.toLocaleString()}</td>                  
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.card}>
            <h3 className={styles.cardItem}>Confirmados: {sum.confirmed.toLocaleString()}</h3>
            <h3 className={styles.cardItem}>Mortes: {sum.deaths.toLocaleString()}</h3>
          </div>
        </div>

      </div>
    </>
  )
}
