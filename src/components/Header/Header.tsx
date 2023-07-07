import styles from "./styles.module.scss";

function Header ()  {
    return  (
        <nav className={styles.navigation + " navbar navbar-expand-lg container-fluid fixed-top"}>
            <a className="navbar-brand" href="#hero">
                <span className={styles.onebit}>onebit</span>
                <span className={styles.music}>music</span>
                <img src="../../../src/assets/images/resources/onebit-logo.svg" alt="" className={styles.logoOneBit + " px-1"}/>
            </a>
            <button id="nav-button" className="position-relative navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item effect">
                        <a href="#hero" className="nav-link">Inicio</a>
                    </li>
                    <li className="nav-item effect">
                        <a href="#singers" className="nav-link">Artistas</a>
                    </li>
                    <li className="nav-item effect">
                        <a href="#schedule" className="nav-link">Programação</a>
                    </li>
                    <li className="nav-item effect">
                        <a href="#contact" className="nav-link">Contato</a>
                    </li>
                    <li className="nav-item" id={styles.buyTicket}>
                        <a href="#buyTickets" className="nav-link" >Comprar ingressos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header