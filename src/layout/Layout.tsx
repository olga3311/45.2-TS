import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive : '')} to='/'>home</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive : '')} to='fellowship'>fellowship</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive : '')} to='fetchFox'>fetchFox</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive : '')} to='form-gender'>form-gender</NavLink>

      </header>
      <main className={styles.main}>
        <Outlet />
        {/* на место Outlet импортированного из библиотеки react router будут приходить компоненты из routing, чьи пути мы пропишем в App.tsx */}
      </main>
      <footer className={styles.footer}>
        footer
        </footer>
    </>
  );
}
