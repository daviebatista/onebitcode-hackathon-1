import styles from "./styles.module.scss";

function Button ({color, content, destination, height, textColor, width }: any)  {
    return  (
                <a 
                className   =   {styles.button} 
                style   =  {{
                        backgroundColor: color, 
                        borderColor: color, 
                        color: textColor,
                        height: height,
                        width: width
                    }} 
                href    =   {destination}>
                    <p>{content}</p>
                </a>
    )
}

export default Button