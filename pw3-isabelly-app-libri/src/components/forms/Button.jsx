import styles from  '../forms/Button2.module.css'

function Button({rotulo}){
    return(

        <div className={styles.button}>
           <button>{rotulo}</button>
        </div>



    )
}

export default Button