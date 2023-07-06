import styles from "./styles.module.scss";

function ScheduleTable  ({children}: any)   {
    return  (
            <section className={styles.section}>
                <div className={styles.scheduleHeader}>
                    <h1>Hora</h1>
                    <h1>Conteúdo</h1>
                    <h1>Artistas</h1>
                </div>
                {children}
            </section>
    )
}

export default ScheduleTable