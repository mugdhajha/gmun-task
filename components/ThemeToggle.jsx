import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../styles/ThemeToggle.module.css"

export default function ThemeToggle() {
    const { theme,setTheme }=useTheme();
    const [mount,setMount] = useState(false);

    useEffect(()=>{
        setMount(true);
    },[])

    if(!mount) return null;

    const switchTheme=()=>{
        setTheme(theme==='dark'?'light':'dark')
    }

    return (
        <label className={styles.switch}>
            <input
            type="checkbox"
            onChange={switchTheme}
            checked={theme==='light'}
            />
            <span className={styles.slider}></span>
        </label>
    )
}
