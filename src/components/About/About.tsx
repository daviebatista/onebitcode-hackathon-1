import styles from "./styles.module.scss";

function About ()  {
    return  (
                <section className={styles.section}>
                    <div className={styles.pictures}>
                        <img src="./src/assets/about-us-photography-1.svg" alt="about-us-photography-1" className={styles.image + " over"}/>
                    </div>
                    <div className={styles.description}>
                        <h1>Sobre a gente</h1>
                        <p>Na onebitmusic, estamos redefinindo a maneira como experimentamos e nos envolvemos com a música, utilizando tecnologia de realidade virtual (VR) para criar shows e performances que transcendem os limites físicos e levam você a novos patamares de entretenimento musical.</p>
                        <a href="" className={styles.button}>
                            <p>Ler mais</p>
                            <img src="./src/assets/images/resources/arrow.svg" alt="" />
                        </a>
                    </div>
                </section>
    )
}

export default About