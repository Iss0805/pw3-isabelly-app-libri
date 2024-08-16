import Style from './CardBooks.module.css'
// props é igual ao json -- parametros titulos e autor são json// props são variaveis dentro da areon function(tipo isso)
import Button from './Button'
const CardBooks = ({titulo,autor,imagem}) => {



    return(
        <div className={Style.CardBooks}>
            <img src={imagem} alt={titulo} title={titulo}></img>
            <h3 className={Style.titulo}>{titulo}</h3>
            <p className={Style.autor}>{autor}</p>
            <div className={Style.buttonContainer}>
           
            <Button label='DETALHE'></Button>

            </div>
          
        </div>
    )

}

export default CardBooks;