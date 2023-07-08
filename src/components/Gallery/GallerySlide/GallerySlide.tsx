import styles from './styles.module.scss'

function GallerySlide   ({moment}: any)  {
    return  (
                <div className={styles.slide}>
                    <img src={moment.imgUrl} alt={moment.title} />
                    <div className={styles.informations}>
                        <span className={styles.features}>
                            <img src="./src/assets/images/resources/like.svg" alt="likeIcon" className={styles.icons} />
                            <p>{moment.likes}</p>
                        </span>
                        <span className={styles.features}>
                            <img src="./src/assets/images/resources/comment.svg" alt="commentIcon" className={styles.icons} />
                            <p>{moment.comments}</p>
                        </span>
                    </div>
                    <p className={styles.title}>{moment.title}</p>
                    <p className={styles.description}>{moment.description}</p>
                </div>
    )
}

export default GallerySlide