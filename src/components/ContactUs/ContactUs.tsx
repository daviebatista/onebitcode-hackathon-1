import styles from "./styles.module.scss";

function ContactUs ()  {
    return  (
                <section className={styles.section} id="contact">
                    <div className={styles.leftDiv}>
                        <h1>Nos contate</h1>
                        <span className={styles.contacts}>
                            <img src="./src/assets/images/resources/icons/phone.svg" alt="phone" />
                            <p>
                                +55 99823-3232
                            </p>
                        </span>
                        <span className={styles.contacts}>
                            <img src="./src/assets/images/resources/icons/email.svg" alt="email" />
                            <p>
                                contato@onebitmusic.com
                            </p>
                        </span>
                        <img src="./src/assets/images/resources/big-shape.svg" alt="shapeDecor" className={styles.shapeDecor} />
                    </div>
                    <div className={styles.rightDiv}>
                        <form className={styles.form}>
                            <h1>Preencha com seus dados</h1>
                            <label htmlFor="">Nome</label>
                            <input type="text" />
                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">Mensagem</label>
                            <input type="text" />
                            <a href="" className={styles.button}>
                                <p>Enviar</p>
                            </a>
                        </form>
                        <div className={styles.smallShapeDecor}>
                            <img src="./src/assets/images/resources/shape.svg" alt="smallShape" className={styles.shape} />
                        </div>
                    </div>
                </section>
    )
}

export default ContactUs