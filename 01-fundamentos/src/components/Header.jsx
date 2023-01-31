import styles from './header.module.css'

console.log(styles);

export function Header() {
  return (
    <h1 className={styles.header}>Oi</h1>
  )
}