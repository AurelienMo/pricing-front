import styles from './loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.ring}>
                Chargement
                <span className={styles.spanLoader}/>
            </div>
        </div>
    )
}

export default Loader;
