import styles from './Button.module.css';

function Button({text, type, onClick}: {text: string, type: string, onClick: () => void}) {
    switch (type) {
        case "primary":
            return (<button onClick={onClick} className={styles.primary}>{text}</button>)
        case "secondary":
            return (<button onClick={onClick} className={styles.secondary}>{text}</button>)
        default:
            type = "primary";
    }
}

export default Button;