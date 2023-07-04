//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './styles.module.scss'

function Gallery()  {
    return(
        <>
            <Splide>
                <SplideSlide>...</SplideSlide>
                <SplideSlide>...</SplideSlide>
                <SplideSlide>...</SplideSlide>
                <SplideSlide>...</SplideSlide>
                <SplideSlide>...</SplideSlide>
            </Splide>
        </>
    )
}

export default Gallery