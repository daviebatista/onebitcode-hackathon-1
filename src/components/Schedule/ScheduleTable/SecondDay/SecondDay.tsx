import styles from "./styles.module.scss";

function SecondDay  ()   {
    return  (
            <section className={styles.section}>
                <div className={styles.shows + " " + styles.activeShow}>
                    <p className={styles.time}>11:00 AM to 11:30 PM</p>
                    <p className={styles.content}>A abertura do dia será performada por Diana Brock, dando a todos os espectadores uma prévia de seu novo álbum que está por vir para o ano que vem!</p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-diana-brock.svg" alt="Yui Ronald" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Diana Brock
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2A03</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.verifyHidden}>
                            <p>Em breve</p>
                            <img src="./src/assets/images/resources/clock.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.verify}>
                        <p>Em breve</p>
                        <img src="./src/assets/images/resources/clock.svg" alt="" />
                    </div>
                </div>
                <div className={styles.shows}>
                    <p className={styles.time}>12:00 PM to 03:00 PM</p>
                    <p className={styles.content}>O trio das artistas queridas da OneBitMusic se une para dar um show único e colaborativo, inaugurando um grande feat entre as três vozes!</p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-diana-brock.svg" alt="Diana Brock" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Diana Brock
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>3B42</strong>
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
                                    <strong>2C10</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-sasha-jackson.svg" alt="Sasha Jackson" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Sasha Jackson
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2BB1</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.verifyHidden}>
                            <p>Em breve</p>
                            <img src="./src/assets/images/resources/clock.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.verify}>
                        <p>Em breve</p>
                        <img src="./src/assets/images/resources/clock.svg" alt="" />
                    </div>
                </div>
                <div className={styles.shows}>
                    <p className={styles.time}>03:00 PM to 04:15 PM</p>
                    <p className={styles.content}>Encerraremos o segundo dia com uma performance única entre os artistas preferidos até então! Neste show conjunto, ambos se unem para cantar juntos os sons que ambos produziram, e dar aos ouvintes e espectadores uma experiência compartilhada eletrizante!</p>
                    <div className={styles.artistsDiv}>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-yui-ronald.svg" alt="Sasha Jackson" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Yui Ronald
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2H41</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.artists}>
                            <img src="./src/assets/images/avatars/artists/artist-avatar-sasha-jackson.svg" alt="Diana Brock" className={styles.avatars} />
                            <span className={styles.artistCard}>
                                <h6 className={styles.artistName}>
                                    Sasha Jackson
                                </h6>
                                <div className={styles.booth}>
                                    <p>Booth: </p>
                                    <strong>2B11</strong>
                                </div>
                            </span>
                        </div>
                        <div className={styles.verifyHidden}>
                            <p>Em breve</p>
                            <img src="./src/assets/images/resources/clock.svg" alt="" />
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

export default SecondDay