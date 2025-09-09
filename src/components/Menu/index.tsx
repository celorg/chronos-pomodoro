import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './style.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

        return storageTheme
    });

    function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        e.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme; 
        })

    }

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);

    useEffect(() => {

    })

    return (
        <>
            <nav className={styles.menu}>
                <a href="#" className={styles.menuLink} aria-label='Ir para Home' title='Home'>
                    <HouseIcon />
                </a>
                <a href="#" className={styles.menuLink} aria-label='Ver historico' title='Historico'>
                    <HistoryIcon />
                </a>
                <a href="#" className={styles.menuLink} aria-label='Configurações' title='Configurações'>
                    <SettingsIcon />
                </a>
                <a href="#"  onClick={(event) => handleThemeChange(event)} className={styles.menuLink} aria-label='Mudar Tema' title='Mudar Tema'>
                    {nextThemeIcon[theme]}
                </a>
            </nav>
            
        </>
        
    )

}