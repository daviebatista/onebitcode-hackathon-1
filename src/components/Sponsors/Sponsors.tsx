import CompanyLogos from "./CompanyLogos/CompanyLogos";
import styles from "./styles.module.scss";

function Sponsors   ()  {


    return  (
                <section className={styles.section}>
                    <h1>Nossos investidores</h1>
                    <CompanyLogos/>
                    <a href="" className={styles.button}>
                        <p>
                            Se torne um investidor
                        </p>
                    </a>
                </section>
    )
}

export default Sponsors