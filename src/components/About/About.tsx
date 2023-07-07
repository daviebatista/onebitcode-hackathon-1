import aosInit from "../common/AOS/AOS";
import styles from "./styles.module.scss";

function About ()  {

    aosInit()

    return  (
                <section className={styles.section}>
                    <div 
                        className={styles.pictures}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img src="/src/assets/about-us-photography-2.svg" alt="about-us-photography-2" className={styles.image}/>
                        <img src="/src/assets/about-us-photography-1.svg" alt="about-us-photography-1" className={styles.image + " " + styles.over}/>
                    </div>
                    <div className={styles.description}>
                        <h1>Sobre a gente</h1>
                        <p>Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical.</p>
                        <a href="" className={styles.button}>
                            <p>Ler mais</p>
                            <img src="/src/assets/images/resources/arrow.svg" alt="" />
                        </a>
                    </div>
                </section>
    )
}

export default About