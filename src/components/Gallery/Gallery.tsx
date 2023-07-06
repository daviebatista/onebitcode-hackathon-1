//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './styles.module.scss'
import GallerySlide from './GallerySlide/GallerySlide';

function Gallery    ()  {

    const moments: {}[] = [

        {
            imgUrl: "/src/assets/images/moments/moment-slide-1.svg",
            title: "Explorando Novos Horizontes Musicais",
            description: "Essa foto captura o momento em que mergulhamos na realidade virtual da #OneBitMusic. Foi uma experiência incrível explorar novos horizontes musicais e nos conectar com artistas de todo o mundo. Veja como nossos fãs estão aproveitando essa jornada musical!",
            likes: 80,
            comments: 11
        },

        {
            imgUrl: "/src/assets/images/moments/moment-slide-2.svg",
            title: "Vibrações Eletrizantes na OneBitMusic",
            description: "Uma imagem que captura a energia contagiante do show digital da #OneBitMusic. Os visuais hipnotizantes e a batida pulsante nos transportaram para uma jornada musical incrível. Compartilhe suas fotos e faça parte da nossa galeria de fãs!",
            likes: 312,
            comments: 140
        },

        {
            imgUrl: "/src/assets/images/moments/moment-slide-3.svg",
            title: "Noite Inesquecível com OneBitMusic",
            description: "Uma foto do incrível show de realidade virtual da #OneBitMusic, onde a música e a tecnologia se encontram para criar uma experiência única. Obrigado a todos que compartilharam esse momento conosco!",
            likes: 1029,
            comments: 29
        },

        {
            imgUrl: "/src/assets/images/moments/moment-slide-4.svg",
            title: "A Magia da Música em Realidade Virtual",
            description: "Essa foto é um lembrete da magia que encontramos nos shows digitais da #OneBitMusic. Os óculos de realidade virtual nos transportam para um mundo sonoro único, onde a música ganha vida. Veja como nossos fãs estão aproveitando essa experiência imersiva!",
            likes: 103,
            comments: 12
        },

        {
            imgUrl: "/src/assets/images/moments/moment-slide-5.svg",
            title: "Momentos Inesquecíveis na OneBitMusic",
            description: "Essa imagem representa a alegria e a emoção que experimentamos nos shows da #OneBitMusic. A música nos conecta, nos inspira e nos proporciona momentos inesquecíveis. Compartilhe suas fotos conosco e faça parte dessa galeria de momentos especiais!",
            likes: 78,
            comments: 19
        },
    ]

    const momentSlides = moments.map(   momentImages => 
        <SplideSlide >
            <GallerySlide moment={momentImages} />
        </SplideSlide>
        )


    return(
        <section className={styles.section}>
            <h1>Galeria de Momentos Compartilhados</h1>
            <Splide
                options={{
                    arrow: true,
                    type: "loop",
                    perPage: 5,
                    perMove: 2,
                    gap: "1.5%",
                }}

                style={{cursor: 'pointer'}}
            >
                {momentSlides}
            </Splide>
        </section>
    )
}

export default Gallery