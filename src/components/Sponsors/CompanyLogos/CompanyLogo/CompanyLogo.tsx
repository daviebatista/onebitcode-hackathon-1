import styles from "./styles.module.scss";

function CompanyLogo   ({url}: any)  {

    return  (
                <img src={url} className={styles.sponsors}/>
    )
}

export default CompanyLogo