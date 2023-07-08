import PriceSlides from "./PriceSlides/PriceSlides";
import styles from "./styles.module.scss";

function Pricing()  {

    const tickets: {}[] = [

        {
            id: "basicTicket",
            kind: "Básico",
            pricing: 100,
            featureOne: "Acesso aos shows digitais",
            featureTwo: "Experiência musical imersiva",
            featureThree: "Preço acessível"
        },

        {
            id: "standardTicket",
            kind: "Padrão",
            pricing: 150,
            featureOne: "Acesso aos shows digitais",
            featureTwo: "Benefícios extras",
            featureThree: "Possibilidade de interagir com os artistas"
        },

        {
            id: "vipTicket",
            kind: "VIP",
            pricing: 200,
            featureOne: "Acesso aos shows digitais",
            featureTwo: "Vantagens adicionais",
            featureThree: "Experiência VIP"
        }
    ]

    const ticketSlides = tickets.map(   tickets => 
            <PriceSlides 
                information={tickets}
            />

        )

    return  (
                <>
                    <h1 className={styles.title}>Escolha o tipo de ingresso</h1>
                    <section className={styles.section}>
                                {ticketSlides}
                    </section>
                </>
    )
}

export default Pricing