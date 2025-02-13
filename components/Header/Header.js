import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/games" className={styles.link}>Games</Link>
        <Link href="/about" className={styles.link}>About</Link>
      </nav>
    </header>
  )
}