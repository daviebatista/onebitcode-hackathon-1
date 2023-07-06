import ScheduleTable from "./ScheduleTable/ScheduleTable";
import styles from "./styles.module.scss";

function Schedule()  {
    return  (
                <section className={styles.section}>
                    <h1>Nossa programação</h1>
                    <div className={styles.daysDiv}>
                        <div className={styles.days + " currentDay"}>
                            <h1>Dia 01</h1>
                            <p>23 Setembro</p>
                        </div>
                        <div className={styles.days}>
                            <h1>Dia 02</h1>
                            <p>24 Setembro</p>
                        </div>
                        <div className={styles.days}>
                            <h1>Dia 03</h1>
                            <p>25 Setembro</p>
                        </div>
                    </div>
                    <div>
                        <ScheduleTable/>
                    </div>
                </section>
    )
}

export default Schedule