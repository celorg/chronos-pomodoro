import styles from './style.module.css';



export function Footer() {

    return (
        <footer className={styles.footer}>
            <a href="#">Entenda como funciona a técnica de Pomodoro</a>
            <a href="#">Cronos Pomodoro &copy; {new Date().getFullYear()} - Feito 💚</a>
        </footer>
    )

}