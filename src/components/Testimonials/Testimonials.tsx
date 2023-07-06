import TestimonialSlide from "./TestimonialSlide/TestimonialSlide";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

function Testimonials()  {

    const testimonies: {}[] =   [
        {
            testimonial: "A OneBitMusic não apenas me ofereceu uma plataforma para desfrutar de shows digitais envolventes, mas também me apresentou a artistas independentes incríveis. Através da plataforma, descobri músicos talentosos e me conectei com uma comunidade de amantes da música que compartilham interesses semelhantes. Estou impressionada com o compromisso da marca em valorizar a diversidade e a liberdade artística.",
            picture: "./src/assets/images/avatars/comments/comment-avatar-sofia.svg",
            name: "Sofia",
            location: "Lisboa"
        },

        {
            testimonial: "Através dos shows digitais e da tecnologia de realidade virtual da OneBitMusic, pude mergulhar em um universo musical fascinante. Os visuais deslumbrantes, a qualidade do áudio e a interatividade oferecida pela plataforma me deixaram maravilhado. A OneBitMusic realmente entende como proporcionar experiências musicais únicas e memoráveis.",
            picture: "./src/assets/images/avatars/comments/comment-avatar-carlos.svg",
            name: "Carlos",
            location: "Rio de Janeiro"
        },

        {
            testimonial: "Eu fui apresentada à OneBitMusic por um amigo e decidi experimentar um dos seus shows digitais. A imersão proporcionada pela realidade virtual me fez sentir como se estivesse realmente presente no palco, cercada pelos artistas e envolvida pela música. Foi uma experiência única e emocionante que certamente vou repetir. A OneBitMusic está revolucionando a forma como vivenciamos os shows artísticos.",
            picture: "./src/assets/images/avatars/comments/comment-avatar-ana.svg",
            name: "Ana",
            location: "São Paulo"
        },
    ]

    const testimonialSlides = testimonies.map(   testimonies => 
        <SwiperSlide >
            <TestimonialSlide 
            informations={testimonies} 
            isVisible={true}
            />
        </SwiperSlide>
        )

    return  (
                <section className={styles.section}>
                    <h1>Relatos</h1>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {testimonialSlides}
                    </Swiper>
                </section>
    )
}

export default Testimonials