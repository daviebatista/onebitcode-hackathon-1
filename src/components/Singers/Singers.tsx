import styles from "./styles.module.scss";

function Singers()  {
    return  (
                <section className={styles.section}>
                    <div className={styles.informations}>
                        <h1>Artistas</h1>
                        <p>
                            No evento da OneBitMusic, você terá a oportunidade de desfrutar de uma incrível variedade de artistas talentosos. 
                            Nossa seleção musical abrange diferentes gêneros e estilos, garantindo uma experiência musical diversificada e emocionante. 
                            De DJs renomados a bandas cativantes, cada artista traz sua paixão e habilidade para criar performances envolventes. 
                            Prepare-se para se surpreender com músicas cativantes, ritmos vibrantes e momentos emocionantes durante todo o evento. 
                            Os artistas da OneBitMusic estão prontos para levar você a uma jornada musical única e inesquecível.
                        </p>
                        <a href="" className={styles.button}>
                            <p>Veja a lista completa</p>
                            <img src="./src/assets/images/resources/arrow.svg" alt="" />
                        </a>
                    </div>
                    <div className={styles.singerImages}>
                        <img src="./src/assets/images/artists/artist-image-1.svg" alt="first-singer" />
                        <img src="./src/assets/images/artists/artist-image-2.svg" alt="second-singer" />
                        <img src="./src/assets/images/artists/artist-image-3.svg" alt="third-singer" />
                        <img src="./src/assets/images/artists/artist-image-4.svg" alt="fourth-singer" />
                    </div>
                </section>
    )
}

export default Singers