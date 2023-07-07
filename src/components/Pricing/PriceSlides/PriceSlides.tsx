import styles from "./styles.module.scss";

function PriceSlides    ({information}: any)  {
    return  (
                <div className={styles.ticket + " " + information.id}>
                    <h6>
                        {information.kind}
                    </h6>
                    <h1>
                        R${information.pricing}
                    </h1>
                    <p >
                        {information.featureOne}
                    </p>
                    <p>
                        {information.featureTwo}
                    </p>
                    <p>
                        {information.featureThree}
                    </p>
                    <a href="">
                        <p>
                            Saber mais
                        </p>
                    </a>
                </div>
    )
}

export default PriceSlides