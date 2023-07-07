import Button from "../common/Button/Button";
import styles from "./styles.module.scss";

function Hero()  {

    const countdownStamp: any = document.getElementById('countdownStamp')
    const expirationDate = new Date("Jul 15, 2023 20:00:00").getTime()

    let countdown = setInterval (
        function countdownTimer ()  {
            let currentTime = new Date().getTime()
            let range = expirationDate - currentTime

            let days = Math.floor(range / (1000 * 60 * 60 * 24))
            let hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((range % (1000 * 60)) / 1000)

                countdownStamp.innerHTML = 
                    days + "d " 
                    + hours + "h "
                    + minutes + "m " 
                    + seconds + "s "

        }

    )


    return  (
                <section className={styles.section} id="hero">
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
                            <a className={styles.watch} href="">
                                <img src="/src/assets/images/resources/Play.svg" alt="" />
                                <p>Assistir video</p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.countdown}>
                        <h1>
                            <strong id="countdownStamp">
                            </strong>
                        </h1>
                    </div>
                </section>
    )
}

export default Hero