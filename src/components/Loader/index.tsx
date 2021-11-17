import styles from './loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.ring}>
                Chargement
                <span/>
            </div>
        </div>
    )
}

export default Loader;
