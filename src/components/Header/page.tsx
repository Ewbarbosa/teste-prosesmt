import styles from './page.module.scss'

// componente criado para o HEADER da página

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>Covid-19 - PROMSESMT</h2>
      </header>
    </>
  )
}