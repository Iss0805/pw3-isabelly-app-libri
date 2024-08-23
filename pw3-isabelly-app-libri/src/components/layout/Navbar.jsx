import style from './Navbar.module.css'

const NavBar = () =>{

    return(
        <nav className={style.NavBar}>


        <ul className={style.list}>
        <li className={style.item}><img className={style.logo} src="./book.png"/></li>

        <li className={style.item}>HOME</li>
        <li className={style.item}>CADASTRAR LIVROS</li>
        <li className={style.item}>LISTAR LIVROS</li>


        </ul>
        </nav>


    )


}

export default NavBar;