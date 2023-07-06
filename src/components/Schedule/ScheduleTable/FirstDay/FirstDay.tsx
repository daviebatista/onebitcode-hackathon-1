import styles from "./styles.module.scss";

function FirstDay  ()   {
    return  (
            <section className={styles.section}>
                <div className={styles.shows + " " + styles.activeShow}>
                    <p className={styles.time}>11:00 AM to 12:00 PM</p>
                    <p className={styles.content}>Desfrute de uma performance emocionante com Yui Ronald, um artista solo que encanta o público com sua voz cativante e letras inspiradoras. Prepare-se para uma noite de músicas envolventes e momentos emocionantes. </p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-yui-ronald.svg" alt="Yui Ronald" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Yui Ronald
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2F12</strong>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={styles.verify}>
                        <p>Prévia</p>
                        <img src="./src/assets/images/resources/Play.svg" alt="" />
                    </div>
                </div>
                <div className={styles.shows}>
                    <p className={styles.time}>12:00 PM to 03:00 PM</p>
                    <p className={styles.content}>O trio que vai levar você a uma jornada musical com suas harmonias vocais encantadoras e arranjos instrumentais cativantes. Prepare-se para desfrutar de um repertório diversificado que abrange diversos estilos musicais e emocione seus sentidos.</p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-bob-john.svg" alt="Bob John" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Bob John
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>3G12</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-yui-ronald.svg" alt="Yui Ronald" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Yui Ronald
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2F12</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-ema-satoshi.svg" alt="Emma Satoshi" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Emma Satoshi
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2A35</strong>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={styles.verify}>
                        <p className={styles.ongoingShow}>AO VIVO</p>
                        <img src="./src/assets/images/resources/camera.svg" alt="" />
                    </div>
                </div>
                <div className={styles.shows}>
                    <p className={styles.time}>03:00 PM to 04:00 PM</p>
                    <p className={styles.content}>A dupla que vai conquistar seu coração com sua música cativante e performances cheias de energia. Com sua sintonia perfeita e talento extraordinário, eles criarão um ambiente envolvente e contagiarão o público com seu estilo musical único.</p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-sasha-jackson.svg" alt="Sasha Jackson" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Sasha Jackson
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2F18</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-diana-brock.svg" alt="Diana Brock" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Diana Brock
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2F24</strong>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={styles.verify}>
                        <p>Em breve</p>
                        <img src="./src/assets/images/resources/clock.svg" alt="" />
                    </div>
                </div>
            </section>
    )
}

export default FirstDay