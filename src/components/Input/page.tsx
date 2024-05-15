import styles from './page.module.scss'

import { InputHTMLAttributes, ReactNode} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export default function Input({...rest}) {
  return (
    <input className={styles.input} {...rest} />
  )
}