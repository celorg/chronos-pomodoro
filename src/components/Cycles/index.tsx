import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import styles from './style.module.css'

export function Cycles() {

    const { state } = useTaskContext();

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                <span className={`${styles.cycleDot} ${styles.workTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.workTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.workTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.shortBreakTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.workTime} `}></span>
                <span className={`${styles.cycleDot} ${styles.longBreakTime} `}></span>
            </div>
        </div>
    )
}