import styles from "./styles.module.scss";

function TestimonialSlide   ({informations}: any)  {
    return  (
                <div className={styles.testimonialSlide}>
                    <div className={styles.testimonialArea}>
                        <img src="./src/assets/images/resources/quotes-left.svg" alt="quotesUp" className={styles.quotesUp}/>
                        <p>
                            {informations.testimonial}
                        </p>
                        <img src="./src/assets/images/resources/quotes-right.svg" alt="quotesDown" className={styles.quotesDown}/>
                    </div>
                    <div className={styles.testimony}>
                        <img src={informations.picture} alt={informations.name} className={styles.avatar} />
                        <h6>{informations.name}</h6>
                        <p>{informations.location}</p>
                    </div>
                </div>
    )
}

export default TestimonialSlide