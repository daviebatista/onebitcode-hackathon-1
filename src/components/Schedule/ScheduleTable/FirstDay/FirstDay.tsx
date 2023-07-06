import styles from "./styles.module.scss";

function FirstDay  ({props}: any)   {
    return  (
            <section className={styles.section}>
                {props}
            </section>
    )
}

export default FirstDay