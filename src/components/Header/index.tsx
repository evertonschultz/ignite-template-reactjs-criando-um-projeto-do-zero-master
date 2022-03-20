import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <Link href="/">
      <div className={styles.headerContainer}>
        <img src="/logo.svg" alt="logo" />
      </div>
    </Link>
  )
}
