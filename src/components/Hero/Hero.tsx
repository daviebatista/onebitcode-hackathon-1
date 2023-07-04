import Button from "../common/Button/Button";
import styles from "./styles.module.scss";

function Hero()  {
    return  (
                <section className={styles.section}>
                    <div className={styles.callingDiv}>
                        <p className={styles.experience}>
                            <strong>A Sua Melhor Experiência</strong> 
                            <span className={styles.redText}>Musical Digital</span></p>
                        <p className={styles.callingText}>
                            Prepare-se para uma experiência incrível e envolvente, onde a arte se une à performance para criar momentos inesquecíveis.
                            Nossos shows artísticos são projetados para encantar, inspirar e transportar você para um mundo de criatividade e expressão.
                        </p>
                        <div className={styles.options}>
                            <Button 
                                content="Começar" 
                                color="#F64348" 
                                textColor="#FEFEFE"
                                height="50%"
                                width="15%"
                            />
                            <span className={styles.watch}>
                                <img src="../src/assets/images/resources/Play.svg" alt="" />
                                <p>Assistir video</p>
                            </span>
                        </div>
                    </div>
                </section>
    )
}

export default Hero