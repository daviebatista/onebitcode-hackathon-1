import { useState } from "react";
import FirstDay from "./ScheduleTable/FirstDay/FirstDay";
import ScheduleTable from "./ScheduleTable/ScheduleTable";
import styles from "./styles.module.scss";
import SecondDay from "./ScheduleTable/SecondDay/SecondDay";
import ThirdDay from "./ScheduleTable/ThirdDay/ThirdDay";

function Schedule()  {

    const [dayChosen, chooseDay] = useState(1)

    return  (
                <section className={styles.section} id="schedule">
                    <h1>Nossa programação</h1>
                    <div className={styles.daysDiv}>
                        <div 
                            className={styles.days + " currentDay"} 
                            id="day1"
                            onClick={ () => {
                                chooseDay(1)
                                document.getElementById('day1')?.classList.add('currentDay')
                                document.getElementById('day2')?.classList.remove('currentDay')
                                document.getElementById('day3')?.classList.remove('currentDay')
                            }}
                        >
                            <h1>Dia 01</h1>
                            <p>23 Setembro</p>
                        </div>
                        <div className={styles.days} id="day2" 
                            onClick={ () => {
                                chooseDay(2)
                                document.getElementById('day1')?.classList.remove('currentDay')
                                document.getElementById('day2')?.classList.add('currentDay')
                                document.getElementById('day3')?.classList.remove('currentDay')
                            }}
                        >
                            <h1>Dia 02</h1>
                            <p>24 Setembro</p>
                        </div>
                        <div className={styles.days} id="day3" 
                            onClick={ () => {
                                chooseDay(3)
                                document.getElementById('day1')?.classList.remove('currentDay')
                                document.getElementById('day2')?.classList.remove('currentDay')
                                document.getElementById('day3')?.classList.add('currentDay')
                            }}
                        >
                            <h1>Dia 03</h1>
                            <p>25 Setembro</p>
                        </div>
                    </div>
                    <div>
                        {
                            dayChosen === 3 ? 
                            <ThirdDay/> 
                            :
                            <ScheduleTable>
                                {dayChosen === 1 && <FirstDay/>}
                                {dayChosen === 2 && <SecondDay/>}
                            </ScheduleTable> 
                        }
                    </div>
                </section>
    )
}

export default Schedule