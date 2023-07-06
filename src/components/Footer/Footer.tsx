import styles from "./styles.module.scss";

function Footer ()  {
    return  (
                <section className={styles.footer}>
                    <div className={styles.logo}>
                        <span className={styles.onebit}>onebit</span>
                        <span className={styles.music}>music</span>
                        <img src="../../../src/assets/images/resources/onebit-logo.svg" alt="" className={styles.logoOneBit + " px-1"}/>
                    </div>
                    <div className={styles.rightSide}>
                        <span className={styles.iconsDiv}>
                            <img src="./src/assets/images/icons/facebook.svg" alt="facebookLogo" className={styles.icons}  style={{width: "10%"}}/>
                            <img src="./src/assets/images/icons/twitter.svg" alt="twitterLogo" className={styles.icons} />
                            <img src="./src/assets/images/icons/linkedin.svg" alt="linkedInLogo" className={styles.icons} />
                            <img src="./src/assets/images/icons/instagram.svg" alt="instagramLogo" className={styles.icons} />
                        </span>
                        <p className={styles.brand}>© onebitcode.com, 2023 </p>
                    </div>
                </section>
    )
}

export default Footer