import styles from './page.module.scss'

// componente criado para ser reutilizado no formulário

export default function Input({...rest}) {
  return (
    <input className={styles.input} {...rest} />
  )
}