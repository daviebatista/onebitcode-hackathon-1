import aosInit from "../../common/AOS/AOS";
import styles from "./styles.module.scss";

function TestimonialSlide   ({informations}: any)  {
    aosInit()

    return  (
                <div 
                    className={styles.testimonialSlide}
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
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